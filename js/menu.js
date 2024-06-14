(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');


    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
        openButton.classList.add('nav_close--show');
        
        
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
       
    });

})();