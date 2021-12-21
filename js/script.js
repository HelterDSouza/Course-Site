const navLinks = document.getElementById('navLinks');
let hide = true;

const toggleMenu = () => {
  hide = !hide;
  hide ? (navLinks.style.right = '-200px') : (navLinks.style.right = '0');
};
