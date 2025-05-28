function showMessage() {
  document.getElementById("message").textContent = "You clicked the button! 🚀";
}
document.getElementById("myButton").addEventListener("click", showMessage);
document.getElementById("myButton").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightblue";
}); 
