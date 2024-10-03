// const errorHandler=async(err,req,res,next)=>{
//    try{
//     const statusCode=res.statusCode>=400?res.statusCode:500;
//     res.status(statusCode).json({
//         message:err.message
//     })
//    }
//    catch{
//     console.log(err.message)
//    }

// }
// module.exports=errorHandler;

// const express = require('express');
// const app = express();
// const errorHandler = require('./errorHandler');

// // Example route that throws a synchronous error
// app.get('/error', (req, res, next) => {
//     throw new Error('This is a synchronous error!');
// });

// // Example route that throws an asynchronous error
// app.get('/async-error', async (req, res, next) => {
//     try {
//         // Simulating async error
//         throw new Error('This is an asynchronous error!');
//     } catch (err) {
//         next(err); // Pass the error to the error handler
//     }
// });

// // Your routes would go here

// // Error-handling middleware (should be the last middleware)
// app.use(errorHandler);

// // Start the server
// app.listen(5000, () => {
//     console.log('Server running on port 5000');
// });
