/* ===================================
   WAIT UNTIL PAGE FULLY LOADS
=================================== */
window.addEventListener("DOMContentLoaded", () => {



/* ===================================
   1. SMOOTH SCROLL NAVIGATION
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));
        if(target){
            e.preventDefault();

            window.scrollTo({
                top:target.offsetTop-70,
                behavior:"smooth"
            });
        }
    });
});


/* ===================================
   2. CINEMATIC FADE-IN ON SCROLL
=================================== */

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{threshold:0.12});


document.querySelectorAll(
".section, .production, .about-section, .video-card, .gallery img, .poster-gallery img, .about-image img"
).forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition="all 0.9s ease";

    revealObserver.observe(el);

});



/* ===================================
   3. NAVBAR CINEMATIC SCROLL EFFECT
=================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>100){

        nav.style.background="rgba(0,0,0,0.96)";
        nav.style.backdropFilter="blur(6px)";
        nav.style.boxShadow="0 10px 30px rgba(0,0,0,0.7)";

    }else{

        nav.style.background="rgba(0,0,0,0.7)";
        nav.style.boxShadow="none";
    }

});



/* ===================================
   4. HERO TITLE MOVIE INTRO EFFECT
=================================== */

const hero = document.querySelector(".overlay h1");

if(hero){

    const text = hero.innerText;
    hero.innerText="";

    let i=0;

    function type(){

        if(i<text.length){

            hero.innerText+=text.charAt(i);
            i++;
            setTimeout(type,35);
        }
    }

    setTimeout(type,500);
}



/* ===================================
   5. VIDEO CARD NETFLIX HOVER GLOW
=================================== */

document.querySelectorAll(".video-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.04)";
        card.style.boxShadow="0 25px 50px rgba(139,0,0,0.55)";
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";
        card.style.boxShadow="";
    });

});



/* ===================================
   6. CINEMATIC IMAGE SLOW ZOOM
=================================== */

document.querySelectorAll(".gallery img, .poster-gallery img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{
        img.style.transform="scale(1.08)";
    });

    img.addEventListener("mouseleave",()=>{
        img.style.transform="";
    });

});



});

const cv=document.querySelector(".cv-btn");

if(cv){
    cv.addEventListener("click",()=>{
        cv.innerText="Downloading...";
        setTimeout(()=>{
            cv.innerText="Download My CV";
        },1800);
    });
}
