var outPut = [
    {
        emp_id: 6,
        attendence: "no",
    },
    {
        emp_id: 6,
        attendence: "yes",
    },
    {
        emp_id: 7,
        attendence: "yes",
    },
    {
        emp_id: 7,
        attendence: "no",
    },
    {
        emp_id: 8,
        attendence: "yes",
    }
];
const uniqueEmpIdArr = [...new Set(outPut.map(item => item.emp_id))];
// console.log(unique);


// var arr2 = [];
let finalArray = [];
uniqueEmpIdArr.forEach(empId => {
    var arr2 = outPut.filter(function (element) {
        if (element.emp_id == empId) {
            return true
        }
    })
    let present = 0;
    let absent = 0;
    arr2.forEach(element3 => {
        if (element3.attendence == "yes") {
            present++;
        }
        else {
            absent++;
        }

    })

    const obj = {
        emp_id: empId,
        present_day: present,
        absent_day: absent
    }
    finalArray.push(obj);


    // console.log(present);
    // console.log(absent);


})





console.log(finalArray);




// const arrx = [{ emp_id: 6, attendence: 'no' }, { emp_id: 6, attendence: 'yes' }];
// let present = 0;
// let absent = 0;

// arrx.forEach(element3 => {
//     if (element3.attendence == "yes") {
//         present++;
//     }
//     else {
//         absent++;
//     }

// })


// console.log(present);
// console.log(absent);

// let present = 0;
// let absent = 0;
// let finalArray=[];
// arr2.forEach(element3 => {
//     if (element3.attendence == "yes") {
//         present++;
//     }
//     else {
//         absent++;
//     }

// })
















// const myObjArray = [
//     {
//         name: "Eva Devore",
//         character: "Evandra",
//         episodes: 15,
//     },
//     {
//         name: "Alessia Medina",
//         character: "Nixie",
//         episodes: 15,
//     },
//     {
//         name: "Kendall Drury",
//         character: "DM",
//         episodes: 15,
//     },
//     {
//         name: "Thomas Taufan",
//         character: "Antrius",
//         episodes: 14,
//     },
//     {
//         name: "Alessia Medina",
//         character: "Nixie",
//         episodes: 15,
//     },
// ];

// // Creates an array of objects with unique "name" property values.
// let uniqueObjArray = [
//     ...new Map(myObjArray.map((item) => [item["name"], item])).values(),
// ];

// console.log("uniqueObjArray", uniqueObjArray);
// var maybe = [...new Map(outPut.map((item) => [item["emp_id"], item])).values()];

// // LOGS:
// // uniqueObjArray [
// //   { name: 'Eva Devore', character: 'Evandra', episodes: 15 },
// //   { name: 'Alessia Medina', character: 'Nixie', episodes: 15 },
// //   { name: 'Kendall Drury', character: 'DM', episodes: 15 },
// //   { name: 'Thomas Taufan', character: 'Antrius', episodes: 14 }
// // ]

// console.log(maybe);





//1

const https = require('https');

// Our Long Operation  
function fetchData(url) {
    const promiseToken = new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (rd) => data = data + rd);
            response.on('end', () => resolve(data));
        });
    });
    return promiseToken;
}

console.log('Program Starts');

const promiseToken = fetchData('https://www.javascript.com/');
promiseToken.then((promisedData) => {
    console.log(promisedData.length);
});

console.log('Program Ends');



//2


const https = require('https');

// Our Long Operation  
function fetchData(url) {

    const promiseToken = new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (rd) => data = data + rd);
            response.on('end', () => resolve(data));
        });
    });

    return promiseToken;
}

async function read() {
    const promisedData = await fetchData('https://www.javascript.com/');
    console.log(promisedData.length);
};


console.log('Program Starts');

read();

console.log('Program Ends');






