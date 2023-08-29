function showSearch() {
  var searchIcon = document.getElementById("searchIcon");
  var searchfield = document.getElementById("searchfield");
  searchfield.style.transition = "width 0.5s ease-in";
  searchIcon.style.marginLeft = "none"; /* 
  searchfield.style.marginRight = "auto"; */
  searchfield.style.visibility = "visible";
  searchIcon.style.visibility = "hidden";
  searchfield.style.display = "block";
  searchfield.style.width = "80vw";
  searchIcon.focus();
}

function hidesearchField() {
  var searchIcon = document.getElementById("searchIcon");
  var searchfield = document.getElementById("searchfield");
  searchfield.style.transition = "width 0.5s ease-out";
  searchIcon.style.display = "block";
  /*  searchIcon.style.marginLeft = "auto"; */
  searchfield.style.visibility = "hidden";
  searchIcon.style.visibility = "visible";
  searchfield.style.marginRight = "none";
  searchfield.style.width = "0";
}
