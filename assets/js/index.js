const imagesOnGalery = document.querySelectorAll(".gallery a");
const newPopup = document.querySelector(".popup");
const sliderImg=document.querySelector(".slider img")
const closeBtn = document.querySelector(".close-icon")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let nextElement;

imagesOnGalery.forEach((img)=>{
      img.addEventListener("click", function(e){
          e.preventDefault();
          this.classList.add("showSlider")
          let imgSource = this.getAttribute("href")
          sliderImg.setAttribute("src",imgSource)
          newPopup.style.display = "flex"

      })
});
const Next=function(e){
    
    let sliderShow=document.querySelector(".showSlider")

    let changableAttribute;

    if (sliderShow.nextElementSibling) {

        sliderShow.nextElementSibling.classList.add("showSlider")
        changableAttribute =sliderShow.nextElementSibling.getAttribute("href");
    }
    else{
        sliderShow.parentElement.children[0].classList.add("showSlider")
        changableAttribute=sliderShow.parentElement.children[0].getAttribute("href")
    }
    
    
    sliderShow.classList.remove("showSlider")


    sliderImg.setAttribute("src",changableAttribute)
}


nextBtn.addEventListener("click",Next) 


const Prev=function(e){
    let sliderShow = document.querySelector(".showSlider")
    let changeAttr;
    if (sliderShow.previousElementSibling) {
        sliderShow.previousElementSibling.classList.add("showSlider")
        changeAttr=sliderShow.previousElementSibling.getAttribute("href")
    }
    else{
        sliderShow.parentElement.children[2].classList.add("showSlider")
        changeAttr=sliderShow.parentElement.children[2].getAttribute("href")
    }
    sliderShow.classList.remove("showSlider")
    sliderImg.setAttribute("src",changeAttr)
};


prevBtn.addEventListener("click",Prev)

function CloseImg(){
    newPopup.style.display="none"
}


document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("popup")){
        CloseImg()
    }
})

closeBtn.addEventListener("click", function(){
    CloseImg()
})
 
document.addEventListener("keydown",function(e){
    if (e.key==="Escape") {
        CloseImg()
    }

    if (e.key==="ArrowRight") {
        Next();
    }

    if (e.key==="ArrowLeft") {
        Prev();
    }
})
setInterval(Next,3000)
  