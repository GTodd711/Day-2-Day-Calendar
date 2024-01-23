// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
    // event listener for when teh save button is pushed
    $(".saveBtn").on("click", function(){
      // gets user input from text area
      var userInput = $(this).siblings(".description").val();
      // get the id of the containing time block
      var timeBlockId = $(this).parent().attr("id");
      // saves the user input in local storage using the time block id
      localStorage.setItem(timeBlockId, userInput);
    });

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    $(".time-block").each(function(){
      var currentHour = dayjs().hour();
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    $(".time-block").each(function(){
      var timeBlockId = $(this).attr("id");
      var savedUserInput = localStorage.getItem(timeBlockId);

      if (savedUserInput) {
        $(this).find(".description").val(savedUserInput);
      }
    })

    // TODO: Add code to display the current date in the header of the page.
  } ) } );

