class Search {
  //getInput method and search for the item using the input 
  static getInput(input) {
    for(let i = 0; i < li.length; i++) {
      //get the current a tag elements 
      const aTag = li[i].getElementsByTagName("a")[0];
      //check to see if the name the user search is in our database 
      if(aTag.innerHTML.toUpperCase().indexOf(input) > -1) {
        //when the name is found display the name searched only cancelling out others
        li[i].style.display = "";
      } else {
        //if not found display nothing or a not found message 
        li[i].style.display = "none";
      }
    }
  }
  
}
//add keyup event listener to the input 
userInput.addEventListener("keyup", search);

//function that's called when a user search names
function search() {
  Search.getInput(userInput.value.toUpperCase().trim());
}