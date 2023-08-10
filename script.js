let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

  section.forEach(Sec => {
    let top = window.screenY;
    let offset = sec.offsetTop = 100;
    let height =  sec.offsetHeight;
    let id = sec.getAttribute('id');


   if(top >= offset && top < offset + height) {
    // active navbar navLinks
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*='+ id +']').classList.add('active');
    });
    
}



  });




    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}