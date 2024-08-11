window.onload = function() {
  setTimeout(function(){
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
  }, 5000); // 10 seconds
};