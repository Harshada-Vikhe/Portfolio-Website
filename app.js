let sections= document.querySelectorAll('.page_section');
let navLinks = document.querySelectorAll('.tab_container a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top< offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                let el=document.querySelector('nav.tab_container a[href*='+id+']').classList.add('active');
                
            })
        }
    })
}