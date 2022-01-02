var boxes = document.getElementsByClassName("box");
for (var i = 0; i<boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function(){
                    this.childNodes[3].classList.add("hovered");
                    }
)
    boxes[i].addEventListener("click", function(){
    this.classList.add("boxzoomed");
})
boxes[i].click();
}