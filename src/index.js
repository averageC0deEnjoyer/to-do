//try factory function for the selectedProjectGlobal;

import './style.css';
import Project from './javascript/project-constructor.js';
import Todo from './javascript/todo-constructor.js';
import selectProject from './javascript/current-project.js';
import pushProjectToArrayProject from './javascript/push-project-to-array.js';
import pushTodoToArrayTodo from './javascript/push-new-todo-to-project.js';
import {addDays} from 'date-fns';

const arrayProject = [];
let selectedProjectGlobal;
let selectedTodoGlobal;


function initializeDOMDisplay(){
    let project1 = new Project('example1','test');
    let project2 = new Project('example2','test2');
    let project3 = new Project('example3','test3');
    pushProjectToArrayProject(arrayProject, project1);
    pushProjectToArrayProject(arrayProject, project2);
    pushProjectToArrayProject(arrayProject, project3);



    let todo1 = new Todo('test1','test1','2023-07-10','low','1');
    let todo2 = new Todo('test2','test2','2023-07-13','medium','0');
    let todo3 = new Todo('test3','test3','2023-10-25','high','1');



    pushTodoToArrayTodo(arrayProject[0].todo, todo1);
    pushTodoToArrayTodo(arrayProject[0].todo, todo2);
    pushTodoToArrayTodo(arrayProject[0].todo, todo3);
    pushTodoToArrayTodo(arrayProject[1].todo, todo1);
    pushTodoToArrayTodo(arrayProject[1].todo, todo2);


    let contentTopProjectName = document.querySelector('.content-top-project-name');
    let contentTopProjectDescription = document.querySelector('.content-top-project-description');
    selectedProjectGlobal = arrayProject[0]; //currentProject State
    contentTopProjectName.textContent = selectedProjectGlobal.projectName;
    contentTopProjectDescription.textContent = selectedProjectGlobal.projectDescription;
    displayArrayTodoDOM(selectedProjectGlobal.todo)
}

hideEditProjectBtnAndAddTodoBtn();
function hideEditProjectBtnAndAddTodoBtn() {
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    if (arrayProject.length === 0) {
        editProjectBtn.classList.add('hide');
        addTodoBtn.classList.add('hide');
    }};
// initializeDOMDisplay();

function showEditProjectBtnAndAddTodoBtn() {
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    editProjectBtn.classList.remove('hide');
    addTodoBtn.classList.remove('hide');
    };

let modalNewProject = document.querySelector('.modal.new-project');
let addNewProjectBtn = document.querySelector('.add-project-button');
let submitNewProjectBtn = document.querySelector('.submit-project-button');
let overlay = document.querySelector('.overlay');
let modalNewTodo = document.querySelector('.modal.new-todo-task');
let addNewTodoBtn = document.querySelector('.add-task');
let submitNewTodoBtn = document.querySelector('.submit-task-button');
let modalEditTodo = document.querySelector('.modal.edit-todo-task');
let modalEditProject = document.querySelector('.modal.edit-project');
let submitEditProjectBtn = document.querySelector('.submit-edit-project-button');

addNewProjectBtn.addEventListener('click', ()=> {
    modalNewProject.classList.add('active');
    overlay.classList.add('active');
})

submitNewProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let newProjectName = document.querySelector('.project-name');
    let newProjectDescription = document.querySelector('.project-description');
    let isProjectExist = arrayProject.some(item => item.projectName === newProjectName.value);
    let contentTopName = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    if(!isProjectExist){
        if(newProjectName.value === ""){
            alert('Please input the name');
        } else {
            let project = new Project(newProjectName.value, newProjectDescription.value);
            pushProjectToArrayProject(arrayProject, project); 
            selectedProjectGlobal = arrayProject[arrayProject.length-1];
            modalNewProject.classList.remove('active');
            contentTopName.textContent = selectedProjectGlobal.projectName;
            contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
            overlay.classList.remove('active');
            document.querySelector('.new-project-form').reset();
            addNewProjectToNavBarDOM(arrayProject);
            clearArrayTodoDOM();
            showEditProjectBtnAndAddTodoBtn();
        }
    } else {
        alert('Project already exists');
    }
})

addNewTodoBtn.addEventListener('click', ()=> {
    modalNewTodo.classList.add('active');
    overlay.classList.add('active');
})


submitNewTodoBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let newTodoName = document.querySelector('.task-name');
    let newTodoDescription = document.querySelector('.task-description');
    let newTodoDueDate = document.querySelector('.due-date-new-todo');
    let newTodoPriority = document.querySelector('.priority-new-todo');
    let newTodoCheckbox = document.querySelector('.task-checkbox');
    newTodoCheckbox.checked == true ? newTodoCheckbox.value = 1 : newTodoCheckbox.value = 0;
    let isTodoExists = selectedProjectGlobal.todo.some(item => item.name === newTodoName.value);
    if(!isTodoExists) {
        let todo = new Todo(newTodoName.value, newTodoDescription.value, newTodoDueDate.value, newTodoPriority.value, newTodoCheckbox.value);
        pushTodoToArrayTodo(selectedProjectGlobal.todo, todo);
        modalNewTodo.classList.remove('active');
        overlay.classList.remove('active');
        clearArrayTodoDOM();
        document.querySelector('.new-todo-form').reset();
        
        displayArrayTodoDOM(selectedProjectGlobal.todo);
        // selectedProjectGlobal.todo.forEach(todo => {
        //     todoDiv = document.querySelector('.card-content')
        //     changeTodoDOMBackgroundColor(todoDiv, todo.priority)
        // });
        selectedTodoGlobal = todo;
    
    } else {
        alert('Todo already exists, please change Todo Name')
    }
})

//add last element of arrayProject to the DOM
function addNewProjectToNavBarDOM(arrayProject) {
    let projectNavbarDOM = document.querySelector('.project-list');    
    let project = document.createElement('div');
    project.classList.add('project-list-detail');
    let projectName = document.createElement('h2');
    projectName.classList.add('project-title');
    projectName.textContent = arrayProject[arrayProject.length-1].projectName;
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'delete';
    project.append(projectName);
    project.append(deleteBtn);
    projectNavbarDOM.append(project);
}

//function to select todo
function selectTodo(arrayTodo, todoName) {
    for(let i=0; i<arrayTodo.length; i++) {
        if(arrayTodo[i].name === todoName) {
            return arrayTodo[i]
        };
    }
}

//delete todo from array todo function
function deleteTodoFromArrayTodo(project, todoName) {
    let arrayTodo = project.todo
    for(let i=0; i<arrayTodo.length; i++) {
        if(arrayTodo[i].name === todoName) {
            arrayTodo.splice(i,1);
        }
    }
}

//update Project description function
function changeProjectDescription(selectedProject, projectName, projectDescription) {
    selectedProject.projectName = projectName;
    selectedProject.projectDescription = projectDescription;
}

//update ToDo Description function
function changeTodoDescription(selectedTodo, name, desc, dueDate, priority, checkbox){
    selectedTodo.name = name;
    selectedTodo.desc = desc;
    selectedTodo.dueDate = dueDate;
    selectedTodo.priority = priority;
    selectedTodo.checkbox = checkbox;
}


//display arrayTodo to DOM
function displayArrayTodoDOM(arrayTodo) {
    let contentBody = document.querySelector('.content-main')
    for(let i = 0; i < arrayTodo.length; i++) {
        let contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        changeTodoDOMBackgroundColor(contentCard,arrayTodo[i].priority,arrayTodo[i].checkbox);
        let contentCardName = document.createElement('h1');
        contentCardName.classList.add('content-card-info', 'Name');
        contentCardName.textContent = arrayTodo[i].name
        let contentCardDesc = document.createElement('p');
        contentCardDesc.classList.add('content-card-info', 'desc');
        contentCardDesc.textContent = arrayTodo[i].desc;
        let contentCardDueDate = document.createElement('div');
        contentCardDueDate.classList.add('content-card-info', 'due-date');
        contentCardDueDate.textContent = arrayTodo[i].dueDate;
        let contentCardPriority = document.createElement('div');
        contentCardPriority.classList.add('content-card-info', 'priority');
        contentCardPriority.textContent = arrayTodo[i].priority;
        let contentCardCheckBox = document.createElement('div');
        contentCardCheckBox.classList.add('content-card-info', 'checkbox');
        contentCardCheckBox.textContent = arrayTodo[i].checkbox;
        let updateContentCardBtn = document.createElement('button');
        updateContentCardBtn.classList.add('update-content-card-button');
        updateContentCardBtn.textContent = 'update'
        let deleteContentCardBtn = document.createElement('button');
        deleteContentCardBtn.classList.add('delete-content-card-button');
        deleteContentCardBtn.textContent = 'delete'
        contentCard.append(contentCardName);
        contentCard.append(contentCardDesc);
        contentCard.append(contentCardDueDate);
        contentCard.append(contentCardPriority);
        contentCard.append(contentCardCheckBox);
        contentCard.append(updateContentCardBtn);
        contentCard.append(deleteContentCardBtn);
        contentBody.append(contentCard);
    }
}

