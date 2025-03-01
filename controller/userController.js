import User from "../models/UserModel.js";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/helper/generateToken.js";
import History from "../models/SearchHistory.js";


const createUser = async(req, res) => {
     try {
        const {name, email, password, profession} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({error: 'User already exists'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name: name,
            email: email,
            profession: profession,
            password: hashedPassword
        });

        await newUser.save();
        if(newUser){
            const getToken = generateToken(newUser._id,res)
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                profession: newUser.profession,
                token: getToken
            })
        }
        else {
            res.status(400).json({ error: "Invalid User Data" })
        }

     } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(`Error in signupUser: ${error.message}`)
     }
}

const login = async (req, res) => {
    try {
        const {email, password}  = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) return res.status(400).json({ error: "invalid email or password" })
        const getToken = generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profession: user.profession,
            token: getToken
        });


    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(`Error in signupUser: ${error.message}`)
    }
}

const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(`Error in logOutUser: ${error.message}`)
    }
}

const syncHistory = async (req, res) => {
    try {
        const { UserId, template, prompt, aiResponse } = req.body;

        // Ensure the user exists
        const user = await User.findOne({ _id: UserId });
        if (!user) {
            return res.status(400).json({ error: "User Not Found !!" });
        }

        // Create and save history entry
        const syncToHistory = new History({
            userId: UserId,
            template: template,
            prompt: prompt,
            aiResponse: aiResponse
        });

        await syncToHistory.save();

        res.status(200).json({ message: "Synced Successfully !!" });
    } catch (error) {
        console.error(`Error in syncHistory: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

const getUserHistory = async (req, res) => {
    try {
        const history = await History.find({userId:req.params.id}).sort({createdAt: -1});
        if (!history) {
            return res.status(404).json({ error: "History not found" });
        }
        res.status(200).json(history);
    } catch (error) {
        console.error(`Error fetching history: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { createUser, login, logoutUser, syncHistory, getUserHistory }