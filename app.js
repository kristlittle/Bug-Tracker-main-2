//JAVASCRIPT


const cards = document.querySelectorAll(".card");
const allLists = document.querySelectorAll(".status");

let draggableTodo = null;


cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
})

//MOVING AND DRAGGIN CARDS FUNCTIONS.
//drag action started
function dragStart()
{
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragStart");
        
}

//drag action stopped/ended
function dragEnd()
{
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragEnd");
        
}

allLists.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);

})


//drag over new block
function dragOver(e)
{
    e.preventDefault();
    //console.log("dragOver");   
}

//entereing new block
function dragEnter()
{
    this.style.border = "3px dashed #ddd";
    console.log("dragEnter");   
}

//drag leaving
function dragLeave()
{
    this.style.border = "none";
    console.log("dragLeave");   
}

//drag to be dropped 
function dragDrop()
{
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");   
}


// MODAL - JavaScript Modal
const btns = document.querySelectorAll("[data-target-modal]");
const closeModal = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");


//ERROR: overlay.classList.add("active"); = Uncaught TypeError: Cannot read property 'classList' of null
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
    document.querySelectorAll(btns.targetModal).classList.add("active");
       overlay.classList.add("active");
    });
});

//ERROR: overlay.classList.remove("active"); = Uncaught TypeError: Cannot read property 'classList' of null

//MODAL: removing modal popup
closeModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});


window.onclick = (event) => {
    if (event.target == overlay)
    {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");  
    }   
}





/* ISSUE CREATION. */
const issue_submit = document.getElementById("todo_submit");

//todo_submit.addEventListener("click", createTodo);

issue_submit.addEventListener("click", createIssue);

    

function createIssue()
{
    console.log("BUTTON WORKING!!");
}



/*
function createTodo() 
{
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("todo_input").value;
    const txt = document.createTextNode(input_val);

    todo_div.appendChild(txt);
    todo_div.classList.add("issue");
    todo_div.setAttribute("draggable", "true");

    //SPAN CREATION
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);

    //ERROR : "no_status" is not defined at HTMLInputElement.createTodo
    no_status.appendChild(todo_div);

    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    });

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    document.getElementById("todo_input").value = "";
    issue_form.classList.remove("active");
    overlay.classList.remove("active");
}
*/

//Close Modal
const close_btns = document.querySelectorAll(".close");

    close_btns.forEach((btn) => 
    {
    btn.addEventListener("click", () => 
    {
        btn.parentElement.style.display = "none";
    });
    });






//<!--/* ** CODE SPRINT PROJECT -- BUG TRACKER  ** 
 //KRISTOFF L.  © Kristoff L. All Rights Reserved.-->