//update/edit Todo
document.body.addEventListener('click', (event)=> {    
    if(event.target.classList.contains('update-content-card-button')) {
        let editTodoName = document.querySelector('.edit-task-name');
        let editTodoDescription = document.querySelector('.edit-task-description');
        let editTodoDueDate = document.querySelector('.edit-due-date');
        let editTodoPriority = document.querySelector('.edit-priority');
        let editTodoCheckbox = document.querySelector('.edit-task-checkbox');
        let modalEditTodo = document.querySelector('.modal.edit-todo-task');
        modalEditTodo.classList.add('active');
        overlay.classList.add('active');
        let currentNameTodo = event.target.parentNode.firstChild.textContent;
        let selectedTodo = selectTodo(selectedProjectGlobal.todo, currentNameTodo);
        selectedTodoGlobal = selectedTodo;
        editTodoName.value = selectedTodo.name;
        editTodoDescription.value = selectedTodo.desc; 
        editTodoDueDate.value = selectedTodo.dueDate;
        editTodoPriority.value = selectedTodo.priority;
        selectedTodo.checkbox == 1 ? editTodoCheckbox.checked = true : editTodoCheckbox.checked = false;
    }
})


document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('submit-edit-task-button')) {
        event.preventDefault();
        let editTodoName = document.querySelector('.edit-task-name');
        let editTodoDescription = document.querySelector('.edit-task-description');
        let editTodoDueDate = document.querySelector('.edit-due-date');
        let editTodoPriority = document.querySelector('.edit-priority');
        let editTodoCheckbox = document.querySelector('.edit-task-checkbox');
        editTodoCheckbox.checked == true ? editTodoCheckbox.value = 1 : editTodoCheckbox.value = 0;
        let isTodoExists = selectedProjectGlobal.todo.some(item => item.name === editTodoName.value);
        let isSameTodo = selectedTodoGlobal.name === editTodoName.value;
        if(isSameTodo) {
            changeTodoDescription(selectedTodoGlobal, editTodoName.value, editTodoDescription.value, editTodoDueDate.value, editTodoPriority.value, editTodoCheckbox.value);
            clearArrayTodoDOM();
            displayArrayTodoDOM(selectedProjectGlobal.todo);
            modalEditTodo.classList.remove('active');
            overlay.classList.remove('active');
        } else if (!isSameTodo) {
            if(!isTodoExists) {
                changeTodoDescription(selectedTodoGlobal, editTodoName.value, editTodoDescription.value, editTodoDueDate.value, editTodoPriority.value, editTodoCheckbox.value);
                clearTodoDomList();
                displayArrayTodoDOM(selectedProjectGlobal.todo);
                modalEditTodo.classList.remove('active');
                overlay.classList.remove('active');
            } else {
                alert('Todo already exists! Choose another name')
            }
        }
    }  
})

function clearArrayTodoDOM() {
    let contentBody = document.querySelector('.content-main');
    contentBody.innerHTML = "";
}

//for deleting. use window because if a button generated dynamically, the addEventListener wont work.
document.body.addEventListener('click', (event)=> {
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    let contentTopName = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    if(event.target.classList.contains('delete-button')){
        let projectName = event.target.previousElementSibling.textContent
        deleteProject(arrayProject, projectName);
        event.target.parentNode.remove();
        editProjectBtn.classList.add('hide');
        addTodoBtn.classList.add('hide');
        clearArrayTodoDOM();
        contentTopName.textContent = "";
        contentTopDescription.textContent = "";
    }
})

document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('project-title')) {
        let selectedProject = selectProject(arrayProject, event.target.textContent);
        let selectedArrayTodo = selectedProject.todo;
        let contentTopName = document.querySelector('.content-top-project-name');
        let contentTopDescription = document.querySelector('.content-top-project-description');
        contentTopName.textContent = selectedProject.projectName;
        contentTopDescription.textContent = selectedProject.projectDescription;
        clearArrayTodoDOM();
        displayArrayTodoDOM(selectedArrayTodo);
        selectedProjectGlobal = selectedProject;
    }
    
})



document.body.addEventListener('click',(event)=> {
    
    if(event.target.classList.contains('overlay')){
        modalNewProject.classList.remove('active');
        modalEditProject.classList.remove('active');
        modalNewTodo.classList.remove('active');
        modalEditTodo.classList.remove('active');
        overlay.classList.remove('active');
    }
})


function deleteProject(arrayProject, value) {
    for(let i=0; i<arrayProject.length; i++) {
        if(arrayProject[i].projectName === value){
            arrayProject.splice(i,1);
        }
    }
}


document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-content-card-button')) {
        deleteTodoFromArrayTodo(selectedProjectGlobal, event.target.parentNode.firstChild.textContent);
        event.target.parentNode.remove();
    }
})

