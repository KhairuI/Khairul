const model= document.querySelector(".model")
const previews= document.querySelectorAll(".profile-image")
const original= document.querySelector(".full-image")
const caption= document.querySelector(".caption")

previews.forEach(preview => {

	preview.addEventListener('click', () => {
		model.classList.add("open")
		original.classList.add("open")

		// dynamic change 
		const originalSrc= preview.getAttribute("data-original")
		original.src= `images/Profile/full/${originalSrc}`
		const altText= preview.alt;
		caption.textContent= altText;
	})
})

model.addEventListener('click', (e) => {

	if(e.target.classList.contains("model")){
		model.classList.remove("open")
		original.classList.remove("open")
	}
})