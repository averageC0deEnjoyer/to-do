//try factory function for the selectedProjectGlobal;

import './style.css';
import Project from './javascript/project-constructor.js';
import Todo from './javascript/todo-constructor.js';
import currentProject from './javascript/current-project.js';
import pushProjectToArray from './javascript/push-project-to-array.js';
import pushNewTodoToProject from './javascript/push-new-todo-to-project.js';

const projectArray = [];
let selectedProjectGlobal; //currentProject State
let selectedTodoGlobal;



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
//



let modalNewProject = document.querySelector('.modal.new-project');
let addNewProjectBtn = document.querySelector('.add-project-button');
let submitNewProjectBtn = document.querySelector('.submit-project-button');
let overlay = document.querySelector('.overlay');


addNewProjectBtn.addEventListener('click', ()=> {
    modalNewProject.classList.add('active');
    overlay.classList.add('active');
})

submitNewProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let projectName = document.querySelector('.project-name');
    let projectDescription = document.querySelector('.project-description');
    let isProjectExist = projectArray.some(item => item.projectName === projectName.value);
    if(!isProjectExist){
        if(projectName.value === ""){
            alert('Please input the name');
        } else {
            let project = new Project(projectName.value, projectDescription.value);
            pushProjectToArray(projectArray, project); 
            modalNewProject.classList.remove('active');
            overlay.classList.remove('active');
            document.querySelector('.new-project-form').reset();
            projectNavbarDOMController(projectArray)}
    } else {
        alert('Project already exists');
    }
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
    let dueDate = document.querySelector('.due-date-new-todo');
    let priorityNewTodo = document.querySelector('.priority-new-todo');
    let taskCheckbox = document.querySelector('.task-checkbox');
    taskCheckbox.checked == true ? taskCheckbox.value = 1 : taskCheckbox.value = 0;
    let isTodoExists = selectedProjectGlobal.todo.some(item => item.title === taskName.value);
    if(!isTodoExists) {let todo = new Todo(taskName.value, taskDescription.value, dueDate.value, priorityNewTodo.value, taskCheckbox.value);
        pushNewTodoToProject(selectedProjectGlobal, todo);
        modalNewTodo.classList.remove('active');
        overlay.classList.remove('active');
        clearTodoDomList();
        document.querySelector('.new-todo-form').reset();
        displayTodoList(selectedProjectGlobal.todo);
        console.log(projectArray);}
    else {
        alert('todo already exists!')
    }
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

function changeProjectDescription(project, projectName, projectDescription) {
    project.projectName = projectName;
    project.projectDescription = projectDescription;
}

function changeTodoDescription(currentTodo, title, desc, dueDate, priority, checklist){
    currentTodo.title = title;
    currentTodo.desc = desc;
    currentTodo.dueDate = dueDate;
    currentTodo.priority = priority;
    currentTodo.checklist = checklist;
}

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
        contentCardTitle.classList.add('content-card-info', 'title');
        contentCardTitle.textContent = arrayTodo[i].title
        let contentCardDesc = document.createElement('p');
        contentCardDesc.classList.add('content-card-info', 'desc');
        contentCardDesc.textContent = arrayTodo[i].desc;
        let contentCardDueDate = document.createElement('div');
        contentCardDueDate.classList.add('content-card-info', 'due-date');
        contentCardDueDate.textContent = arrayTodo[i].dueDate;
        let contentCardPriority = document.createElement('div');
        contentCardPriority.classList.add('content-card-info', 'priority');
        contentCardPriority.textContent = arrayTodo[i].priority;
        let contentCardCheckList = document.createElement('div');
        contentCardCheckList.classList.add('content-card-info', 'checklist');
        contentCardCheckList.textContent = arrayTodo[i].checklist;
        let updateContentCardBtn = document.createElement('button');
        updateContentCardBtn.classList.add('update-content-card-button');
        updateContentCardBtn.textContent = 'update'
        let deleteContentCardBtn = document.createElement('button');
        deleteContentCardBtn.classList.add('delete-content-card-button');
        deleteContentCardBtn.textContent = 'delete'
        contentCard.append(contentCardTitle);
        contentCard.append(contentCardDesc);
        contentCard.append(contentCardDueDate);
        contentCard.append(contentCardPriority);
        contentCard.append(contentCardCheckList);
        contentCard.append(updateContentCardBtn);
        contentCard.append(deleteContentCardBtn);
        contentBody.append(contentCard);
    }
}

//edit the content card
document.body.addEventListener('click', (event)=> {    
    if(event.target.classList.contains('update-content-card-button')) {
        let editTaskName = document.querySelector('.edit-task-name');
        let editTaskDescription = document.querySelector('.edit-task-description');
        let editTaskDueDate = document.querySelector('.edit-due-date');
        let editPriority = document.querySelector('.edit-priority');
        let editTaskCheckbox = document.querySelector('.edit-task-checkbox');
        let modalEditTodo = document.querySelector('.modal.edit-todo-task');
        modalEditTodo.classList.add('active');
        overlay.classList.add('active');
        let currentTitleTodo = event.target.parentNode.firstChild.textContent;
        let selectedTodo = currentTodo(selectedProjectGlobal.todo, currentTitleTodo);
        selectedTodoGlobal = selectedTodo;
        editTaskName.value = selectedTodo.title;
        editTaskDescription.value = selectedTodo.desc; 
        editTaskDueDate.value = selectedTodo.dueDate;
        editPriority.value = selectedTodo.priority;
        selectedTodo.checklist == 1 ? editTaskCheckbox.checked = true : editTaskCheckbox.checked = false;
    }
    
})



