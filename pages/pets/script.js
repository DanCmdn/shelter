const menuIcon = document.querySelector('.burger-menu__button');
const navbar = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');

menuIcon.addEventListener('click', () => {
	navbar.classList.toggle('burger-menu_active');
	menuIcon.classList.toggle('rotate');
	overlay.classList.toggle('overlay_active');
	body.classList.toggle('scroll-hidden');
});
overlay.addEventListener('click', () => {
	navbar.classList.toggle('burger-menu_active');
	menuIcon.classList.toggle('rotate');
	overlay.classList.toggle('overlay_active');
	body.classList.toggle('scroll-hidden');
})