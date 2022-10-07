const person_details = [
    { firstname: "Jinal", lastname: "Tandel", age: 26, dob: "6-6-1996" },
    { firstname: "Shweta", lastname: "Sutariya", age: 32, dob: "30-10-1991" },
    { firstname: "Arpan", lastname: "Tandel", age: 20, dob: "14-4-2002" },
    { firstname: "Dvs", lastname: "Tandel", age: 33, dob: "28-2-1990" },
    { firstname: "Aishwarya", lastname: "Somani", age: 33, dob: "28-2-1990" },
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
            // console.log(tr);
            for (i in data) {
                const td = document.createElement('td');
                td.textContent = data[i];
                tr.appendChild(td);
                // console.log(tr);
            }
            tdata.appendChild(tr);
            // console.log(tdata);
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
    var input = inp.value.toLowerCase();
    // console.log(input);
    tdata.textContent = '';
    let filterdata = [];

    if (input !== '') {
        filterdata = person_details.filter((item) => {
            return item.firstname.toLowerCase().includes(input) || item.lastname.toLowerCase().includes(input);
        })
    }
    else {
        filterdata = person_details;
    }
    // console.log(filterdata);

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
        tdata.textContent = "";
        getData(person_details);
    }).catch(function () {
        console.log("Rejected");
    })
}

function filterTable() {
    let dropdown, rows, switching, filter;
    dropdown = document.getElementById("person_data");
    rows = table.rows;
    filter = dropdown.value;
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;
        var storedate = [];
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            if (filter == "FirstName") {
                x = rows[i].getElementsByTagName("td")[0];
                y = rows[i + 1].getElementsByTagName("td")[0];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (filter == "LastName") {
                x = rows[i].getElementsByTagName("td")[1];
                y = rows[i + 1].getElementsByTagName("td")[1];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (filter == "Age") {
                x = rows[i].getElementsByTagName("td")[2];
                y = rows[i + 1].getElementsByTagName("td")[2];
                if (x.innerHTML > y.innerHTML) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (filter == "BirthDate") {

                x = rows[i].getElementsByTagName("td")[3];
                y = rows[i + 1].getElementsByTagName("td")[3];

                console.log(x, y);

                // storedate.sort(function(x, y) {
                //     return x - y;
                // });

                // if (x - y) {
                //     shouldSwitch = true;
                //     break;
                // }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}