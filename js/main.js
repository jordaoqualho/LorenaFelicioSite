$(window).on("load", function () {
  $("#preloader .progress").delay(800).fadeOut("slow");
  $("#preloader").delay(800).fadeOut("slow");
  $("body").delay(500).css({ overflow: "visible" });
});

//função que ajusta o escroll da tag "a"
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}