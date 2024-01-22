


// Url of social icons ---------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const linkedinIcon = document.getElementById("linkedin-icon");
  const facebookIcon = document.getElementById("facebook-icon");
  const instagramIcon = document.getElementById("instagram-icon");
  const githubIcon = document.getElementById("github-icon");

  function openProfile(profileURL) {
      window.open(profileURL, "_blank");
  }

  linkedinIcon.addEventListener("click", function (event) {
      event.preventDefault();
      openProfile("https://www.linkedin.com/in/vikram-kumar-b594b5242/");
  });

  facebookIcon.addEventListener("click", function (event) {
      event.preventDefault();
      openProfile("https://www.facebook.com/profile.php?id=100010073320136");
  });

  instagramIcon.addEventListener("click", function (event) {
      event.preventDefault();
      openProfile("https://www.instagram.com/mr__vikram_sharma/");
  });

  githubIcon.addEventListener("click", function (event) {
      event.preventDefault();
      openProfile("https://github.com/Vikram-Kumar003");
  });
});



//-------------------------------------------------------------------------

var i = 0;

 var speed = 90;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += " ";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const linkedinIcon = document.getElementById("linkedin-icon");

linkedinIcon.addEventListener("click", function (event) {
    event.preventDefault();
    const linkedinProfileURL = "https://www.linkedin.com/in/vikram-kumar-b594b5242/";
    window.open(linkedinProfileURL, "_blank");
});


