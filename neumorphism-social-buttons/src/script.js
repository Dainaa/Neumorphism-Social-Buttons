//Code to change button styles upon hover and click

//I used JS to handle the transitions, but you could probably just as easily achieve these with SASS

//Gather variables from the HTML
const heartButton = document.getElementById("heart-btn")
const likeButton = document.getElementById("like-btn")
const starButton = document.getElementById("star-btn")
const heart= document.getElementById("heart")
const like = document.getElementById("like")
const star = document.getElementById("star")

//add event listeners
heartButton.addEventListener('click', buttonPress)
likeButton.addEventListener('click',buttonPress)
starButton.addEventListener('click',buttonPress)


//functions

//undo button press
function undoButtons(){
  console.log('a function')
}

//press button
function buttonPress(event){
  //if heart is clicked
  if(event.target.id == 'heart' || event.target.id==
    'heart-btn'){
    
    //if not already active
    if(!heartButton.classList.contains("active")){
      activateHeart();
      deactivateStar();
      deactivateLike();
    }
    //if already active
    else{
      deactivateHeart();
    }
    }
   
 
  //if like is clicked
   else if(event.target.id == 'like' || event.target.id==
    'like-btn'){
  //if not already active
    if(!likeButton.classList.contains("active")){
      activateLike();
      deactivateHeart();
      deactivateStar();
    }
    //if already active
    else{
      deactivateLike();
    }

    }
    
  //if star is clicked
   else if(event.target.id == 'star' || event.target.id==
    'star-btn'){
    if(!starButton.classList.contains("active")){
      activateStar();
      deactivateHeart();
      deactivateLike();
    }
    //if already active
    else{
      deactivateStar();
    }

    }
  
  

    
}


///activate

function activateHeart(){
  heartButton.classList.add("active")
  //play audio
  var audio = document.getElementById('heart-audio')
  audio.play()
  //change appearance
  heartButton.style.transform = "scale(0.95)"
  heart.style.transform = "scale(0.95)"
  
  heartButton.style.background= "rgba(251,79,126,0.08)"
  heart.style.filter="invert(55%) sepia(63%) saturate(4676%) hue-rotate(315deg) brightness(100%) contrast(98%)"
  
  
  
  heartButton.style.transition = "all 0.25s"
}

function activateLike(){
  likeButton.classList.add("active")
  
  var audio = document.getElementById('like-audio')
  audio.play()
  
  likeButton.style.background= "rgba(96,80,219,0.08)"
  like.style.filter="invert(27%) sepia(65%) saturate(1727%) hue-rotate(228deg) brightness(103%) contrast(92%)"
  likeButton.style.transform = "scale(0.95)"
  like.style.transform = "scale(0.95)"
  likeButton.style.transition = "all 0.25s"
  
  
}

function activateStar(){
  starButton.classList.add("active")
  
  var audio = document.getElementById('star-audio')
  audio.play()
  starButton.style.transform = "scale(0.95)"
  star.style.transform = "scale(0.95)"
  
  starButton.style.background= "rgba(241,203,51,0.08)"
  star.style.filter="invert(64%) sepia(82%) saturate(356%) hue-rotate(10deg) brightness(104%) contrast(103%)"
  starButton.style.transition = "all 0.25s"
}

///deactivate
function deactivateHeart(){
  heartButton.classList.remove("active")
  
  
  heartButton.style.transform = "scale(1)"
  heart.style.transform = "scale(1)"
  
  heartButton.style.transition = "all 0.2s"
  
  heartButton.style.backgroundColor= "#e3e5ed"
  heart.style.filter="invert(84%) sepia(13%) saturate(191%) hue-rotate(189deg) brightness(96%) contrast(95%)"
}

function deactivateStar(){
  starButton.classList.remove("active")
  starButton.style.backgroundColor= "#e3e5ed"
  star.style.filter="invert(84%) sepia(13%) saturate(191%) hue-rotate(189deg) brightness(96%) contrast(95%)"
  
  starButton.style.transform = "scale(1)"
  star.style.transform = "scale(1)"
  starButton.style.transition = "all 0.2s"
}

function deactivateLike(){
  likeButton.classList.remove("active")
  likeButton.style.backgroundColor= "#e3e5ed"
  like.style.filter="invert(84%) sepia(13%) saturate(191%) hue-rotate(189deg) brightness(96%) contrast(95%)"
  
  likeButton.style.transform = "scale(1)"
  like.style.transform = "scale(1)"
  likeButton.style.transition = "all 0.2s"
}
