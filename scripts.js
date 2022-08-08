
$(document).ready(function() {
    $("#btn1").click(function() {
  
      $("body,html").animate(
        {
          scrollTop: $("#scroll-target").offset().top - 100
        },
        800 //speed
      );
  
    });
  
    $(window).scroll(function(){
      var scroll_position = $(window).scrollTop()/2;
  
      if (window.innerWidth < 785) {
        scroll_position = scroll_position / 4;
      }
  
      $('.header-parallax').css({
          'background-position-y' : - scroll_position + "px",
      })
    
    })
  
    var $animation_elements = $('.animate__animated');
  
    function checkInView() {
      var window_height = $(window).height();
      var window_top_position = $(window).scrollTop();
      var window_bottom_position = (window_top_position + window_height);
    
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass($element.data("animation"));
        } else {
          $element.removeClass($element.data("animation"));
        }
      });
    }
  
    if (window.innerWidth > 785) {
      $(window).on('scroll', checkInView);
    }
  
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

  });