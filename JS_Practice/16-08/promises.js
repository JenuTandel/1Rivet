// Promises

function addData(){
    return new Promise(function(resolve,reject){
        const error = false;
        if(!error)
        {
            resolve();
        }
        else{
            reject();
        }
    })  
}

addData().then(function(){
    console.log("Resolved");
}).catch(function(){
    console.log("Rejected");
}).finally(function(){
    console.log("Finally")
})