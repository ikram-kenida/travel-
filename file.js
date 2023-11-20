$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 20,
        dots:false,
        autoplay: true,
        nav:true,
        loop:true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1, // Number of items to show at this breakpoint
            },
            // breakpoint from 480 up
            700: {
                items: 2, // Number of items to show at this breakpoint
            },
            // breakpoint from 768 up
            800: {
                items: 3, // Number of items to show at this breakpoint
            }
        }
    });
    $('.owl-nav button.owl-prev').css('color', 'orange'); // Change 'red' to the color you desire
    $('.owl-nav button.owl-next').css('color', 'orange'); 
    $('.owl-nav button.owl-next').css('font-size', '50px'); 
    $('.owl-nav button.owl-prev').css('font-size', '50px'); 

});
function handleScroll() {
    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Set the scroll position at which you want the animation to trigger
    var triggerPosition = 150;

    // Select the element you want to animate
    var elementToAnimate = document.getElementById('about'); // Replace 'yourElementId' with the actual ID of your element
    var nav=document.getElementById('nav');
    // Check if the scroll position is beyond the trigger point
    if (scrollPosition > triggerPosition) {
      // Add the 'animate' class to apply the animation styles
      elementToAnimate.classList.add('scale-up-center');
      nav.classList.add('orange');
    } else {
      // Remove the 'animate' class if the scroll position is less than the trigger point
      elementToAnimate.classList.remove('scale-up-center');
      nav.classList.remove('orange');
    }
  }

  // Attach the 'handleScroll' function to the 'scroll' event
  window.addEventListener('scroll', handleScroll);

/*$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
              margin:20,
              dots:true,
              autoplay:true,
              responsive : {
                // breakpoint from 0 up
                0 : {
                    option1 : value,
                    option2 : value,
                    ...
                },
                // breakpoint from 480 up
                480 : {
                    option1 : value,
                    option2 : value,
                    ...
                },
                // breakpoint from 768 up
                768 : {
                    option1 : value,
                    option2 : value,
                    ...
                }
            }
        }
       
    );
  });

*/