


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

        
        bodylistProjectContainer.append(bodylistProject, bodylistProjectArrow)
        optionList.append(bodylistHome, bodylistToday, bodylistWeek,newTaskButtonImg, bodylistProjectContainer)


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


        









        
      
                

        return optionList
    }

  

    return bodyMainList()


}

export default bodySection