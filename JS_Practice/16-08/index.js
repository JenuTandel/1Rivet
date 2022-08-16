const person_details = [
    { firstname: "Jinal", lastname: "Tandel", age: 26, dob: "6-6-1996" },
    { firstname: "Shweta", lastname: "Sutariya", age: 32, dob: "30-10-1991" },
    { firstname: "Arpan", lastname: "Tandel", age: 20, dob: "14-4-2002" },
    { firstname: "Dvs", lastname: "Tandel", age: 33, dob: "28-2-1990" },
    { firstname: "Aishwarya", lastname: "Somani", age: 33, dob: "28-2-1990" },
]

var ul = document.getElementById("person_list");

/* Synchronous Function */

function addData(person) {
    person_details.push(person);
    console.log("person added");
}

function getData() {
    person_details.forEach((data) => {
        ul.innerHTML += `<li>
        ${data.firstname}
        </li>`
    })
}

const data = { firstname: "Vishwani", lastname: "Patel", age: 26, dob: "28-2-1996" }
addData(data);
getData();




