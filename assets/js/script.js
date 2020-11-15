
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
        themeStatus = "light";
    } else if (themeStatus === "light") {
        $(":root").css("--bg", "var(--bgDark)");
        $(":root").css("--primary", "var(--primaryDark)");
        $(":root").css("--secondary", "var(--secondaryDark)");
        $(":root").css("--accent", "var(--accentDark)");
        themeStatus = "dark";
    }
});