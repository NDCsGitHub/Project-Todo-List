import form from './form';


function bodySection(){

    const task =[

        {  
            Title: "title test",
            Description: "description test",
            Duedate: "due date test",
            Priority: "priority test",
        },

    ];


    function bodyMainList(){
        
        const optionList = document.createElement('div');
            const bodylistHome = document.createElement('ul');
            const bodylistToday = document.createElement('ul');
            const bodylistWeek = document.createElement('ul');
                const bodylistProjectContainer = document.createElement('div');
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
        bodylistProject.classList.add('bodylistProject');
            bodylistProjectArrow.classList.add('optionListItemsProjectArrow')   
                bodylistProjectAdd.classList.add('optionListItemsProjectItems')
        newTaskButtonImg.classList.add('newTaskButtonImg');
         
            
        newTaskButtonImg.addEventListener('click', newTaskButtonOpenForm)
        function newTaskButtonOpenForm(){
            const formContainer = document.querySelector('.formContainer')
            formContainer.classList.add('active')
        }
        
        bodylistProjectContainer.append(bodylistProject, bodylistProjectArrow)
        optionList.append(bodylistHome, bodylistToday, bodylistWeek,newTaskButtonImg, bodylistProjectContainer)

        
        bodylistProjectContainer.onclick = function(){
            if (bodylistProjectArrow.style.transform === "rotate(0deg)"){
                bodylistProjectArrow.style.transform = "rotate(180deg)";
                bodylistProjectArrow.style.transition = "0.5s";
                optionList.removeChild(bodylistProjectAdd);

            } else{
                bodylistProjectArrow.style.transform = "rotate(0deg)"
                bodylistProjectArrow.style.transition = "0.5s"
                optionList.appendChild(bodylistProjectAdd);

            }


      


        }

        
      
                

        return optionList
    }

  

    return bodyMainList()


}

export default bodySection