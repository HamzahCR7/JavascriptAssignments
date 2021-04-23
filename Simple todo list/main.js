let inputField=document.getElementById('inputData')
let addToDo=document.getElementById('submit')
let todo=document.getElementById('todo')
let cancel=document.getElementById('cancel')
addToDo.addEventListener('click',(()=>{
    let task;
    if(inputField.value.trim()!=0&&inputField.value.length<=28){
        task=document.createElement('p')

    task.classList.add('paragraph-styling')
    task.innerText=inputField.value;
    todo.appendChild(task)
     cancel=document.createElement('button')
            cancel.innerHTML=`<div style="color:pink;width:40px;font-size:20px;padding:2px;background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(121,9,72,1) 0%, rgba(36,0,0,1) 97%);">X</div>`


    task.appendChild(cancel)
   
    cancel.addEventListener('click',(()=>{
        todo.removeChild(task)
        todo.removeChild(cancel)
    }))
    }
    inputField.value=" "
//     task.addEventListener('click',(()=>{
// todo.removeChild(task)
//     }))
 
}))