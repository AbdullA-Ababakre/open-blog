const promise=new Promise((resolve, reject) =>{
    resolve(30); 
})

promise.then((res)=>{
    console.log(res);
})