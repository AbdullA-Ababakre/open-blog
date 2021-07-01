const p= Promise.race([
  fetch('https://www.baidu.com'),
  new Promise((resolve, reject)=>{
        setTimeout(()=>{reject(new Error('request time out') )},5000);
  })  
])

p.then(console.log)
.catch(console.error)