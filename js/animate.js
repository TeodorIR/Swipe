/*HERO SECTION */
window.addEventListener('load', leftload);
function leftload(){
    var reveals = document.querySelectorAll('.left-load');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('left-load-active');
        }
        else{
            reveals[i].classList.remove('left-load-active');
        }
    }
}

window.addEventListener('load', rightload);
function rightload(){
    var reveals = document.querySelectorAll('.right-load');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('right-load-active');
        }
        else{
            reveals[i].classList.remove('right-load-active');
        }
    }
}

/* THE REST OF THE BODY */
window.addEventListener('scroll', slideright);
function slideright(){
    var reveals = document.querySelectorAll('.slide-right');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('slide-right-active');
        }
        else{
            reveals[i].classList.remove('slide-right-active');
        }
    }
}

window.addEventListener('scroll', fadein);
function fadein(){
    var reveals = document.querySelectorAll('.fade-in');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('fade-in-active');
        }
        else{
            reveals[i].classList.remove('fade-in-active');
        }
    }
}