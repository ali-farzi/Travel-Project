const header = document.querySelector("header");

		window.addEventListener ("scroll", function() {
			header.classList.toggle ("sticky", window.scrollY > 0);
		});
		
		let menu = document.querySelector('#menu-icon');
		let navbar = document.querySelector('.navbar');
		
		menu.onclick = () => {
			menu.classList.toggle('bx-x');
			navbar.classList.toggle('open');
		};
		
		window.onscroll = () => {
			menu.classList.remove('bx-x');
			navbar.classList.remove('open');
		};

const navslide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.navbar');
    
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        }); 
} 
navslide();