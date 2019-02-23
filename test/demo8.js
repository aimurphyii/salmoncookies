'use strict';

// var myElement = document.getElementById('mydiv');

// myElement.addEventListener('click', function(){
//   console.log('i got clicked!')  
// });


// cache chat from DOM
var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('sweetness');

var allComments = [];


// step 5 takes params and creates an obj.. comment obj
var Comment = function(username, text){
  this.username = username;
  this.text = text;
};

Comment.prototype.render = function(){

  var liEl = document.createElement('li');
  liEl.innerHTML = '<b>'+ this.username+ ': </b><em>' + this.text+ '</em>';
  return liEl;
}

// step 3 looks at event 
function handleCommentSubmitPlz(event){
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.who);
  console.log(event.target.says.value);
  console.log(event.target.who.value);

  // step 4 looks at and gives values
  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  var newComment = new Comment (commenter, remark);
// step 6 ref inpputs and clear out 
  event.target.who.value = null;
  event.target.says.value = null;

  // 7 now add to empty array from up top
  allComments.unshift(newComment);

  // Last step...now call it here
  renderAllComments();
}

// stick it to the DOM
function renderAllComments(){
  // get rid of existing comments first
  chatList.innerHTML = '';
// now put the new list itmes from the array into it.
  for(var i = 0; i < allComments.length; i++){
    chatList.appendChild(allComments[i].render());
  }

}

// step 2 add event listener then call handle

chatForm.addEventListener('submit', handleCommentSubmitPlz);