/*
Project Name: Blog Page
-Name: SPA
-Author: Hamit Mızrak
-Version: v.1
-Description: This is project blog Business, my project
*/

// ### SEARCH AUTOCOMPLETE JS ###
//ready: sen hazırsan bende hazırım
$(document).ready(function () {
    const searchData = ['Adana', "Ankara", "Balıkesir", "Diyarbakır", "Elazığ", "Hatay", "İstanbul", "Malatya"];
    $("#tags").autocomplete({
        source: searchData
    });
});


// ### COUNTER JS ###
// Counter JS
// $(document).ready(function() {
//     var counters = $(".count");
//     var countersQuantity = counters.length;
//     var counter = [];
//     for (i = 0; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML);
//     }
//     var count = function(start, value, id) {
//       var localStart = start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//         }
//       }, 40);
//     }

//     for (j = 0; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });

// ### COUNTER JQUERY ###
//  <span class="counter" data-counter="250"></span>
// each: döngü için this:bu, objeyi işaretleme prop:objeye nesne ekleme
$('.counter').each(function () {
    $(this).prop('counter', 0).animate({
        counter: $(this).data('counter')
    }, {
        duration: 4000,
        easing: 'swing',
        step: (step) => {
            $(this).text(Math.ceil(step));
        }
    }); //end animate
});

