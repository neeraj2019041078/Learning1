// // hosting is like when you use var and let even before its memory excution phase is called hosting

// console.log(foo);
// var foo="Hello world";
// console.log(foo);

// function bar(){
//     console.log(foo);
//     var foo="Hello from nerraj";
//     console.log(foo);
// }
// bar();
// console.log(foo);



// const express = require("express");
// const EventEmitter=require("events");
// const app = express();
// const chatEmitter=new EventEmitter();

// const Port = process.env.Port || 8000; 
// // app.get('/', (req, res) => {
// //     res.send("hello");
// // });
// chatEmitter.on('messagereceived',(message)=>{
//     setTimeout(()=>{

//         console.log('storing message',message)
//     }, 1000)
// })

// chatEmitter.on('messagereceived',(message)=>{
//     setTimeout(()=>{

//         console.log('Notifying',message)
//     }, 500)
// })

// chatEmitter.on('messagereceived',(message)=>{
//     setTimeout(()=>{

//         console.log('Logging',message)
//     }, 1500)
// })
// function receivemessage(message){
//     console.log("Message Send",message);
//     chatEmitter.emit('messagereceived',message);
// }

// receivemessage("hello , How are you ? ")
// app.listen(Port, () => { 
//     console.log(`Server is listening at ${Port}`);
// });


// const { error } = require("console");
const https=require("https");
const ApiUrl='https://fakestoreapi.com/products';
const fetchData=(url)=>{
return new Promise((resolve,reject)=>{
    const req=https.get(url,(response)=>{
        let data='';

        if(response.statusCode!=200){
            return reject(new Error("Errror is not 200"))
        }
        response.on('data',(chunk)=>{
            data+=chunk
        })

        response.on('end',()=>{
            try{
                const jsonData=JSON.parse(data);
                
                resolve(jsonData)

            }
            catch(err){
                return reject(new Error(''))
            }
        })

    })
    req.on('error',(error)=>{
        return reject(new Error("unable to get url for fetching"))
    })
})
}
fetchData(ApiUrl).then((data)=>{
    if(Array.from(data)&& data.length>0 ){
        const requireData=data.slice(0,10).map(prod=>prod.title)
        console.log(requireData);
    }
    else{
        console.log("no Data")
    }
}).catch((err)=>{
    console.log(err.message)
})


// const https = require("https");
// const apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=&page_size=10&json=true';

// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     const req = https.get(url, (response) => {
//       let data = '';

//       if (response.statusCode !== 200) {
//         return reject(new Error(`Failed to fetch data: ${response.statusCode}`));
//       }

//       response.on('data', (chunk) => {
//         data += chunk;
//       });

//       response.on('end', () => {
//         try {
//           const jsonData = JSON.parse(data);
//           resolve(jsonData);
//         } catch (err) {
//           reject(new Error(`Error parsing JSON: ${err.message}`));
//         }
//       });
//     });


//     req.on('error', (error) => {
//       reject(new Error(`Request error: ${error.message}`));
//     });
//   });
// };

// fetchData(apiUrl).then((data) => {
//   if (data && data.products) {
//     const firstTenProducts = data.products.slice(0, 10);
//     console.log("First 10 products:", firstTenProducts);
//   } else {
//     console.log("No product data found.");
//   }
// }).catch((error) => {
//   console.error("Error in fetching data:", error.message);
// });
