var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(10, 2)
    .then( (res) => {
        console.log(1, res);
        return asyncAdd(res, 33);
    })
.then( (res) => {
        console.log(2, res);
    })
.catch((error) => {console.log(error)});



// var somePromise = new Promise((resolve, reject) => {
// setTimeout(()=>{
//     //resolve('it worked')
//     reject('shit happened');
// }, 2000);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (error) => {
//     console.log('error: ', error);
// });

