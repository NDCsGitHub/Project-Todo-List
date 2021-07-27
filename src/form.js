



function form(){

    class Task {
        constructor(title, Description, Duedate, Priority){
            this.title = title;
            this.Description = Description;
            this.Duedate = Duedate;
            this.Priority = Priority;
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
                    const projectOptionNone = document.createElement('option')
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
        projectOptionNone.textContent="None"
        formCloseButton.textContent="Close"
        formSubmitButton.textContent="Add Task"
        

        optionVeryHigh.value ="1";
        optionHigh.value = "2";
        optionMedium.value = "3";
        optionLow.value = "4";
        projectOptionNone.value = "None"
        formDescription.placeholder = "Description";

        
        formFooter.append(formCloseButton, formSubmitButton)
        project.append(projectOptionNone)
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

    
        return formContainer
    }




    return createFormElements()

}


export default form



