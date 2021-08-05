

export const taskList = [
]

function form(){

    class Task {
        constructor(title, description, duedate, project, priority){
            this.title = title;
            this.description = description;
            this.duedate = duedate;
            this.priority = priority;
            this.project = project;
          
        }
    }



    function createFormElements(){
        const formContainer = document.createElement('form');
            const formHeader = document.createElement('div');
                const formName = document.createElement('div');
                const closeForm = document.createElement('div');
            const formContent = document.createElement('div');
                const formTitle = document.createElement('input');
                const formDescription = document.createElement('textarea');
                const dueDate = document.createElement('input');
                const priority = document.createElement('select');
                    const optionVeryHigh = document.createElement('option')
                    const optionHigh = document.createElement('option')
                    const optionMedium = document.createElement('option')
                    const optionLow = document.createElement('option')
                const project = document.createElement('select');
        
            const formFooter = document.createElement('div');
                const formCloseButton = document.createElement('button');
                const formSubmitButton = document.createElement('button');

        formContainer.classList.add('formContainer')
            formHeader.classList.add('formHeader');
                formName.classList.add('formName');
                closeForm.classList.add('closeForm');
            formContent.classList.add('formContent');
                formTitle.classList.add('formTitle');
                formDescription.classList.add('formDescription');
                dueDate.classList.add('dueDate');
                priority.classList.add('priority');
                project.classList.add('project');
            formFooter.classList.add('formFooter');
                formCloseButton.classList.add('formCloseButton');
                formSubmitButton.classList.add('formSubmitButton');

        formName.textContent ="Create New Task";
        closeForm.innerHTML = "&times";
        formTitle.placeholder = "Title";
        dueDate.setAttribute("onfocus", "this.type='date'");
        dueDate.placeholder = 'Expected Due Date';
        optionVeryHigh.textContent="Very High";
        optionHigh.textContent="High";
        optionMedium.textContent="Medium";
        optionLow.textContent="Low";
        formCloseButton.textContent="Close"
        formSubmitButton.textContent="Add Task"
        
        optionVeryHigh.value ="Very High";
        optionHigh.value = "High";
        optionMedium.value = "Medium";
        optionLow.value = "low";
        formDescription.placeholder = "Description";

        formFooter.append(formCloseButton, formSubmitButton)
        priority.append(optionVeryHigh, optionHigh, optionMedium, optionLow);
        formHeader.append(formName, closeForm)
        formContent.append(formTitle, formDescription, dueDate, priority, project)
        formContainer.append(formHeader, formContent, formFooter)



        closeForm.addEventListener("click", removeForm);
        formCloseButton.addEventListener('click',removeForm)
        function removeForm(e){
            e.preventDefault()
            formContainer.classList.remove('active');
        };


        formSubmitButton.addEventListener('click', (e) =>{
            e.preventDefault()
            addNewTask()
            displayArrayTasksList()
            formContainer.reset()
            formContainer.classList.remove('active');
        });
            function addNewTask() {
                let titleInput = formTitle.value;
                let duedateInput= dueDate.value;
                let descriptionInput = formDescription.value;
                let projectInput = project.value;
                let priorityInput = priority.value;
    

                let newTask = new Task(titleInput, descriptionInput, duedateInput, projectInput, priorityInput);
                taskList.unshift(newTask);
            }
            function displayArrayTasksList() {
                const bodyList = document.querySelector('.bodyList')
                bodyList.innerHTML="";
                taskList.forEach(item => {

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
                        taskList.splice(index, 1);
                        displayArrayTasksList()
                    }
                })
            
            };














        return formContainer
    }

    return createFormElements()

}







export default form



