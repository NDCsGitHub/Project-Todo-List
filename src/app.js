import gitLogoImage from './Images/gitLogo.png';
import logoImage from './Images/logo.png';
import bodySection from './bodysection';
import form from './form'


function app(){

    const content = document.querySelector('#content')

    function createTitleElement(){
        const headerContainer = document.createElement('div')
        const h1 = document.createElement('h1');
        const logo = new Image();

        h1.textContent="#TO-DO";
        logo.src = logoImage;

        headerContainer.classList.add('headerContainer')
        logo.classList.add('logo')
        h1.classList.add('title')

        headerContainer.append(logo, h1)
        content.append(headerContainer);

     }




    
    function createBody(){

        const bodyContainer = document.createElement('div');
        const bodyList = document.createElement('div');

    
        bodyList.textContent = 'bodyList';
        
        bodyContainer.classList.add('bodyContainer');
        bodyList.classList.add('bodyList');

        
        bodyContainer.append(bodySection(),form(), bodyList);
        content.append(bodyContainer);

    }




    function createFooter(){
        const footerContainer = document.createElement('div');
        const footer = document.createElement('div')
        const gitLogo = new Image();

        footer.textContent = "Copyright © 2021 NDC"
        gitLogo.src = gitLogoImage;
        gitLogo.onclick = function(){
            window.location.href = 'https://github.com/NDCsGitHub'
        }

        footerContainer.classList.add('footerContainer')
        gitLogo.classList.add('gitLogo')
        footer.classList.add('footer')

        footerContainer.append(footer, gitLogo)
        content.append(footerContainer)

    }






    return {
        title: createTitleElement(),
        body: createBody(),
        footer: createFooter(),

    }
}

export default app