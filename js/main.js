document.getElementById("wrapper").addEventListener("click", unclickMenu);

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));
	var at = $(this.getAttribute('id'));
    var sel = document.getElementById(at.selector);
    removeActive();
    sel.classList.add("active");	

    if( target.length ) {
    	event.preventDefault();
		$('html, body').stop().animate({
        	scrollTop: target.offset().top - 45
        }, 50);
    }

});

function removeActive() {
	$('.active').removeClass('active');
}

function unclickMenu() {
	var x = document.getElementById("navigation");

 	switch (x.classList.contains("responsive")) {
	  	case true:
	  	x.classList.remove("responsive");
	  	break;
  	}
}


function menuHide() {
	var x = document.getElementById("navigation");
	switch (x.classList.contains("responsive")) {
		case true:
		x.classList.remove("responsive");
		break;
		case false:
		x.classList.add("responsive");
		break;
		
  }
}