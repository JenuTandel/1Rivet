const person_details = [
    { firstname: "Jinal", lastname: "Tandel", age: 26, dob: "6-6-1996" },
    { firstname: "Shweta", lastname: "Sutariya", age: 32, dob: "30-10-1991" },
    { firstname: "Arpan", lastname: "Tandel", age: 20, dob: "14-4-2002" },
    { firstname: "Dvs", lastname: "Tandel", age: 33, dob: "28-2-1990" },
    { firstname: "Aishwarya", lastname: "Somani", age: 33, dob: "28-2-1990" },
]

const tdata = document.getElementById("tb");

function addData(person){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            person_details.push(person);
            console.log("person added");

            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        },3000)
    })
}

function getData(){
    setTimeout(()=>{
        person_details.forEach((data)=>{
            const tr = document.createElement('tr');
            for(i in data){
                const td = document.createElement('td');
                td.textContent = data[i];
                tr.appendChild(td);
            }
            tdata.appendChild(tr);
        })
    })
}
// const pdata = {firstname: "Vishwani", lastname: "Patel", age: 25, dob: "28-2-1996"}



addData(pdata).then(function(){
    getData();
}).catch(function(){
    console.log("Rejected");
})

function searchData() {
    var inp = document.getElementById("username");
    var uname = inp.value.toUpperCase();
    console.log(uname);
    const tr = tb.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[0];
        var txt = td.innerText;
        console.log(txt.toUpperCase().indexOf(uname));
        if (txt.toUpperCase().indexOf(uname) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function pwindow() {
    document.querySelector(".popup").classList.toggle("d-none");
}
