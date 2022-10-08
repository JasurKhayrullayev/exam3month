// string number bigInt boolean undefained null symbol object 

// 1-masala

// let arr = ["keep" , "remove", "keep", "remove"]; 
// function remove(arr) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         if ( index % 2 === 0) {
//             newArr.push(arr[index]); 
//         }
//     }
//     return newArr;
// }
// console.log(remove(arr));

// 2-masala


function change(str){
    return str.split(' ').map(e=>e[0].toUpperCase()).join(".")
}
change("xayrullayev Jasur")
console.log(change(str));
