
// About btn clicked: toggle tab 
$(".infoBtn").on("click", function() {
    $(".info").toggleClass("active");
});

// About link clicked in nav: toggle tab
$("#aboutBtn").on("click", function() {
    $(".info").toggleClass("active");
});

// Toggle theme on click of btn
var themeStatus = "dark" // start page on dark mode
$(".theme svg").on("click", function() {
    if (themeStatus === "dark") {
        $(":root").css("--bg", "var(--bgLight)");
        $(":root").css("--primary", "var(--primaryLight)");
        $(":root").css("--secondary", "var(--secondaryLight)");
        $(":root").css("--accent", "var(--accentLight)");
        $(":root").css("--boxShadow", "rgb(156 156 156)");
        themeStatus = "light";
    } else if (themeStatus === "light") {
        $(":root").css("--bg", "var(--bgDark)");
        $(":root").css("--primary", "var(--primaryDark)");
        $(":root").css("--secondary", "var(--secondaryDark)");
        $(":root").css("--accent", "var(--accentDark)");
        $(":root").css("--boxShadow", "black");
        themeStatus = "dark";
    }
});

// Viewport Function
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// Check if sections are in view to add style classes
var sections = $(".sections");
var sectionVisibility = function() {
    for (section of sections) {
        isElementInViewport(section)
          ? $(section).addClass("isVisible")
          : $(section).removeClass("isVisible");
    }
}

// Check if cards in applications are in view to add style classes
var cards = $(".card");
var cardVisibility = function() {
    for (card of cards) {
        isElementInViewport(card)
          ? $(card).addClass("isVisible")
          : $(card).removeClass("isVisible");
    }
}

// Scroll effect of full page for sections
$(document).on("scroll", sectionVisibility);

// Scroll effect for work section applications
$("#apps").on("scroll", cardVisibility);