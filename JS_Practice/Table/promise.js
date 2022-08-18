const person_details = [
    { firstname: "Jinal", lastname: "Tandel", age: 26, dob: "6-6-1996" },
    { firstname: "Shweta", lastname: "Sutariya", age: 32, dob: "30-10-1991" },
    { firstname: "Arpan", lastname: "Tandel", age: 20, dob: "14-4-2002" },
    { firstname: "Dvs", lastname: "Tandel", age: 33, dob: "28-2-1990" },
    { firstname: "Aishwarya", lastname: "Somani", age: 33, dob: "28-2-1990"},
]


const tdata = document.getElementById("tb");
const table = document.querySelector(".table-format");
//window.onload = getData();

function addData(person) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            person_details.push(person);
            console.log("person added");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000)
    })
}

function getData(arr) {
    setTimeout(() => {
        arr.forEach((data) => {
            const tr = document.createElement('tr');
            console.log(tr);
            for (i in data) {
                const td = document.createElement('td');
                td.textContent = data[i];
                tr.appendChild(td);
                console.log(tr);
            }
            tdata.appendChild(tr);
            console.log(tdata);
        })
    })
}

getData(person_details);
// const pdata = { firstname: "Vishwani", lastname: "Patel", age: 25, dob: "28-2-1996" }

// addData(pdata).then(function () {
//     getData(person_details);
// }).catch(function () {
//     console.log("Rejected");
// })


function searchData() {

    const norecord = document.querySelector('.no-record');
    var inp = document.getElementById("username");
    var uname = inp.value.toLowerCase();
    console.log(uname);
    tdata.textContent = '';
    let filterdata = [];

    if (uname !== '') {
        filterdata = person_details.filter((item) => {
            return item.firstname.toLowerCase().includes(uname);
        })
    }
    else {
        filterdata = person_details;
    }
    console.log(filterdata);

    if (!filterdata.length) {
        table.classList.add(['d-none']);
        norecord.classList.remove(['d-none']);
    }
    else {
        table.classList.remove(['d-none']);
        norecord.classList.add(['d-none']);
    }
    getData(filterdata);
}

function pwindow() {
    document.querySelector(".popup").classList.toggle("d-none");
    document.querySelector(".pop-up-wrapper").classList.toggle("d-flex");
}

function addUser() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;

    const p = { firstname: fname, lastname: lname, age: age, dob: dob };

    addData(p).then(function () {
        tdata.textContent="";
        getData(person_details);
    }).catch(function () {
        console.log("Rejected");
    })
}