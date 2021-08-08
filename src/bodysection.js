import {taskList} from './form.js'


function bodySection(){

    function bodyMainList(){
        
        const optionList = document.createElement('div');
            const bodylistHome = document.createElement('ul');
            const bodylistToday = document.createElement('ul');
            const bodylistWeek = document.createElement('ul');
                const bodylistProjectContainer = document.createElement('div');
                    const projectItemBox = document.createElement('div');
                    const bodylistProject = document.createElement('div');
                    const bodylistProjectArrow = document.createElement('div');
                        const bodylistProjectAdd = document.createElement('div');
            const newTaskButtonImg = document.createElement('div');
        
        bodylistHome.textContent = 'Home';
        bodylistToday.textContent = 'Today';
        bodylistWeek.textContent = 'Week';
        bodylistProject.textContent = 'Projects'
        bodylistProjectAdd.textContent = '+ New Project';
        bodylistProjectArrow.innerHTML = "&#9662";
        newTaskButtonImg.innerHTML = '&#43';

        optionList.classList.add('optionList');
        bodylistHome.classList.add('optionListItems')
        bodylistToday.classList.add('optionListItems')
        bodylistWeek.classList.add('optionListItems')
        bodylistProjectContainer.classList.add('bodylistProjectContainer')
            projectItemBox.classList.add('projectItemBox');
            bodylistProject.classList.add('bodylistProject');
            bodylistProjectArrow.classList.add('optionListItemsProjectArrow')   
                bodylistProjectAdd.classList.add('optionListItemsProjectAdd')
        newTaskButtonImg.classList.add('newTaskButtonImg');
         
            

        newTaskButtonImg.addEventListener('click', newTaskButtonOpenForm)
            function newTaskButtonOpenForm(){
                const formContainer = document.querySelector('.formContainer')
                formContainer.classList.add('active')

                const project = document.querySelector('.project');
                const projectOptionNone = document.createElement('option')
                projectOptionNone.textContent="None"
                projectOptionNone.value = "None"
                project.innerHTML="";
                project.append(projectOptionNone);

                let taskLists = document.querySelectorAll(".projectItemBox > .projectItemContainer >.projectItemName");
                taskLists.forEach(projectItem=>{
                    const projectOptions = document.createElement('option')
                    projectOptions.textContent = projectItem.textContent;
                    project.append(projectOptions)
                })
            }



        bodylistProjectAdd.addEventListener('click', newProjectButtonOpenForm)
            function newProjectButtonOpenForm(){
                const projectFormContainer = document.querySelector('.projectFormContainer')
                projectFormContainer.classList.add('active')
            }



        bodylistProjectContainer.onclick = function(){
            if (bodylistProjectArrow.style.transform === "rotate(0deg)"){
                bodylistProjectArrow.style.transform = "rotate(180deg)";
                bodylistProjectArrow.style.transition = "0.3s";
                optionList.removeChild(projectItemBox);
                optionList.removeChild(bodylistProjectAdd);

            } else{
                bodylistProjectArrow.style.transform = "rotate(0deg)"
                bodylistProjectArrow.style.transition = "0.3s"
                optionList.append(projectItemBox, bodylistProjectAdd);

            }

        }



        bodylistHome.addEventListener('click',displayNewArrayTaskList );
            function displayNewArrayTaskList(){
                const bodyList = document.querySelector('.bodyList');
                bodyList.innerHTML="";
                taskList.forEach(project =>{
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
                            taskList.splice(index, 1);
                            displayNewArrayTaskList()
                        }   
                })
            }
        


        bodylistToday.addEventListener('click', displayNewArrayTaskListByDate)
            function displayNewArrayTaskListByDate(){
                const bodyList = document.querySelector('.bodyList');
                bodyList.innerHTML="";
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();
                today = yyyy + '-' + mm + '-' + dd
                let newTaskListDate= [];
                for (let i = 0; i<taskList.length; i++){
                    if (taskList[i].duedate === today){
                        newTaskListDate.push(taskList[i]); 
                    }
                };
                newTaskListDate.forEach(project =>{
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
                            let indexNewTaskList = newTaskListDate.indexOf(project);
                            taskList.splice(index, 1);
                            newTaskListDate.splice(indexNewTaskList,1);
                            displayNewArrayTaskListByDate()
                        }   
                })
            }
        


        bodylistWeek.addEventListener('click', displayNewArrayTaskListByWeek);
            function displayNewArrayTaskListByWeek(){
                const bodyList = document.querySelector('.bodyList');
                bodyList.innerHTML="";
                let currentTime = new Date();
                function converToDate(date){
                    let dd = String(date.getDate()).padStart(2, '0');
                    let mm = String(date.getMonth() + 1).padStart(2, '0');
                    let yyyy = date.getFullYear();
                    let today = yyyy + '-' + mm + '-' + dd
                    return today
                }
                let todayPlus3 = converToDate(new Date(currentTime.getTime() + 86400000*3));
                let todayPlus2 = converToDate(new Date(currentTime.getTime() + 86400000*2));
                let todayPlus1 = converToDate(new Date(currentTime.getTime() + 86400000));
                let today = converToDate(currentTime);
                let todayMinus1 = converToDate(new Date(currentTime.getTime() + 86400000*4));
                let todayMinus2 = converToDate(new Date(currentTime.getTime() + 86400000*5));
                let todayMinus3 = converToDate(new Date(currentTime.getTime() + 86400000*6));
          

                let newTaskListWeek = [];
                for ( let i=0; i<taskList.length; i++){
                    if (taskList[i].duedate === todayPlus3 || taskList[i].duedate === todayPlus2 || taskList[i].duedate === todayPlus1 || taskList[i].duedate === today || taskList[i].duedate === todayMinus1 || taskList[i].duedate === todayMinus2 || taskList[i].duedate === todayMinus3){
                        newTaskListWeek.push(taskList[i]);
                    }
                }
                newTaskListWeek.forEach(item => {
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

                    bodyTaskListTitle.textContent = `Title: ${item.title}`
                    bodyTaskListDuedate.textContent = `Due: ${item.duedate}`;
                    bodyTaskListPriority.textContent = `Priority: ${item.priority}`;
                    bodyTaskListDescription.textContent = `Description: ${item.description}`;
                    bodyTaskListCloseForm.innerHTML = '&times'

                    bodyTaskListContainer.append(bodyTaskListTitle, bodyTaskListDescription, bodyTaskListPriority, bodyTaskListDuedate, bodyTaskListCloseForm)
                    bodyList.append(bodyTaskListContainer); 

                    bodyTaskListCloseForm.addEventListener('click', removeTask);
                        function removeTask(){
                            let index = taskList.indexOf(item);
                            let indexNewTaskList = newTaskListWeek.indexOf(item);
                            taskList.splice(index, 1);
                            newTaskListWeek.splice(indexNewTaskList,1);
                            displayNewArrayTaskListByWeek()
                        }   
                })

            }
        bodylistProjectContainer.append(bodylistProject, bodylistProjectArrow)
        optionList.append(bodylistHome, bodylistToday, bodylistWeek,newTaskButtonImg, bodylistProjectContainer)

        return optionList
    }
    return bodyMainList()
}

export default bodySection