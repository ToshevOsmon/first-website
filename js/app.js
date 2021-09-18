window.addEventListener("scroll", function () {
    var navScroll = document.getElementById('navId');
    navScroll.classList.toggle('fixeded', window.scrollY > 20);

    var scrollTop = document.getElementById('scrollTop');
    scrollTop.classList.toggle('scroll-top', window.scrollY > 30);
});


function navBack() {
    var nav = document.getElementById('navId').classList.toggle('bg-color');
}

function scrollToTop() {
    var scrollTop = document.querySelector('#scrollTop');

    scrollTop.addEventListener('click', function () {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    });

}