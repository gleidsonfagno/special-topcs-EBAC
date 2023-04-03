// app
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

// cards
cards.forEach( card =>{
     card.addEventListener("dragstart", dragstart)
     card.addEventListener("drag", drag)
     card.addEventListener("dragend", dragend) 
})

function dragstart(){
     // this cards
     dropzones.forEach(dropzone => dropzone.classList.add("hightlinght"))

     this.classList.add("is-dragging")
}

function drag(){
}

function dragend(){
     dropzones.forEach(dropzone => dropzone.classList.remove("hightlinght"))

     this.classList.remove("is-dragging")
}

// local onde vol soltar o cartao
dropzones.forEach( dropzone => {
     dropzone.addEventListener("dragenter",dragenter)
     dropzone.addEventListener("dragover",dragover)
     dropzone.addEventListener("dragleave",dragleave)
     dropzone.addEventListener("drop",drop)
})

function dragenter(){
}

function dragover(){
     // this: dropzone
     this.classList.add("over")
     // get dragging card
     const cardBeingDragged = document.querySelector(".is-dragging")
     this.appendChild(cardBeingDragged)
}

function dragleave(){

     this.classList.remove("over")
}

function drop(){
}