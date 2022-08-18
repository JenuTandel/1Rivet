const person_details = [
    { firstname: "Jinal", lastname: "Tandel", age: 26, dob: "6-6-1996" },
    { firstname: "Shweta", lastname: "Sutariya", age: 32, dob: "30-10-1991" },
    { firstname: "Arpan", lastname: "Tandel", age: 20, dob: "14-4-2002" },
    { firstname: "Dvs", lastname: "Tandel", age: 33, dob: "28-2-1990" },
    { firstname: "Aishwarya", lastname: "Somani", age: 33, dob: "28-2-1990" },
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

// function searchData() {

//     const inp = document.getElementById("username").value;
//     console.log(inp);
//     const tr = tb.getElementsByTagName("tr");
//     for(var i= 0;i<tr.length;i++)
//     {
//         tr[i].style.display = "none";
//         const td = tr[i].getElementsByTagName("td");
//         // console.log(td[0]);
//         if(inp === td[0].innerText){
//             console.log("Match");
//             tr[i].style.display = "";
//         }
//     }
// }

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
    // document.querySelector("body").classList.toggle("blur");
}
