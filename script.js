const closeBtn = document.querySelector("#close-btn");
const closeBtnImg = document.querySelector("#close-btn img");
const bodyIcons = document.querySelector(".social-float_inner");
const btnForeing = document.querySelectorAll(".btn-extranjero");
const btnNational = document.querySelectorAll(".btn-nacional");
const containerForeing = document.querySelectorAll(".cat-extranjero");
const containerNational = document.querySelectorAll(".cat-nacionales");

const link = window.location.hostname;
console.log(link);

closeBtnImg.setAttribute("title", "Cerrar");
closeBtn.addEventListener("click", () => {
 if(closeBtnImg.getAttribute("src") == "https://develop1.webstudiopanama.com/sertracen/wp-content/uploads/2023/09/cerrardo-black.svg"){
   closeBtnImg.setAttribute("src", "https://develop1.webstudiopanama.com/sertracen/wp-content/uploads/2023/10/abrir-cuadrado.svg");
   bodyIcons.style.transform = "translateX(100%)";
   bodyIcons.style.transition = "0.4s";
   closeBtnImg.setAttribute("title", "Enlaces");
  }else{
   closeBtnImg.setAttribute("src", "https://develop1.webstudiopanama.com/sertracen/wp-content/uploads/2023/09/cerrardo-black.svg");
   bodyIcons.style.transform = "translateX(0%)";
   bodyIcons.style.transition = "0.4s";
   closeBtnImg.setAttribute("title", "Cerrar");
   }
});

btnForeing.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        if(containerNational[index].style.display == "none"){
            containerNational[index].style.display = "block";
            containerForeing[index].style.display = "none";
        }else{
            containerNational[index].style.display = "none";
            containerForeing[index].style.display = "block";
        }
    });
});

btnNational.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        if(containerForeing[index].style.display == "none"){
            containerForeing[index].style.display = "block";
            containerNational[index].style.display = "none";
        }else{
            containerNational[index].style.display = "block";
            containerForeing[index].style.display = "none";
        }
    });
});