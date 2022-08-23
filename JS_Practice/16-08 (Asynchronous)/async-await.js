//async and await

async function addData(){
    console.log("any2");
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("any1");
    const dat = await data.json();
    return dat;
}

let a = addData();
console.log("any");
console.log(a);
const dm = a.then(d=>console.log('data:',d));
//console.log(typeof dm);


