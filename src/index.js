import './style.css';
import Project from './javascript/project-constructor.js';
import { Todo } from './javascript/todo-constructor.js';
import { pushTodoToProject } from './javascript/push-todo-to-project.js';
import currentProject from './javascript/current-project.js'

const projectArray = [];

// have 3 project
let project1 = new Project('test','test');
let project2 = new Project('test2','test2');
let project3 = new Project('test3','test3');
pushProjectToArray(projectArray, project1);
pushProjectToArray(projectArray, project2);
pushProjectToArray(projectArray, project3);



// have 2 todo
// let todo1 = new Todo('test1','test1','10/07/2023','very1','1');
// let todo2 = new Todo('test2','test2','13/07/2023','veryvery','0');


// project2 have 1 todo
// let inProject2 = currentProject(projectArray, 'test2');
// pushNewTodoToProject(inProject2, todo1);


// project3 have 2 todo, want to delete 1
// let inProject3 = currentProject(projectArray, 'test3');
// pushNewTodoToProject(inProject3, todo2);
// pushNewTodoToProject(inProject3, todo1);
// deleteTodoFromProject(inProject3, 'test1');


// project3 change todo1 desc ('testHa','testHa','20/05/2023','veryvery','1')
// pushNewTodoToProject(inProject3, todo1);
// todo1 = currentTodo(inProject3.todo, 'test1');
// changeTodoDescription(todo1, 'testHa','testHa','20/05/2023','veryvery','1')


// project2 changeName to projectHAHAHA
// changeProjectDescription(inProject2, 'projectHAHAHA', 'HAHAHA This Todo!')
// deleteTodoFromProject(inProject2, 'testHa');
// console.log(projectArray)

let modal = document.querySelector('.modal');
let addProjectBtn = document.querySelector('.add-project-button');
let submitProjectBtn = document.querySelector('.submit-project-button');
addProjectBtn.addEventListener('click', ()=> {
    modal.classList.add('active');
    
})

submitProjectBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    let projectName = document.querySelector('.project-name');
    let projectDescription = document.querySelector('.project-description');
    let project = new Project(projectName.value, projectDescription.value);
    pushProjectToArray(projectArray, project); 
    modal.classList.remove('active');
    projectNavbarDOMController(projectArray);
})

function pushProjectToArray(array, project) {
    array.push(project);
}

function pushNewTodoToProject(project, todo) {
    return project.todo.push(todo);
}

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


function projectNavbarDOMController(projectArray) {
    let projectNavbar = document.querySelector('project-list');
    let DOMProject = []; //for checking comparison
    document.querySelectorAll('h2').forEach(node => {
        DOMProject.push(node.innerText);
    }) 
    
    for(let i = 0; i < projectArray.length; i++) { 
        for(let j = 0; j < DOMProject.length; j++) {
            if(projectArray[i].projectName === DOMProject[j]) { return;
            } else {
            let project = document.createElement('div');
            project.classList.add('project-list-detail');
            let projectTitle = document.createElement('h2');
            projectTitle.textContent = projectArray[i].projectName;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'delete';
            project.append(projectTitle);
            project.append(deleteBtn);
            projectNavbar.append(project);
            }
        }
    }
}



