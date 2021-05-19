const promise = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        // resolve('this is my resolved data');
        // resolve('this is my other resolved data');  // this won't show - it can only be resolved once
        reject('something went wrong');
    }, 1500)
    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error)
})

// promise.then((data) => {
//     console.log('2', data);
// })

console.log('after');