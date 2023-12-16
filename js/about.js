//FAQ JS script STARTED
"use strict";
const toggle = evt => {
    const faqtitle = evt.currentTarget;  // get the clicked faq title element
    const faqcontent = faqtitle.nextElementSibling;     // get faq content that is next sibling div
    const allfaqtitle = faqs.querySelectorAll("#faqs h3");
    for (let otherfaqtitle of allfaqtitle) {
        if (otherfaqtitle !== faqtitle) {
            otherfaqtitle.classList.remove("minus");
            otherfaqtitle.nextElementSibling.classList.remove("open");
        }
    }
    faqtitle.classList.toggle("minus");
    faqcontent.classList.toggle("open");
    evt.preventDefault();   // cancel default action of faq title tag's <a> tag
};
document.addEventListener("DOMContentLoaded", () => {
    // get the h3 tags
    const faqtitles = faqs.querySelectorAll("#faqs h3"); // attach event handler for each title tag	    
    for (let faqtitle of faqtitles) {
        faqtitle.addEventListener("click", toggle);
    }
    faqtitles[0].firstChild.focus();    // set focus on first title tag's <a> tag    
});

$(document).ready(function () {
    $(".main").tiltedpage_scroll({
        sectionContainer: "> section",
        angle: 40,
        opacity: true,
        scale: true,
        outAnimation: true
    });
});
$(document).ready(function () {
    // Initialize Owl Carousel
    $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: true
    });

    // Existing Tilted Page Scroll Initialization
    $(".main").tiltedpage_scroll({
        sectionContainer: "> section",
        angle: 40,
        opacity: true,
        scale: true,
        outAnimation: true
    });

    // Existing FAQ Click Handler
    // ...
});