document.body.addEventListener('click', (event)=> {
    if(event.target.classList.contains('edit-project-button')){
        modalEditProject.classList.add('active');
        overlay.classList.add('active');
        let selectedProjectName = selectedProjectGlobal.projectName;
        let selectedProjectDescription = selectedProjectGlobal.projectDescription;
        let editProjectNameArea = document.querySelector('.edit-project-name');
        let editProjectDescriptionArea = document.querySelector('.edit-project-description');
        editProjectNameArea.value = selectedProjectName;
        editProjectDescriptionArea.value = selectedProjectDescription;
    }
})


submitEditProjectBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let projectNavbar = document.querySelector('.project-list');   
    let editProjectNameArea = document.querySelector('.edit-project-name');
    let editProjectDescriptionArea = document.querySelector('.edit-project-description');
    

    let contentTopName = document.querySelector('.content-top-project-name');
    let contentTopDescription = document.querySelector('.content-top-project-description');
    let isProjectExist = arrayProject.some(item => item.projectName === editProjectNameArea.value);
    let isSameProject = editProjectNameArea.value === selectedProjectGlobal.projectName;
    if(isSameProject){
        changeProjectDescription(selectedProjectGlobal,editProjectNameArea.value,editProjectDescriptionArea.value);
            projectNavbar.innerHTML = '';
            for(let i=0; i<arrayProject.length; i++) {
                let project = document.createElement('div');
                project.classList.add('project-list-detail');
                let projectName = document.createElement('h2');
                projectName.classList.add('project-title');
                projectName.textContent = arrayProject[i].projectName;
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-button');
                deleteBtn.textContent = 'delete';
                project.append(projectName);
                project.append(deleteBtn);
                projectNavbar.append(project);
            }
        contentTopName.textContent = selectedProjectGlobal.projectName;
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
                for(let i=0; i<arrayProject.length; i++) {
                    let project = document.createElement('div');
                    project.classList.add('project-list-detail');
                    let projectName = document.createElement('h2');
                    projectName.classList.add('project-title');
                    projectName.textContent = arrayProject[i].projectName;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-button');
                    deleteBtn.textContent = 'delete';
                    project.append(projectName);
                    project.append(deleteBtn);
                    projectNavbar.append(project);
                }
            }
            contentTopName.textContent = selectedProjectGlobal.projectName;
            contentTopDescription.textContent = selectedProjectGlobal.projectDescription;
            modalEditProject.classList.remove('active');    
            overlay.classList.remove('active');
        } else {
            alert('Project already exists');
        }
    }
})




document.body.addEventListener('click', ()=> {
    console.log(arrayProject);
})

function changeTodoDOMBackgroundColor(element, priority, checkbox) {
    if(checkbox === '1') {
        element.style.backgroundColor = 'darkgrey';
    } else if (checkbox === '0') {
        if(priority === 'low') {
            element.style.backgroundColor = 'green';
        } else if (priority === 'medium') {
            element.style.backgroundColor = 'yellow';
        } else if (priority === 'high') {
            element.style.backgroundColor = 'red';
        } else if (priority === 'emergency') {
            element.style.backgroundColor = 'white';
            element.classList.toggle('emergency');
        }
    }
    
}
console.log(showNextSevenDaysTodo().thisWeekArrayTodo)

function showNextSevenDaysTodo(){
    let thisWeekArrayTodo = [];
    let date = new Date();
    let nextSevenDays = addDays(date,7);
    arrayProject.forEach(project => {
        project.todo.forEach(todo => {
            // todo.filter(todo.dueDate>nextSevenDays);
            if(new Date(todo.dueDate) > date && new Date(todo.dueDate) < nextSevenDays){
                thisWeekArrayTodo.push(todo);
            }
        })
    });
    return {thisWeekArrayTodo};
}

let showNextSevenDaysTodoBtn = document.querySelector('.next-seven-days-todo-button');
showNextSevenDaysTodoBtn.addEventListener('click',()=>{
    let contentTopProjectName = document.querySelector('.content-top-project-name');
    let contentTopProjectDescription = document.querySelector('.content-top-project-description');
    let editProjectBtn = document.querySelector('.edit-project-button');
    let addTodoBtn = document.querySelector('.add-task');
    contentTopProjectName.textContent = 'Next Seven Days Todo';
    contentTopProjectDescription = "";
    editProjectBtn.classList.add('hide');
    addTodoBtn.classList.add('hide');
    showNextSevenDaysTodo();
    clearArrayTodoDOM();
    displayArrayTodoDOM(showNextSevenDaysTodo().thisWeekArrayTodo);
})


// function testDate(){
//     let date = new Date();
//     let nextSevenDays = addDays(date,7);
//     let dueDateTest = new Date('2023-10-30');
//     console.log(nextSevenDays);
//     console.log(dueDateTest>nextSevenDays)
// }

// testDate();