/*Collapsible*/
$(document).on("click", ".collapsible", function() {
    $(this).next().toggle("slow");
});

/*dot animation*/

var dots = 0;

$(document).ready(function() {
    setInterval (type, 600);
});

function type() {
    if (dots < 3) {
        $(".dots").append('.');
        dots++;
    } else {
        $(".dots").html('');
        dots = 0;
    }
}

/* Button Top*/

mybutton = document.getElementById("MyBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}