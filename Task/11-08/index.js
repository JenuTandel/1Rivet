const person_details = [
    { firstname: "Jinal", lastname: "Tandel", age: 26, dob: "6-6-1996" },
    { firstname: "Hetal", lastname: "Tandel", age: 32, dob: "30-10-1991" },
    { firstname: "Arpan", lastname: "Tandel", age: 20, dob: "14-4-2002" },
    { firstname: "Dvs", lastname: "Tandel", age: 33, dob: "28-2-1990" }
]

const tdata = document.getElementById("tb");

person_details.forEach(data => {
    const row = document.createElement("tr");
    for (i in data) {
        const column = document.createElement("td");
        column.textContent = data[i];
        row.appendChild(column);
    }
    console.log(row);
    tdata.appendChild(row);
})


function searchData() {
    const d = document.getElementById("username").value;
    console.log(d);

    // const obj1 = Object.entries(person_details);

    // obj1.forEach(([key, value]) => {
    //     console.log(key,value);
    // }
    // )

    
}
