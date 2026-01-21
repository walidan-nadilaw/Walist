import {Ratelimit} from "@upstash/ratelimit"; //import ratelimit from upstash for rate limiting
import {Redis} from "@upstash/redis"; //import redis from upstash for stroring rate limit data
import dotenv from 'dotenv'; //import dotenv to load environment variables from .env file
dotenv.config();//load environment variables from .env file

//buat middleware ratelimit dengan 5 request per 10 detik
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "5 s")
})

export default ratelimit;