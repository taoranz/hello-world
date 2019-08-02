// click
window.addEventListener("DOMContentLoaded",(function(){
	document.querySelectorAll(".thumbnails img").forEach("click",function(o){
		o.addEventListener("click",function(e){
		console.log("honk")
		document.querySelector(".main-image img").src = e.target.src;
		})
	})
});

// mouseover
window.addEventListener("DOMContentLoaded",(function(){
	document.querySelectorAll(".thumbnails img").forEach("click",function(o){
		o.addEventListener("mouseover",function(e){
		console.log("honk")
		document.querySelector(".main-image img").src = e.target.src;
		})
	})
});

// self-contained
window.addEventListener("DOMContentLoaded",function(){
	document.querySelectorAll(".thumbnails img").forEach(function(o){
		o.addEventListener("mouseover",function(e){
			o.parentElement.previousElementSibling.querySelector("img").src =
				e.target.src;
		});
	});
});
