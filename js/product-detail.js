var interval = 2000;{ // 2 seconds

                // Function to handle the image sliding
                function slideImages() {
                    var $proContainer = $('.pro-container');
                    var $firstPro = $proContainer.find('.pro:first');

                    // Animate the transition to the left
                    $proContainer.animate({
                        marginLeft: -($firstPro.outerWidth(true))
                    }, 1000, function () {
                        // Move the first image to the end
                        $firstPro.appendTo($proContainer);
                        // Reset the margin-left property
                        $proContainer.css('marginLeft', 0);
                    });
                }

                // Set the interval for the image slide
                setInterval(slideImages, interval);
              }  
             
              $('.small-img-group .small-img-col').click(function() {
                var imgSrc = $(this).find('img').attr('src');
                $('.single-pro-image img#MainImg').attr('src', imgSrc);
            });
            
            