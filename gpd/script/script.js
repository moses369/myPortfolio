/* Opens Nav bar when someone clicks on span element
makes span element display none when active*/
function openNav(e){
      document.getElementById('main-nav').style.width="100%";
      if(document.getElementById('main-nav').style.width="100%"){
         document.getElementById('nav-btn').style.display="none";
      }
   }
/*mQuery function will only work if the screen width is true to the values */
   const mQuery = window.matchMedia('(max-width: 999px)');
// close when someone clicks on 'x' symbolinside overlay
if(mQuery.matches){
   function closeNav(e){ 
      document.getElementById('main-nav').style.width = "0%";
      if( document.getElementById('main-nav').style.width = "0%"){
         document.getElementById('nav-btn').style.display="block";
      }
   }
}
mQuery.addEventListener(closeNav);

// Opens form when pressing the send message button

   function openMesg(){
      document.querySelector('.popup-Mesg').style.display="block";
      if(document.querySelector('.popup-Mesg').style.display="block"){
         document.querySelector('#vmsg-btn').style.display = "none";
         if(mQuery.matches){
            document.querySelector('.cancel').style.display = "block";
         }
      }
}

// closes for when pressed
function closeMesg(){
   document.querySelector('.popup-Mesg').style.display="none";
   if(document.querySelector('.popup-Mesg').style.display="none"){
      document.querySelector('#vmsg-btn').style.display = "block";
      document.querySelector('.cancel').style.display = "none";
   }
}

// Opens sign up   form when pressing the send message button

function openSuForm(){
   document.querySelector('.popup-SuForm').style.display="block";
   if(document.querySelector('.popup-SuForm').style.display="block"){
      document.querySelector('.cancel').style.display = "block";
   }
}
// closes for when pressed
function closeSuForm(){
   document.querySelector('.popup-SuForm').style.display="none";
   if(document.querySelector('.popup-SuForm').style.display="none"){
      document.querySelector('.cancel').style.display = "none";
   }
}

// Opens sign in   form when pressing the send message button

function openLiForm(){
   document.querySelector('.popup-LiForm').style.display="block";
   if(document.querySelector('.popup-LiForm').style.display="block"){
      document.querySelector('.cancel').style.display = "block";
   }
}
// closes for when pressed
function closeLiForm(){
   document.querySelector('.popup-LiForm').style.display="none";
   if(document.querySelector('.popup-LiForm').style.display="none"){
      document.querySelector('.cancel').style.display = "none";
   }
}