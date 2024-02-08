

let button = document.querySelector(".button")
let popup = document.querySelector(".priority")
button.addEventListener("click",()=>{
    popup.classList.remove("d-none")
   
})
let save_btn = document.querySelector(".save")
save_btn.addEventListener("click",()=>{
    let new_data = {
        Todo:Name.value,
        Description:description.value,
        Priority:dc.value
    }
    let data_list = localStorage.getItem("todo");
         data_list = data_list === null?[]:JSON.parse(data_list);
        data_list.push(new_data)
    if(
        Todo.value =="" || 
        Description.value =="" 
        
    ){
        alert("Fill all Information")
    }
    else{
        localStorage.setItem("todo",JSON.stringify(data_list))
    alert("Your data is saved")
    popup.classList.add("d-none")}
})

