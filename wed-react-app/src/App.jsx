import React, { useEffect } from "react";

// JavaScript files that need to be included globally
import "./js/vendor/modernizr-3.5.0.min.js";
import "./js/vendor/jquery-1.12.4.min.js";
import "./js/bootstrap.min.js";
import "./js/jquery.slicknav.min.js";
import "./js/owl.carousel.min.js";
import "./js/slick.min.js";
import "./js/gijgo.min.js";
import "./js/wow.min.js";
import "./js/animated.headline.js";
import "./js/jquery.magnific-popup.js";
import "./js/jquery.scrollUp.min.js";
import "./js/jquery.nice-select.min.js";
import "./js/jquery.sticky.js";
import "./js/jquery.counterup.min.js";
import "./js/waypoints.min.js";
import "./js/contact.js";
import "./js/jquery.form.js";
import "./js/jquery.validate.min.js";
import "./js/mail-script.js";
import "./js/jquery.ajaxchimp.min.js";
import "./js/plugins.js";
import "./js/main.js";

const App = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    const WOW = window.WOW;
    new WOW().init();

    // Initialize SlickNav for the mobile menu
    const $ = window.$;
    $("nav").slicknav();

    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
    });

    // Initialize Sticky.js for sticky elements
    $(".sticky").sticky();

    // Initialize Magnific Popup
    $(".popup-link").magnificPopup({
      type: "image",
    });

    // Example of initializing counter up
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>Wedding Event</h1>
    </div>
  );
};

export default App;
