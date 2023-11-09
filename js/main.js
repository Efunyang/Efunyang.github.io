$(function () {
	$("#navbarNav a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').stop().animate({scrollTop: $(hash).offset().top}, 200, function () {
				window.location.hash = hash;
			});
		}
	});

});


// Services
const nextBtn = document.querySelector(".serviceContainer .next-btn");
const previousBtn = document.querySelector(".serviceContainer .previous-btn");
const serviceContent = document.querySelector(".serviceContainer .content");

// press left right icons can scroll
nextBtn.addEventListener("click", () => {
	serviceContent.scrollLeft += 300;
})

previousBtn.addEventListener("click", () => {
	serviceContent.scrollLeft -= 300;
})

//hide botton when we reach the end of each sides
serviceContent.addEventListener("scroll", () => {
	if (serviceContent.scrollLeft <= 24) {
		previousBtn.classList.remove("active");
	} else {
		previousBtn.classList.add("active");
	}

	console.log(serviceContent.scrollWidth)
	console.log(serviceContent.clientWidth)


	let maxScrollValue = serviceContent.scrollWidth - serviceContent.clientWidth - 24;

	if (serviceContent.scrollLeft >= maxScrollValue) {
		nextBtn.classList.remove("active");
	} else {
		nextBtn.classList.add("active");
	}
});
