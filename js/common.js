document.querySelector('.header__hamburger-menu').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header__hamburger-menu__table').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
});