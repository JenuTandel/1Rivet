// const product_item = [
//     { pname: "Skippy Peanut Butter 160z", date: "07 Nov, 8:35pm", type: "Discarded", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "08 Nov, 8:35pm", type: "Want", cost: "$40.27", lastdate: "18 Aug", list: "August", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "09 Nov, 8:35pm", type: "Waiting", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "10 Nov, 8:35pm", type: "Discarded", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "11 Nov, 8:35pm", type: "Cancelled", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "12 Nov, 8:35pm", type: "Want", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "13 Nov, 8:35pm", type: "Want", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
//     { pname: "Skippy Peanut Butter 160z", date: "14 Nov, 8:35pm", type: "Want", cost: "$40.27", lastdate: "18 Aug", list: "Grocery", auto: "No" },
// ]

const tbody = document.getElementById("tb");
const table = document.querySelector(".table-format");

let product_item = [];

async function getJSONData() {
    const data = await fetch('http://127.0.0.1:5500/product.json');
    product_item = await data.json();
    getData(product_item);
}

getJSONData();

function getData(arr) {
    setTimeout(() => {
        arr.forEach((item) => {
            const tr = document.createElement('tr');
            for (i in item) {
                const td = document.createElement('td');
                if(i === "type"){
                    let span = document.createElement('span');
                    span.classList.add('badge')
                    span.textContent = item[i];
                    if(item[i]=="Discarded")
                    {
                        span.classList.add('badge-danger');
                    }
                    if(item[i]=="Want")
                    {
                        span.classList.add('badge-success');
                    }
                    if(item[i]=="Waiting")
                    {
                        span.classList.add('badge-warning');
                    }
                    td.appendChild(span);
                }
                else{
                    td.textContent = item[i];
                }
                // console.log(i);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
    },)
}

function searchItem() {
    const norecord = document.querySelector('.no-record');
    var inp = document.getElementById("searchbar");
    var ptype = inp.value.toLowerCase();
    // console.log(ptype);
    tbody.textContent = '';
    let filterdata = [];

    if (ptype !== '') {
        filterdata = dm.filter((item) => {
            return item.type.toLowerCase().includes(ptype);
        })
    }
    else {
        filterdata = dm;
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

//getData(product_item);

function searchItem() {
    const norecord = document.querySelector('.no-record');
    var inp = document.getElementById("searchbar");
    var ptype = inp.value.toLowerCase();
    // console.log(ptype);
    tbody.textContent = '';
    let filterdata = [];

    if (ptype !== '') {
        filterdata = product_item.filter((item) => {
            return item.type.toLowerCase().includes(ptype);
        })
    }
    else {
        filterdata = product_item;
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

// const itemtype = product_item.map((item) => {
//     return {
//         type: item.type
//     }
// });

// // console.log(typeof itemtype);

// function Checkcolor() {
//     itemtype.filter((item) => {
//         console.log(item.type);
//         if (item.type == "Discarded") {
//             td.classList.add("style", "color:red");
//         }

//         if (item.type == "Want") {

//         }
//         if (item.type = "Waiting") {

//         }
//     })
// }
