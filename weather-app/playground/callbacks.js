var getUser = (id, callback) => {
    var user = {
        id : id,
        name : 'v'
    };
    setTimeout(()=>{callback(user);},100) 
};

getUser(10, (user) => {
    console.log(user);
})