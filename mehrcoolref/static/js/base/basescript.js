function toggleMenu() {
    var menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');
}


const floatingBar = document.querySelector('.floating-bar');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Get scroll position
  if (scrollPosition > 100) { // Show bar after 100px scroll (adjust as needed)
    floatingBar.classList.add('show');
  } else {
    floatingBar.classList.remove('show');
  }
});