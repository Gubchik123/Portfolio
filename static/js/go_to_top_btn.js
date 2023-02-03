const go_to_top_btn = document.getElementById("go-to-top-btn");
go_to_top_btn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox and IE
});

function check_on_scroll() {
	if (
		document.body.scrollTop > 300 ||
		document.documentElement.scrollTop > 300
	) {
		go_to_top_btn.classList =
			"rounded-circle d-flex justify-content-center align-items-center";
	} else {
		go_to_top_btn.classList = "";
	}
}

// When the user scrolls down 300px from the top of the document, show the button
window.addEventListener("scroll", check_on_scroll);

check_on_scroll(); // Check the window position at startup
