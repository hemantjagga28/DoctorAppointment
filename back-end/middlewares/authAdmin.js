import jwt from "jsonwebtoken"

//Admin authentication middleware

const authadmin = async (req,res,next)=>{
    try {
        console.log('working')
        const {atoken} = req.headers
        if (!atoken) {
            return res.json({success:false, message: 'Not authorized Login Again'})
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message: 'Not Authorized Login Again'})
        }

        next()

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authadmin