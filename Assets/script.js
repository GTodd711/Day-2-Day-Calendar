
var timeDayElement = document.getElementById("currentDay");
// function to update the clock
function updateTime(){
var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss A');
timeDayElement.textContent = currentTime
};
// calls function to update clock immediately
updateTime();

// updates the clock every second
setInterval(updateTime, 1000);

// function to make the jquerry wait until all html elements are rendered
$(document).ready(function()  { 
$(function () {
    // event listener for when the save button is pushed
    $(".saveBtn").on("click", function(){
      // gets user input from text area
      var userInput = $(this).siblings(".description").val();
      // get the id of the containing time block
      var timeBlockId = $(this).parent().attr("id");
      // saves the user input in local storage using the time block id
      localStorage.setItem(timeBlockId, userInput);
    });
    // function sets the color of each row and determines the hour so its set properlly
    $(".time-block").each(function(){
      var currentHour = dayjs().hour();
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
      // this is what determines the color
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    }); 
    $(".time-block").each(function(){
      var timeBlockId = $(this).attr("id");
      var savedUserInput = localStorage.getItem(timeBlockId);

      if (savedUserInput) {
        $(this).find(".description").val(savedUserInput);
      }
    })
    function hourUpdate(){
      var currentHour = dayjs().hour(); 
      console.log(currentHour)
   
    }
    hourUpdate()
  } ) } );

