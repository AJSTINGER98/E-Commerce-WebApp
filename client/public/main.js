//   window.$(document).ready(function() {
//   window.$("#myCarousel").on("slide.bs.carousel", function(e) {
//       console.log("hello")
//     // alert("hello")
//     var $e = window.$(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 4;
//     var totalItems = window.$(".carousel-item").length;

//     if (idx >= totalItems - (itemsPerSlide - 1)) {
//       var it = itemsPerSlide - (totalItems - idx);
//       for (var i = 0; i < it; i++) {
//         // append slides to end
//         if (e.direction == "left") {
//           window.$(".carousel-item")
//             .eq(i)
//             .appendTo(".carousel-inner");
//         } else {
//           window.$(".carousel-item")
//             .eq(0)
//             .appendTo(window.$(this).find(".carousel-inner"));
//         }
//       }
//     }
//   });
// });