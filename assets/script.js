// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour = ["#hour-9"
,"#hour-10"
,"#hour-11"
,"#hour-12"
,"#hour-13"
,"#hour-14"
,"#hour-15"
,"#hour-16"
,"#hour-17"]
var buttons = ["#b9"
,"#b10"
,"#b11"
,"#b12"
,"#b13"
,"#b14"
,"#b15"
,"#b16"
,"#b17"]
var today = dayjs();
var hourTimer = dayjs().format("HH");
console.log(hour)
console.log(hourTimer)
var updateTime = function(){
  for (var i = 0; i <hour.length; i++){
      if(hourTimer-9 < i){
        $(hour[i]).removeClass("present");
        $(hour[i]).removeClass("past");
        $(hour[i]).addClass("future");
      }
      else if (hourTimer-9 == i){
        $(hour[i]).removeClass("future");
        $(hour[i]).removeClass("past");
        $(hour[i]).addClass("present");
      }
      else{
        $(hour[i]).removeClass("present");
        $(hour[i]).removeClass("future");
        $(hour[i]).addClass("past");
      }
  }
};

var setupSaveButtons = function(){
  for (var i = 0; i <buttons.length; i++){
    $(buttons[i]).click(function(){
      var saveData = $(this).prev().val();
      localStorage.setItem("test", saveData);
    });
}
}

var loadStorage = function(){
  for (var i = 0; i <hour.length; i++){
    var saveData = $(hour[i]).val();
    localStorage.getItem("test", saveData);
}
}

setInterval( 
  updateTime,
 10000);

$(function () {
    $("#currentDay").text(today.format("dddd MMMM YYYY"));
    updateTime();
    setupSaveButtons();
    loadStorage();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
