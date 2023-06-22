const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.sect');
console.log(navLinkEls);
console.log(sectionEls);

let currentSection = 'home';

window.addEventListener('scroll',()=>{
      sectionEls.forEach(sectionEl=>{
        if(window.scrollY>=(sectionEl.offsetTop-200)){
            currentSection = sectionEl.id;
        }
      });

      navLinkEls.forEach(navLinkEl=>{
           if(navLinkEl.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
           }
      });
});




const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




let phone = document.getElementById('myPhone').innerHTML;
const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText(phone);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}


let email = document.getElementById('myEmail').innerHTML;
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}