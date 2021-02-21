var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");
var tabs = $("tab");
var placesTab = document.querySelector("#places-tab");
var experiencesTab = document.querySelector("#experience-tab");

dropdown.addEventListener("click", ()=>{
  dropdownContent.classList.toggle("open-nav");
});

tabs.on("click", () => {
  console.log("this");
})



placesTab.addEventListener("click", ()=>{
  $("span#experiences").removeClass("active");
  $("span#places").addClass("active");
  $(".places-form").css("visibility", "visible");
  $(".experiences-form").css("visibility","hidden");
})

experiencesTab.addEventListener("click", ()=>{
  $("span#places").removeClass("active");
  $("span#experiences").addClass("active");
  $(".places-form").css("visibility", "hidden");
  $(".experiences-form").css("visibility","visible");
})

window.addEventListener("scroll", function(){
  if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60){
    $("nav").css({"background-color":"#fff", "color": "black", "position":"fixed", "top":"0"});
    $(".small-search").css({"visibility": "visible"});
    $(".nav-list").css("visibility", "hidden");
  } else {
    $("nav").css({"background-color": "transparent", "color":"white", "position":"relative"});
    $(".small-search").css("visibility", "hidden");
    $(".nav-list").css("visibility", "visible");
  }
})
