import ratelimit from "../config/upstash.js";

//buat middleware ratelimiter
const ratelimiter = async(req,res,next)=>{
    try{
        const {success} = await ratelimit.limit("batman"); //cek rate limit dengan key "batman"

        if(!success){//jika rate limit terlewati send 429 too many request
            return res.status(429).json({
                message : "too many request, try again later"
            });   
        }
        next();//lanjut ke middleware selanjutnya jika rate limit belum terlewati

    }catch(error){
        console.error("ratelimit middleware error", error); 
        next(error);
    }
}

export default ratelimiter;

/*
return value dari ratelimit.limit("batman")
{
   success: true,      // <--- Kita cuma butuh ini
   limit: 10,
   remaining: 9,
   reset: 1700000000
}
*/
