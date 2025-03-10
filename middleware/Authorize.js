import User from "../models/UserModel.js";
import jwt from "jsonwebtoken"

const Authorize = async (req,res,next) => {
    try {
       const token = req.cookies.jwt;
       if(!token) return res.status(401).json({message: "Unauthorize"})
       
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       const user = await User.findById(decoded.userId).select("-password");
       req.user = user;
       next();
    } catch (error) {
       res.status(500).json({message: error.message})
       console.log(`Error in Authorize: ${error.message}`)
    }
 }
 
 export default Authorize