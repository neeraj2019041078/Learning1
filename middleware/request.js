// implent a middleware funciton in middleware.js that limits request to specific route to 5 request per minute
//  from a single IP address . No need to use any third party libraries for this implementation .
//   just use the core concepts of express.js  to demostrate the rate limiting


// const ratelimit={};
// const Time_frame=60*1000;
// const Limit=5;
// const rateLimiter=(req,res,next)=>{
//     const ip=req.ip;

//     if(!ratelimit[ip]){
//         ratelimit[ip]=[];
//     }

//     const currentTime=Date.now();
   
//     ratelimit[ip]=ratelimit[ip].filter(timestamp=>currentTime-timestamp<Time_frame);
//     if(ratelimit[ip].length>=Limit){
//         return res.status(500).json({
//             message: 'Too many requests, please wait a minute.'
//         })
//     }
//     ratelimit[ip].push(currentTime);
//     next();
// }
// module.exports=rateLimiter;

// const express = require('express');
// const rateLimiterMiddleware = require('./middleware'); // Import the rate limiter
// const app = express();

// app.get('/api', rateLimiterMiddleware, (req, res) => {
//   res.send('API response');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
