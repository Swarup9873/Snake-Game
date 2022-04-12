const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")


grandparent.addEventListener('click', HiThere)

setTimeout(() =>{

    //this is a remove event parameter
    grandparent.removeEventListener('click',HiThere)
},3000)




parent.addEventListener('click', e => {
    // To stop an upcoming events from happening we use stopPropagation()---> 
    e.stopPropagation();
    console.log("Hello habibi");
});


child.addEventListener('click', e => {
    // e.stopPropagation()
    console.log("Hello baiccha");
},
//to run an ovent only once and then stop it completely we use once:true--->
{once:true});

function HiThere(){
   console.log("Hey kutta")
}
