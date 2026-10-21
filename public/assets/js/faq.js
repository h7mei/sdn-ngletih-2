const items = document.querySelectorAll(".faq-item");

items.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

items.forEach(i=>{

if(i!==item){

i.classList.remove("active");

}

});

item.classList.toggle("active");

});

});



const search=document.getElementById("faqSearch");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

items.forEach(item=>{

const text=item.innerText.toLowerCase();

item.style.display=text.includes(value)?"block":"none";

});

});