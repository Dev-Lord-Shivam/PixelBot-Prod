import jwt from 'jsonwebtoken'

const generateToken = (userId,res) => {

    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "7d",
    })
    res.cookie("jwt", token,{
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, //1 days
        sameSite:"strict"
    })
    return token;
}

export default generateToken
