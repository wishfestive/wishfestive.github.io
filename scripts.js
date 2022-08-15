$(document).ready(function() {

    $("#btn1").click(function() {
  
      $("body,html").animate(
        {
          scrollTop: $("#scroll-target").offset().top - 100
        },
        800 //speed
      );
  
    });
  
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animated-image-animation');
        }
      });
    });
    
    observer.observe(document.querySelector('.animated-image'));

    $('#bio-collapse-button').on("click", function() {
      $(this).toggleClass('clicked');
    });

  });