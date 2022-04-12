//spread operator ----->

arr =[1,20,3,4]

function avg(a,b,c,d){
    return (a+b+c+d)/4
}

let a =avg(...arr)
console.log(a);

a2=[3,5,7,9]

let d=[...arr,...a2];
console.log(d);

obj1={
    name: "swarup",
    college: "2nd year",
    favlang: "javascript"
}
console.log(obj1);

// let obj2={}
// obj2.name=obj1.name;
// obj2.college=obj1.college;
// obj2.favlang="pytohn";
// console.log(obj2);

let obj2={...obj1,favlang:"python"};
console.log(obj2); 




////  destructuring----->

let obj3={
    name1:"kutuzs",
    colllege:"JU",
    favlang:"C++"
}

console.log(obj3)

let {name1,colllege,favlang} = obj3; //destructuring....
console.log(name1,colllege,favlang);