// Date Display
var todaysDate = dayjs();
$('#todaysDate').text(todaysDate.format('MMMM, dddd D'));

//make function availble after load//
$(document).ready(function() {

//clicking save button//
  var saveBtn = $('.savBtn');
  saveBtn.on('click', function () {

  //get values written//
  var textEnter = $(this).siblings('.description').val();

  //id of hour-x//
  var time =$(this).parent().attr('id');

  //set var into local//
  localStorage.setitem(time, textEnter);
  
});

function getTime() {
  //current-24hr clock//
  var currentHour = dayjs().hour();
  console.log(currentHour)

  $('.time-block').each(function () {
  var myHour = parseInt($(this).attr("id").split("-")[1]);

  if (currentHour > myHour) {
    //add past
    $(this).addClass('past');
  } else if (currentHour === myHour) {
    //add present
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    //add future
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
  }
  })
}
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
