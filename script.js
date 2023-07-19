let hov = document.querySelector(".line");
let mm = document.querySelectorAll(".mm")

mm.forEach((elem)=>{
    elem.addEventListener("hover",() => {
      console.log("hlw");
    })
})