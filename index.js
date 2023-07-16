$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});


var feedbtn= document.getElementById('homebtn');
var aboutbtn = document.getElementById('aboutbtn');
var link_contact = document.getElementById('link_contact');
var contact1 = document.getElementById('Contact');
var projects1 = document.getElementById('Projects');
var home = document.getElementById('home');
var home2 = document.getElementById('home2');
var about_sec = document.getElementById('about_Sec');
var arr = [0, 0, 0, 0];
var project_Sec= document.getElementById('project_Sec');
var contact_con = document.getElementById('contact_con');
var contactbtn = document.getElementById('contactbtn');
aboutbtn.addEventListener('click', function() {
  arr[1]=1;
  console.log(arr);
  aboutbtn.classList.add("active");
  feedbtn.classList.remove("active");
  projects1.classList.remove("active");
  contactbtn.classList.remove("active");
  about_sec.classList.add("activator");
  home.classList.remove("activator");
  home2.classList.remove("activator");
  contact_con.classList.remove("activator");
  project_Sec.classList.remove("activator");
});
feedbtn.addEventListener('click', function() {
  arr[1]=0;
  console.log(arr);
  aboutbtn.classList.remove("active");
  contactbtn.classList.remove("active");
  projects1.classList.remove("active");
  feedbtn.classList.add("active");
  about_sec.classList.remove("activator");
  home.classList.add("activator");
  home2.classList.add("activator");
  contact_con.classList.remove("activator");
  project_Sec.classList.remove("activator");
});
link_contact.addEventListener('click', function() {
  arr[3]=1;
  console.log(arr);
  contactbtn.classList.add("active");
  aboutbtn.classList.remove("active");
  feedbtn.classList.remove("active");
  projects1.classList.remove("active");
  contact_con.classList.add("activator");
  about_sec.classList.remove("activator");
  home.classList.remove("activator");
  home2.classList.remove("activator");
  project_Sec.classList.remove("activator");


});
contactbtn.addEventListener('click', function() {
arr[3]=1;
console.log(arr);
contactbtn.classList.add("active");
aboutbtn.classList.remove("active");
feedbtn.classList.remove("active");
projects1.classList.remove("active");
contact_con.classList.add("activator");
about_sec.classList.remove("activator");
home.classList.remove("activator");
home2.classList.remove("activator");
project_Sec.classList.remove("activator");
});
projects1.addEventListener('click', function() {
projects1.classList.add("active"); 
aboutbtn.classList.remove("active");
feedbtn.classList.remove("active");
contactbtn.classList.remove("active");
about_sec.classList.remove("activator");
home.classList.remove("activator");
home2.classList.remove("activator");
contact_con.classList.remove("activator");
project_Sec.classList.add("activator");
});