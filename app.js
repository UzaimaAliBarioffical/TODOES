let userInput =document.getElementById("user-input");
let task = document.getElementById("task");

function addTask(){
if (userInput.value===""){
    alert("Enter Your Task")
}else{
    let creatLi =document.createElement("li");
    creatLi.innerHTML = userInput.value
    task.appendChild(creatLi);
    userInput.value="";
    // Create Edit Btn
    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-sharp fa-solid fa-user-pen"></i>`; 
    task.appendChild(editBtn);
    editBtn.addEventListener("click",function(){
        let newInput =document.createElement("input");
creatLi.appendChild(newInput);
// editBtn.style.display="none"
let changebut =document.createElement("button");
changebut.innerHTML="Edit Task";
creatLi.appendChild(changebut);
changebut.addEventListener("click",function(){
    creatLi.innerHTML=newInput.value;

changebut.style.display="none"

}

)
    })

    // Create Del Btn
    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    task.appendChild(delBtn);
    delBtn.addEventListener('click',function(){
        creatLi.remove();
        delBtn.style.display="none"
editBtn.style.display="none"
        
    })

}}