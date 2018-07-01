

$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".sideBar a, #hero-section a, footer a[href='#myPage']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

   
    /* slideIn animation */
    $(window).scroll(function () {
        let animationTypes = ["slideIn", "fadeIn", 'slideToLeft', 'slideToRight'];
        const arrToAnimate = $(".toAnimate");
        arrToAnimate.each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
                let animType = animationTypes.filter((val, index)=> {
                    return $(this).hasClass(val)
                }).join()
                $(this).addClass(animType + 'Now'); 
            }
        });
    });

    /* fadeIn animation */



    $('body').scrollspy({ target: '.navbar' });

    var navbar = document.querySelectorAll('.navbar ul li')
    navbar.forEach(function(elem) {
        elem.addEventListener('click', function(){ 
            if(window.innerWidth < 768){
                document.querySelector('.navbar-toggler').click()
            }
            
        })
    })
    console.log(navbar);
    console.log(window.innerWidth)
    

});