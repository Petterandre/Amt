$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


document.getElementById("wrapper").addEventListener("click", displayDate);

function displayDate() {
	console.log("Hi");
}

function menuHide() {
  var x = document.getElementById("navigation");
  switch (x.classList.contains("responsive")) {
  	case true:
  	console.log("Yes");
  	x.classList.remove("responsive");
  	break;
  	case false:
  	x.classList.add("responsive");
  	console.log("No");
  	break;
  	console.log("Neither");
  }
}