/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
      var x = document.getElementById("dropdown-content");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    } 
    
    // Close the dropdown menu if the user clicks outside of it
    // window.onclick = function(event) {
    //   if (!event.target.matches('#dropdown-button')) {
    //     var dropdowns = document.getElementsById("dropdown-content");
    //     var i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
    //       if (openDropdown.classList.contains('block')) {
    //         openDropdown.classList.remove('block');
    //       }
    //     }
    //   }
    // } 

function sendEmail() {
    
}