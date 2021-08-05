
import {taskList} from './form.js'


let projectsArray = [
    "this is a very long project Name",
    "testing",
];

function projectAddForm(){

 
    //dom for creating elements for the project form
    const projectFormContainer = document.createElement('div');
        const projectFormHeader = document.createElement('div');
            const projectFormName = document.createElement('div');
            const projectCloseForm = document.createElement('div');
        const projectFormContent = document.createElement('div');
            const projectFormTitle = document.createElement('input');
        const projectFormFooter = document.createElement('div');
            const projectFormCloseButton = document.createElement('button');
            const projectFormSubmitButton = document.createElement('button');

    //add class to the dom element
    projectFormContainer.classList.add('projectFormContainer');
        projectFormHeader.classList.add('projectFormHeader');
            projectFormName.classList.add('projectFormName');
            projectCloseForm.classList.add('projectCloseForm');
        projectFormContent.classList.add('projectFormContent');
            projectFormTitle.classList.add('projectFormTitle');
        projectFormFooter.classList.add('projectFormFooter');
            projectFormCloseButton.classList.add('projectFormCloseButton');
            projectFormSubmitButton.classList.add('projectFormSubmitButton');

    //set display for each dom element
    projectFormName.textContent="Add New Project";
    projectCloseForm.innerHTML= "&times",
    projectFormTitle.placeholder = "Project Name";
    projectFormCloseButton.textContent = 'Close';
    projectFormSubmitButton.textContent='Add Project';


    //append the dom element to their container
    projectFormFooter.append(projectFormCloseButton, projectFormSubmitButton);
    projectFormContent.append(projectFormTitle);
    projectFormHeader.append(projectFormName, projectCloseForm);
    projectFormContainer.append(projectFormHeader, projectFormContent,projectFormFooter);
        


    
    //function for the event listeners for the required dom elements
    projectCloseForm.addEventListener("click", removeForm);
    projectFormCloseButton.addEventListener('click',removeForm)
        function removeForm(){
            projectFormContainer.classList.remove('active');
        };

    projectFormSubmitButton.addEventListener('click', addNewProject)
        function addNewProject(){
            let projectTitle = projectFormTitle.value;
            projectsArray.push(projectTitle);
            displayProjectsArray()
            projectFormContainer.classList.remove('active');
            projectFormTitle.value = ""
        };
        function displayProjectsArray(){
            const bodyList = document.querySelector('.bodyList')
            const projectItemBox = document.querySelector('.projectItemBox')
            projectItemBox.innerHTML = "";

            projectsArray.forEach(item => {
                const projectItemContainer = document.createElement('div');
                const projectItemName = document.createElement('div');
                const projectItemRemove = document.createElement('div');

                projectItemContainer.classList.add('projectItemContainer');
                projectItemName.classList.add('projectItemName');
                projectItemRemove.classList.add('projectItemRemove');

                projectItemName.textContent = `${item}`;
                projectItemRemove.innerHTML = "&times";

                projectItemContainer.append(projectItemName, projectItemRemove);
                projectItemBox.append(projectItemContainer)

                projectItemRemove.addEventListener('click', removeProject);
                    function removeProject(){
                        let index = projectsArray.indexOf(item);
                        projectsArray.splice(index, 1);


                     


            

                        bodyList.innerHTML="";
                        displayProjectsArray()


                    }

                projectItemName.addEventListener('click', displayArrayTaskListProject);
                    function displayArrayTaskListProject(){
                        let newTaskList = [];
                        console.log(projectItemName.textContent)
                        console.log(taskList);
                        for (let i = 0; i<taskList.length; i++){
                            if (taskList[i].project === projectItemName.textContent){
                                newTaskList.push(taskList[i]); 
                            }
                        };
                    bodyList.innerHTML="";
                    displayNewArrayTaskList()
                    function displayNewArrayTaskList(){
                        bodyList.innerHTML="";
                        newTaskList.forEach(project =>{
                            const bodyTaskListContainer = document.createElement('div');
                                const bodyTaskListTitle = document.createElement('div');
                                const bodyTaskListDuedate = document.createElement('div');
                                const bodyTaskListPriority = document.createElement('div');
                                const bodyTaskListDescription = document.createElement('div');
                                const bodyTaskListCloseForm = document.createElement('div');

                            bodyTaskListContainer.classList.add('bodyTaskListContainer');
                                bodyTaskListTitle.classList.add('bodyTaskListTitle');
                                bodyTaskListDuedate.classList.add('bodyTaskListPriority');
                                bodyTaskListPriority.classList.add('bodyTaskListPriority');
                                bodyTaskListDescription.classList.add('bodyTaskListDescription')
                                bodyTaskListCloseForm.classList.add('bodyTaskListCloseForm')

                                bodyTaskListTitle.textContent = `Title: ${project.title}`
                                bodyTaskListDuedate.textContent = `Due: ${project.duedate}`;
                                bodyTaskListPriority.textContent = `Priority: ${project.priority}`;
                                bodyTaskListDescription.textContent = `Description: ${project.description}`;
                                bodyTaskListCloseForm.innerHTML = '&times'

                            bodyTaskListContainer.append(bodyTaskListTitle, bodyTaskListDescription, bodyTaskListPriority, bodyTaskListDuedate, bodyTaskListCloseForm)
                            bodyList.append(bodyTaskListContainer); 

                            bodyTaskListCloseForm.addEventListener('click', removeTask);
                                function removeTask(){
                                    let index = taskList.indexOf(project);
                                    let indexNewTaskList = newTaskList.indexOf(project);
                                    taskList.splice(index, 1);
                                    newTaskList.splice(indexNewTaskList,1);
                                    console.log(taskList);
                                    console.log(newTaskList);
                                    displayNewArrayTaskList()
                                }   
                    })

                }
                }

            })
        };
      
    return projectFormContainer
};


export default projectAddForm