let modalEditTodo = document.querySelector('.modal.edit-todo-task');
document.body.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('submit-edit-task-button')) {
        event.preventDefault();
        
        let editTaskName = document.querySelector('.edit-task-name');
        let editTaskDescription = document.querySelector('.edit-task-description');
        let editTaskDueDate = document.querySelector('.edit-due-date');
        let editPriority = document.querySelector('.edit-priority');
        let editTaskCheckbox = document.querySelector('.edit-task-checkbox');
        editTaskCheckbox.checked == true ? editTaskCheckbox.value = 1 : editTaskCheckbox.value = 0;
        let isTodoExists = selectedProjectGlobal.todo.some(item => item.title === editTaskName.value);
        let isSameTodo = selectedTodoGlobal.title === editTaskName.value;
        if(isSameTodo) {
            changeTodoDescription(selectedTodoGlobal, editTaskName.value, editTaskDescription.value, editTaskDueDate.value, editPriority.value, editTaskCheckbox.value);
            clearTodoDomList();
            displayTodoList(selectedProjectGlobal.todo);
            modalEditTodo.classList.remove('active');
            overlay.classList.remove('active');
            console.log(projectArray);
        } else if (!isSameTodo) {
            if(!isTodoExists) {
                changeTodoDescription(selectedTodoGlobal, editTaskName.value, editTaskDescription.value, editTaskDueDate.value, editPriority.value, editTaskCheckbox.value);
                clearTodoDomList();
                displayTodoList(selectedProjectGlobal.todo);
                modalEditTodo.classList.remove('active');
                overlay.classList.remove('active');
                console.log(projectArray);
            } else {
                alert('Todo already exists! Choose another name')
            }
        }
    }  
})
//add preventDefault for submitBtn


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
        let selectedProjectTodoList = selectedProject.todo;
        let contentTopTitle = document.querySelector('.content-top-project-name');
        let contentTopDescription = document.querySelector('.content-top-project-description');
        contentTopTitle.textContent = selectedProject.projectName;
        contentTopDescription.textContent = selectedProject.projectDescription;
        clearTodoDomList();
        displayTodoList(selectedProjectTodoList);
        selectedProjectGlobal = selectedProject;
    }
    
})



document.body.addEventListener('click',(event)=> {
    let modalEditTodo = document.querySelector('.modal.edit-todo-task');
    if(event.target.classList.contains('overlay')){
        modalNewTodo.classList.remove('active');
        modalEditTodo.classList.remove('active');
        modalNewProject.classList.remove('active');
        modalEditProject.classList.remove('active');
        overlay.classList.remove('active');
    }
})



//for Array
function deleteProject(projectArray, value) {
    for(let i=0; i<projectArray.length; i++) {
        if(projectArray[i].projectName === value){
            projectArray.splice(i,1);
        }
    }
}


document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-content-card-button')) {
        deleteTodoFromProject(selectedProjectGlobal, event.target.parentNode.firstChild.textContent);
        event.target.parentNode.remove();
    }
})
let modalEditProject = document.querySelector('.modal.edit-project');
document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('edit-project-button')){
        modalEditProject.classList.add('active');
        overlay.classList.add('active');
        let currentProjectTitle = selectedProjectGlobal.projectName;
        let currentProjectDescription = selectedProjectGlobal.projectDescription;
        let editProjectNameArea = document.querySelector('.edit-project-name');
        let editProjectDescriptionArea = document.querySelector('.edit-project-description');
        editProjectNameArea.value = currentProjectTitle;
        editProjectDescriptionArea.value = currentProjectDescription;
    }
})

let submitEditProjectBtn = document.querySelector('.submit-edit-project-button');
submitEditProjectBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let projectNavbar = document.querySelector('.project-list');   
    let editProjectNameArea = document.querySelector('.edit-project-name');
    let editProjectDescriptionArea = document.querySelector('.edit-project-description');
    

    let contentTopTitle = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    let isProjectExist = projectArray.some(item => item.projectName === editProjectNameArea.value);
    let isSameProject = editProjectNameArea.value === selectedProjectGlobal.projectName;
    if(isSameProject){
        changeProjectDescription(selectedProjectGlobal,editProjectNameArea.value,editProjectDescriptionArea.value);
            projectNavbar.innerHTML = '';
            for(let i=0; i<projectArray.length; i++) {
                let project = document.createElement('div');
                project.classList.add('project-list-detail');
                let projectTitle = document.createElement('h2');
                projectTitle.classList.add('project-title');
                projectTitle.textContent = projectArray[i].projectName;
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-button');
                deleteBtn.textContent = 'delete';
                project.append(projectTitle);
                project.append(deleteBtn);
                projectNavbar.append(project);
            }
        contentTopTitle.textContent = selectedProjectGlobal.projectName;
        contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
        modalEditProject.classList.remove('active');    
        overlay.classList.remove('active');
    } else if (!isSameProject) {
        if(!isProjectExist){
            if(editProjectNameArea.value === "") {
                alert('Please input project name');
            } else {
                changeProjectDescription(selectedProjectGlobal,editProjectNameArea.value,editProjectDescriptionArea.value);
                projectNavbar.innerHTML = '';
                for(let i=0; i<projectArray.length; i++) {
                    let project = document.createElement('div');
                    project.classList.add('project-list-detail');
                    let projectTitle = document.createElement('h2');
                    projectTitle.classList.add('project-title');
                    projectTitle.textContent = projectArray[i].projectName;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-button');
                    deleteBtn.textContent = 'delete';
                    project.append(projectTitle);
                    project.append(deleteBtn);
                    projectNavbar.append(project);
                }
            }
            contentTopTitle.textContent = selectedProjectGlobal.projectName;
            contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
            modalEditProject.classList.remove('active');    
            overlay.classList.remove('active');
        } else {
            alert('Project already exists');
        }
    }
})




document.body.addEventListener('click', ()=> {
    console.log(projectArray);
})