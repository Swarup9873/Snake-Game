//object -> group of key : value pair
//key: value -> property
//key: function-> method
let cap={
    name:"AB",
    country:"SA",
    age:"37",
    is_Sportsman: true,
    favs:["VK","BAZ","QD","FAF"],
    sayHi : function (){
        console.log("cap says hi");
    }

};

//get
/* console.log(cap.name);
console.log(cap.country, cap.age);
cap.sayHi();
console.log(cap.favs[2]);
 
//SET/UPDATE 
console.log("cap :",cap);
cap.age=35;
cap.is_Sportsman=false;
console.log('');


//delete
delete cap.name; 
console.log("cap :",cap); */
for(let key in cap){
    console.log(key,":",cap[key]);
}

