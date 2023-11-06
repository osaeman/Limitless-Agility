// Live Chat Pop up
const live_chat_btn = document.querySelector(".live-chat-btn");
const live_chat_content = document.querySelector(".live-chat-content");

live_chat_btn.addEventListener("click", () => {
  live_chat_content.classList.toggle("live-chat-content-show");
  if (live_chat_content.classList.contains("live-chat-content-show")) {
    live_chat_btn.innerHTML = `<i class="fal fa-times"></i>`;
  } else {
    live_chat_btn.innerHTML = `<i class="fas fa-comment-lines"></i>`;
  }
});

// Mobile Nav Slider
const mobile_nav_btn = document.querySelector(".mobile-nav-btn");
const mobile_nav_slider = document.querySelector(".mobile-nav-slider");
const slider_close_btn = document.querySelector(".slider-close-btn");

mobile_nav_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.add("mobile_nav_slide_show");
});

slider_close_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.remove("mobile_nav_slide_show");
  mobile_nav_dropdown.classList.remove("mobile-nav-dropdown-show");
  mobile_nav_link_i.innerHTML = `<i class="far fa-plus"></i>`;
});

//
const header_nav_link = document.querySelector(".header-nav-link");
const header_nav_dropdown = document.querySelector(".header-nav-dropdown");
header_nav_link.addEventListener("click", () => {
  header_nav_dropdown.classList.toggle("header-nav-dropdown-show");
});

//
const mobile_nav_link = document.querySelector(".mobile-nav-link");
const mobile_nav_link_i = document.querySelector(".mobile-nav-link-i");
const mobile_nav_dropdown = document.querySelector(".mobile-nav-dropdown");
mobile_nav_link.addEventListener("click", () => {
  mobile_nav_dropdown.classList.toggle("mobile-nav-dropdown-show");
  if (mobile_nav_dropdown.classList.contains("mobile-nav-dropdown-show")) {
    mobile_nav_link_i.innerHTML = `<i class="far fa-minus"></i>`;
  } else {
    mobile_nav_link_i.innerHTML = `<i class="far fa-plus"></i>`;
  }
});
