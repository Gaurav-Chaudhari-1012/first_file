let input=document.getElementById('input');
let data=document.getElementById('data');
let addBtn=document.getElementById('addBtn')

addBtn.addEventListener('click',()=>{
    if(input.value==""){
        alert("Please enter the data")
}else {
   let newElement=document.createElement('ul');
   newElement.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
   data.appendChild(newElement);
   input.value='';
   newElement.querySelector('i').addEventListener('click',()=>{
    newElement.remove();
   })
}
})