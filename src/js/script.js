const closeMenu = document.getElementById('js-closeMenu');
const mobileMenu = document.getElementById('js-mobileMenu');
const openMenu = document.getElementById('js-openMenu');

closeMenu.addEventListener('click', () => {
	mobileMenu.style.width = "0";
});
openMenu.addEventListener('click', () => {
	mobileMenu.style.width = "100%";
});