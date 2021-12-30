// 多个请求的并行控制器

// [],max

// 1.make a queue
// 2.put four url
// 3.send reqeust(loop)
// 4.check whether success 
// 5.add


// getSum(obj) -> number和

let obj = {
    a: 1,
    b: 10,
    c: {
        a: 'hello',
        b: 'world'
    },
    d: ['hello', '1', 2]
}


const checkChild = (child) => {

}

for (let key in obj) {
    let sum = 0;
    if (typeof obj[key] === 'object') {
        // object
        if (checkChild(obj[key])) {

        } else {

        }
        //array
        if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
                if (typeof obj[key][i] === 'number') {
                    sum += obj[key][i];
                }
            }
        }
    } else {
        // string 
        // boolean 
        // undefined null
        // number 
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
}





// 闭包
function a() {
    let par = 'par';
    function b() {
        let name = '1';
    }
}


// compareVersion(v1, v2) >  1/0/-1，    版本号格式'a.b.c.d.e'

// (1.2.3.4) (2.2.3)

const compareVersion = (v1, v2) => {
    const v1 = v1.replace('.', '');   //1234  
    const v2 = v2.replace('.', '');    //223   

    // 1.create a array
    // string 
    [1,2,3,4]
    [0,2,2,3]
    // 2.same length
    // 3.compare
    
}





