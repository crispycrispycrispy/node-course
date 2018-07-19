console.log('Starting app');

setTimeout( () => {
    console.log('Firing');
},2000);
setTimeout( () => {
    console.log('Firing 2');
},0);
console.log('Finishing up');