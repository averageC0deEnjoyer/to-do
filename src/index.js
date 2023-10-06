//try factory function for the selectedProjectGlobal;

import './style.css';
import Project from './javascript/project-constructor.js';
import Todo from './javascript/todo-constructor.js';
import currentProject from './javascript/current-project.js';
import pushProjectToArray from './push-project-to-array.js';
import pushNewTodoToProject from './push-new-todo-to-project.js';

const projectArray = [];
let selectedProjectGlobal;
// have 3 project
let project1 = new Project('example1','test');
let project2 = new Project('example2','test2');
let project3 = new Project('example3','test3');
pushProjectToArray(projectArray, project1);
pushProjectToArray(projectArray, project2);
pushProjectToArray(projectArray, project3);



let todo1 = new Todo('test1','test1','10/07/2023','very1','1');
let todo2 = new Todo('test2','test2','13/07/2023','veryvery','0');
let todo3 = new Todo('test3','test3','25/10/2023','veryy','1');




pushNewTodoToProject(projectArray[1], todo1);
pushNewTodoToProject(projectArray[1], todo2);
pushNewTodoToProject(projectArray[2], todo1);
pushNewTodoToProject(projectArray[2], todo2);
pushNewTodoToProject(projectArray[2], todo3);
console.log(projectArray)


let modalNewProject = document.querySelector('.modal.new-project');
let addProjectBtn = document.querySelector('.add-project-button');
let submitProjectBtn = document.querySelector('.submit-project-button');
let overlay = document.querySelector('.overlay')
addProjectBtn.addEventListener('click', ()=> {
    modalNewProject.classList.add('active');
    overlay.classList.add('active');
})

submitProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let projectName = document.querySelector('.project-name');
    let projectDescription = document.querySelector('.project-description');
    let project = new Project(projectName.value, projectDescription.value);
    pushProjectToArray(projectArray, project); 
    modalNewProject.classList.remove('active');
    overlay.classList.remove('active');
    document.querySelector('.new-project-form').reset();
    projectNavbarDOMController(projectArray);
})

let modalNewTodo = document.querySelector('.modal.new-todo-task');
let addTodoBtn = document.querySelector('.add-task');
let submitTaskBtn = document.querySelector('.submit-task-button');

addTodoBtn.addEventListener('click', ()=> {
    modalNewTodo.classList.add('active');
    overlay.classList.add('active');
})


submitTaskBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let taskName = document.querySelector('.task-name');
    let taskDescription = document.querySelector('.task-description');
    let dueDate = document.querySelector('.due-date');
    let priority = document.querySelector('.priority');
    let taskCheckbox = document.querySelector('.task-checkbox')
    let todo = new Todo(taskName.value, taskDescription.value, dueDate.value, priority.value, taskCheckbox.value);
    pushNewTodoToProject(selectedProjectGlobal, todo);
    modalNewTodo.classList.remove('active');
    overlay.classList.remove('active');
    clearTodoDomList();
    document.querySelector('.new-todo-form').reset();
    displayTodoList(selectedProjectGlobal.todo);
})


function currentTodo(todoArray, todoTitle) {
    for(let i=0; i<todoArray.length; i++) {
        if(todoArray[i].title === todoTitle) {
            return todoArray[i]
        };
    }
}


function deleteTodoFromProject(project, todoTitle) {
    let todoArray = project.todo
    for(let i=0; i<todoArray.length; i++) {
        if(todoArray[i].title === todoTitle) {
            todoArray.splice(i,1);
        }
    }
}

// function changeProjectDescription(project, projectName, projectDescription) {
//     project.projectName = projectName;
//     project.projectDescription = projectDescription;
// }

// function changeTodoDescription(currentTodo, title, desc, dueDate, priority, checklist){
//     currentTodo.title = title;
//     currentTodo.desc = desc;
//     currentTodo.dueDate = dueDate;
//     currentTodo.priority = priority;
//     currentTodo.checklist = checklist;
// }

//add last element of projectArray to the DOM
function projectNavbarDOMController(projectArray) {
    let projectNavbar = document.querySelector('.project-list');    
    let project = document.createElement('div');
    project.classList.add('project-list-detail');
    let projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projectArray[projectArray.length-1].projectName;
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'delete';
    project.append(projectTitle);
    project.append(deleteBtn);
    projectNavbar.append(project);
}

function displayTodoList(arrayTodo) {
    let contentBody = document.querySelector('.content-main')
    for(let i = 0; i < arrayTodo.length; i++) {
        let contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        let contentCardTitle = document.createElement('h1');
        contentCardTitle.classList.add('content-card-title');
        contentCardTitle.textContent = arrayTodo[i].title
        let contentCardDesc = document.createElement('p');
        contentCardDesc.classList.add('content-card-desc');
        contentCardDesc.textContent = arrayTodo[i].desc;
        let contentCardDueDate = document.createElement('div');
        contentCardDueDate.classList.add('content-card-due-date');
        contentCardDueDate.textContent = arrayTodo[i].dueDate;
        let contentCardPriority = document.createElement('div');
        contentCardPriority.classList.add('content-card-priority');
        contentCardPriority.textContent = arrayTodo[i].priority;
        let contentCardCheckList = document.createElement('div');
        contentCardCheckList.classList.add('content-card-checklist');
        contentCardCheckList.textContent = arrayTodo[i].checklist;
        let deleteContentCardBtn = document.createElement('button');
        deleteContentCardBtn.classList.add('delete-content-card-button');
        deleteContentCardBtn.textContent = 'delete'
        contentCard.append(contentCardTitle);
        contentCard.append(contentCardDesc);
        contentCard.append(contentCardDueDate);
        contentCard.append(contentCardPriority);
        contentCard.append(contentCardCheckList);
        contentCard.append(deleteContentCardBtn);
        contentBody.append(contentCard);
    }
}

function clearTodoDomList() {
    let contentBody = document.querySelector('.content-main');
    contentBody.innerHTML = "";
}

//for deleting. use window because if a button generated dynamically, the addEventListener wont work.
document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('delete-button')){
        deleteProject(projectArray, event.target.previousElementSibling.textContent);
        event.target.parentNode.remove();
    }
})


document.body.addEventListener('click', (event)=> {
    
    if(event.target.classList.contains('project-title')) {
        let selectedProject = currentProject(projectArray, event.target.textContent);
        console.log(selectedProject.projectName)
        let selectedProjectTodoList = selectedProject.todo;
        let contentTopTitle = document.querySelector('.content-top-project-name');
        let contentTopDescription = document.querySelector('.content-top-project-description');
        contentTopTitle.textContent = selectedProject.projectName;
        contentTopDescription.textContent = selectedProject.projectDescription;
        clearTodoDomList();
        displayTodoList(selectedProjectTodoList);
        selectedProjectGlobal = selectedProject;
        // console.log(selectedProject.todo);
    }
    
})



document.body.addEventListener('click',(event)=> {
    if(event.target.classList.contains('overlay')){
        modalNewTodo.classList.remove('active');
        modalNewProject.classList.remove('active');
        overlay.classList.remove('active');
    }
})




function deleteProject(projectArray, value) {
    for(let i=0; i<projectArray.length; i++) {
        if(projectArray[i].projectName === value){
            projectArray.splice(i,1);
        }
    }
}



document.body.addEventListener('click',()=>{
    console.log(projectArray);
})

document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-content-card-button')) {
        deleteTodoFromProject(selectedProjectGlobal, event.target.parentNode.firstChild.textContent);
        event.target.parentNode.remove();
    }
})