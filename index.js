// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link') 
const submit = document.getElementById("submit")

submit.addEventListener('click', () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name.length < 2 || name.length > 100) {
    alert("Name must be between 2 and 100 characters.");
  } else if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
    alert("Invalid email address.");
    return;
  } else if (message.length < 5 || message.length > 250) {
    alert("Message must be between 5 and 250 characters.");
    return;
  } else {
            const params = {
            from_name :name,
            email : email,
            message : message
            }
    emailjs.send("service_vel70fb", "template_ksf7w2k", params).then(function (res) {
    alert("Thank You "+document.getElementById("name").value+" Successfully collected your details. we will get you soon ! " + res.status+" :)");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      
      if (res.status != 200) {
        const myEmail = "amaruthanalagar@gmail.com";
        const date = new Date().toLocaleString();
        const mailtoLink = `mailto:${myEmail}?subject=Message from ${name} Email ID : ${email}&body=Hello ${name},%0D%0A%0D%0A${message}%0D%0A%0D%0A(Date: ${date})`;
        window.location.href = mailtoLink;
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = ""; 
      }
    })
  }
});
  
hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}
// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

const lin_btn = document.getElementById("live_link");

lin_btn.addEventListener('mouseover', (e) => {
  console.log("in");
  lin_btn.innerText = "Coming Soon...!"
});
lin_btn.addEventListener('mouseleave', () => {
  console.log("out");
  lin_btn.innerText = "LIVE LINK"
});