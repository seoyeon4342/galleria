document.addEventListener("DOMContentLoaded", () => {


    //페이드
    const images = document.querySelectorAll("#fade img"); 
    let z = 1;
    const slide = () => {
        images.forEach(  i  =>  i.style.opacity = 0   );
        images[z].style.opacity = 1 ;
        z++;
        if(z == 3) z = 0;
    }
    setInterval( slide , 1500 );


    //팝업
    const black = document.getElementById("black");
    const btn = document.querySelector("#popup button");
    const noticeli = document.querySelectorAll("#notice ul li") ;
    const popup = (i) => {
        if(i==='열기') black.classList.add('show');
        else  black.classList.remove('show');
    }

   
    noticeli.forEach(i => {
        i.children[0].addEventListener("click",()=> {popup("열기");});
    });



    btn.addEventListener("click",()=> {popup("닫기");});


});///////////end