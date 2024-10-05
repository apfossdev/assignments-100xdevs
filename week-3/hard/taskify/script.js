// on click add new create a temp div that take 3 infos - title, desc and urgency

const main = document.getElementById('main');
const toDoDiv = document.getElementById('to-do');
toDoDiv.setAttribute("ondragover", "onDragOver(event)");
toDoDiv.setAttribute('ondrop',"onDrop(event)");
const inProgressDiv = document.getElementById('in-progress');
inProgressDiv.setAttribute("ondragover", "onDragOver(event)");
inProgressDiv.setAttribute("ondrop", "onDrop(event)");
const underReviewDiv = document.getElementById('under-review');
underReviewDiv.setAttribute("ondragover", "onDragOver(event)");
underReviewDiv.setAttribute("ondrop", "onDrop(event)");
const finishedDiv = document.getElementById('finished');
finished.setAttribute("ondragover", "onDragOver(event)");
finished.setAttribute("ondrop", "onDrop(event)");
const addNewToDoBtn = document.getElementById('add-new-to-do-btn');
const inputDiv = document.createElement("div");

function submitBtnFunctionality(titleInput, descInput, urgencyInput) {
    const title = document.createElement('h3');
    title.innerHTML = titleInput.value;
    const desc = document.createElement("h4");
    desc.innerHTML = descInput.value;
    const urgency = document.createElement("h5");
    urgency.innerHTML = urgencyInput.value;
    
    inputDiv.innerHTML = '';

    const taskDiv = document.createElement('div');
    taskDiv.appendChild(title);
    taskDiv.appendChild(desc);
    taskDiv.appendChild(urgency);
    toDoDiv.appendChild(taskDiv);
    
    taskDiv.setAttribute('draggable','true');
    taskDiv.setAttribute('ondragstart',"onDragStart(event)");
    

}

function inputTaskDiv(){
    const titleInput = document.createElement('input');
    titleInput.setAttribute("type",'text');
    titleInput.setAttribute('placeholder','Title: ');
    const descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("placeholder", "Description: ");
    const urgencyInput = document.createElement('input');
    urgencyInput.setAttribute("type", "text");
    urgencyInput.setAttribute("placeholder", 'Urgency - Low/Med/Urgent ');
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';
    submitBtn.addEventListener("click", () => {
      submitBtnFunctionality(titleInput, descInput, urgencyInput);
    });
    inputDiv.appendChild(titleInput);
    inputDiv.appendChild(descInput);
    inputDiv.appendChild(urgencyInput);
    inputDiv.appendChild(submitBtn);
    toDoDiv.appendChild(inputDiv);
}

function addNewTodo(){
    //create a new input div and delete it
    inputTaskDiv();
}

// Drag and drop functionality
let draggedItem = null;

function onDragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData("text/plain", draggedItem.textContent);
}

function onDragOver(event) {
    event.preventDefault(); // Prevent default browser behavior
}

function onDrop(event) {
    event.preventDefault(); // Prevent default browser behavior
    if (draggedItem) {
        event.target.appendChild(draggedItem);
    }
}





// then remove this prev div
// create a new div with this task along with the title, desc and urgency - low(green), med(yellow), urgent(red) and date & time at which task was created (along with which div it belongs to, with an id ig )
// implement the drag drop functionality using api for each div