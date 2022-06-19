function flip(){
   const flipContent=document.querySelector('.flip-box-content')
   const flipped = flipContent.classList.contains("flipped")
  if(flipped){
    flipContent.classList.remove('flipped')
  }else{
    flipContent.classList.toggle('flipped')
  }
}