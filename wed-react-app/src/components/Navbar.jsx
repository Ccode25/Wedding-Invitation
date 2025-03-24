import React from "react";

const Navbar = () => {
  return (
    <div class="col-xl-10 col-lg-10 col-md-10">
      <div class="main-menu f-right d-none d-lg-block">
        <nav>
          <ul id="navigation">
            <li>
              <a href="index.html"> home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="gallery.html">gallery</a>
            </li>
            <li>
              <a href="booking.html">Guestbook</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
              <ul class="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="single-blog.html">Blog Details</a>
                </li>
                <li>
                  <a href="elements.html">Element</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
