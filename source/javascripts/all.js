//= require_tree .





$(document).ready( function() {
  $('#myCarousel').carousel({
    interval:   4000
  });

  var clickEvent = false;
  $('#myCarousel').on('click', '.nav a', function() {
    clickEvent = true;
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.nav').children().length -1;
      var current = $('.nav li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.nav li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
});



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})






$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    events: [


// use this as a template for the events.


// {
//     title: 'All Day Event',
//     start: new Date(y, m, 1)
//   },
// {
//   title: 'Long Event',
//   start: new Date(y, m, d-5),
//   end: new Date(y, m, d-2)
// },
// {
//   id: 999,
//   title: 'Repeating Event',
//   start: new Date(y, m, d-3, 16, 0),
//   allDay: false
// },
// {
//   id: 999,
//   title: 'Repeating Event',
//   start: new Date(y, m, d+4, 16, 0),
//   allDay: false
// },
// {
//   title: 'Meeting',
//   start: new Date(y, m, d, 10, 30),
//   allDay: false
// },
// {
//   title: 'Lunch',
//   start: new Date(y, m, d, 12, 0),
//   end: new Date(y, m, d, 14, 0),
//   allDay: false
// },
// {
//   title: 'Birthday Party',
//   start: new Date(y, m, d+1, 19, 0),
//   end: new Date(y, m, d+1, 22, 30),
//   allDay: false
// },
// {
//   title: 'Click for Google',
//   start: new Date(y, m, 28),
//   end: new Date(y, m, 29),
//   url: 'http://google.com/'
// }
]
});
})




$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5700
    })
});
