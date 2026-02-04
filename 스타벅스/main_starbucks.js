let pick = document.querySelector(".pick");
let moved = false;

window.addEventListener("scroll",function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value > 650){
        pick.style.animation = 'unpick 1s ease-out forwards';
        // forwards 상태 유지
    } else {
        pick.style.animation = 'pick 1s ease-out';
    }   

})