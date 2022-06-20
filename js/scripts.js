// FLIP CARD FUNCTION
function flip(element){
   const flipped = element.classList.contains("flipped")
  if(flipped){
    element.classList.remove('flipped')
  }else{
    element.classList.toggle('flipped')
  }
}