const model= document.querySelector(".model")
const previews= document.querySelectorAll(".academic img")

const previews2= document.querySelectorAll(".travel img")
const original= document.querySelector(".full-image")
const caption= document.querySelector(".caption")

previews.forEach(preview => {

	preview.addEventListener('click', () => {
		model.classList.add("open")
		original.classList.add("open")

		// dynamic change 
		const originalSrc= preview.getAttribute("data-original")
		original.src= `images/Gallery/Academic/full/${originalSrc}`
		const altText= preview.alt;
		caption.textContent= altText;
	})
})

previews2.forEach(preview => {

	preview.addEventListener('click', () => {
		model.classList.add("open")
		original.classList.add("open")

		// dynamic change 
		const originalSrc= preview.getAttribute("data-original")
		original.src= `images/Gallery/Travel/full/${originalSrc}`
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