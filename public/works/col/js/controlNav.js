var controlNav=function(e){"use strict";var t=document.querySelector(".section-header__nav-box"),o=document.querySelector(".burger"),n=document.querySelector(".main-nav"),s=document.getElementsByTagName("body")[0],a=document.querySelector(".section-header__nav"),i=document.querySelectorAll(".main-nav__item"),c=document.querySelectorAll(".footer-nav__item");document.querySelector("#radio1"),document.querySelector("#radio2"),document.querySelector("#radio3"),document.querySelector(".form-contact");return e.controlBurgerMenu=function(){o.classList.contains("burger--open")?(o.classList.remove("burger--open"),n.classList.remove("main-nav--open"),t.classList.remove("section-header__nav-box--fixed"),s.style.overflow="auto"):(o.classList.add("burger--open"),n.classList.add("main-nav--open"),s.style.overflow="hidden",t.classList.contains("section-header__nav-box--fixed")||t.classList.add("section-header__nav-box--fixed"))},e.controlResizeWindow=function(){window.innerWidth>1024&&(o.classList.remove("burger--open"),n.classList.remove("main-nav--open"),t.classList.remove("section-header__nav-box--fixed"))},e.fixedPositionMenu=function(){var e,t,o=[document.getElementById("solution"),document.getElementById("we"),document.getElementById("form"),document.getElementById("contact")];window.scrollY>100?(a.classList.add("section-header__nav--fixed"),e=o,t=window.scrollY,e.forEach((function(e,o){e.getBoundingClientRect().top+t<t+100&&e.getBoundingClientRect().bottom>=200?(i.forEach((function(e){e.classList.remove("main-nav__item--active")})),c.forEach((function(e){e.classList.remove("footer-nav__item--active")})),i[o].classList.add("main-nav__item--active"),c[o].classList.add("footer-nav__item--active")):t<400&&(i.forEach((function(e){e.classList.remove("main-nav__item--active")})),c.forEach((function(e){e.classList.remove("footer-nav__item--active")})))}))):a.classList.remove("section-header__nav--fixed")},e.onClickItemMenu=function(e,a,i,c){e.forEach((function(r,d){return r.addEventListener("click",(function(){r.classList.contains(a)?(t.classList.remove("section-header__nav-box--fixed"),o.classList.remove("burger--open"),n.classList.remove("main-nav--open"),s.style.overflow="auto",i[d].classList.add(c),r.classList.add(a)):(e.forEach((function(e){return e.classList.remove(a)})),i.forEach((function(e){return e.classList.remove(c)})),t.classList.remove("section-header__nav-box--fixed"),o.classList.remove("burger--open"),n.classList.remove("main-nav--open"),s.style.overflow="auto",i[d].classList.add(c),r.classList.add(a))}))}))},e}({});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbE5hdi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL2NvbnN0YW50cy5qcyIsInNyYy9qcy9jb250cm9sTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0eWxlR29vZ2xlTWFwID0gW1xyXG4gIHtcclxuICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjZjVmNWY1XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiM2MTYxNjFcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiNmNWY1ZjVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUuY291bnRyeVwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzljOWM5Y1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjYmRiZGJkXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUubmVpZ2hib3Job29kXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUubmVpZ2hib3Job29kXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLm5laWdoYm9yaG9vZFwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzljOWM5Y1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLnByb3ZpbmNlXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjOWM5YzljXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInBvaVwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzc1NzU3NVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiI2U1ZTVlNVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjOWU5ZTllXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjNzU3NTc1XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiI2RhZGFkYVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzdlMThmYlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzYxNjE2MVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2Vzc1wiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzdlMThmYlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQubG9jYWxcIixcclxuICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiM2ZjAwZmZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmxvY2FsXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjOWU5ZTllXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdFwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiA3LjUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdC5saW5lXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiI2U1ZTVlNVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXQuc3RhdGlvblwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiNjOWM5YzlcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5jb25zdCB3cmFwcGVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuc2VjdGlvbi1oZWFkZXJfX25hdi1ib3hcIixcclxuKTtcclxuY29uc3QgYnVyZ2VyQnRuID1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuY29uc3QgbWFpbk5hdiA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW5hdlwiKTtcclxuY29uc3QgYm9keSA9XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnNlY3Rpb24taGVhZGVyX19uYXZcIixcclxuKTtcclxuXHJcbmNvbnN0IGl0ZW1zTWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgXCIubWFpbi1uYXZfX2l0ZW1cIixcclxuKTtcclxuY29uc3QgaXRlbXNGb290ZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gIFwiLmZvb3Rlci1uYXZfX2l0ZW1cIixcclxuKTtcclxuY29uc3QgcmFkaW9MaXN0ID0gW1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaW8xXCIpLFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaW8yXCIpLFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaW8zXCIpLFxyXG5dO1xyXG5cclxuY29uc3QgZm9ybUNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmZvcm0tY29udGFjdFwiLFxyXG4pO1xyXG5cclxuZXhwb3J0IHtcclxuICBzdHlsZUdvb2dsZU1hcCxcclxuICB3cmFwcGVyTG9nbyxcclxuICBidXJnZXJCdG4sXHJcbiAgbWFpbk5hdixcclxuICBib2R5LFxyXG4gIG5hdixcclxuICBpdGVtc01haW5OYXYsXHJcbiAgaXRlbXNGb290ZXJOYXYsXHJcbiAgcmFkaW9MaXN0LFxyXG4gIGZvcm1Db250YWN0LFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIHdyYXBwZXJMb2dvLFxyXG4gIGJ1cmdlckJ0bixcclxuICBtYWluTmF2LFxyXG4gIGJvZHksXHJcbiAgbmF2LFxyXG4gIGl0ZW1zTWFpbk5hdixcclxuICBpdGVtc0Zvb3Rlck5hdixcclxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IG9uQ2xpY2tJdGVtTWVudSA9IChcclxuICBhcnJDaGlsZCxcclxuICBjbGFzc0NoaWxkLFxyXG4gIG90aGVyQXJyQ2hpbGQsXHJcbiAgb3RoZXJDbGFzc0NoaWxkLFxyXG4pID0+IHtcclxuICBhcnJDaGlsZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0NoaWxkKSkge1xyXG4gICAgICAgIGFyckNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NDaGlsZCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBvdGhlckFyckNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgIG90aGVyQ2xhc3NDaGlsZCxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3cmFwcGVyTG9nby5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fbmF2LWJveC0tZml4ZWRcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJidXJnZXItLW9wZW5cIixcclxuICAgICAgICApO1xyXG4gICAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgIFwibWFpbi1uYXYtLW9wZW5cIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBvdGhlckFyckNoaWxkW2luZGV4XS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgb3RoZXJDbGFzc0NoaWxkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzQ2hpbGQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXJMb2dvLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICBcInNlY3Rpb24taGVhZGVyX19uYXYtYm94LS1maXhlZFwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICBcImJ1cmdlci0tb3BlblwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJtYWluLW5hdi0tb3BlblwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIG90aGVyQXJyQ2hpbGRbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICBvdGhlckNsYXNzQ2hpbGQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBjb250cm9sQnVyZ2VyTWVudSA9ICgpID0+IHtcclxuICBpZiAoXHJcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVyZ2VyLS1vcGVuXCIpXHJcbiAgKSB7XHJcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlci0tb3BlblwiKTtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tbmF2LS1vcGVuXCIpO1xyXG4gICAgd3JhcHBlckxvZ28uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fbmF2LWJveC0tZml4ZWRcIixcclxuICAgICk7XHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLS1vcGVuXCIpO1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXYtLW9wZW5cIik7XHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICF3cmFwcGVyTG9nby5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fbmF2LWJveC0tZml4ZWRcIixcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHdyYXBwZXJMb2dvLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fbmF2LWJveC0tZml4ZWRcIixcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VJdGVtc01lbnUgPSAoYXJyQm94LCBzY3JvbGwpID0+IHtcclxuICBhcnJCb3guZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGwgPFxyXG4gICAgICAgIHNjcm9sbCArIDEwMCAmJlxyXG4gICAgICBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+PSAyMDBcclxuICAgICkge1xyXG4gICAgICBpdGVtc01haW5OYXYuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgIFwibWFpbi1uYXZfX2l0ZW0tLWFjdGl2ZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtc0Zvb3Rlck5hdi5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJmb290ZXItbmF2X19pdGVtLS1hY3RpdmVcIixcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGl0ZW1zTWFpbk5hdltpbmRleF0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICBcIm1haW4tbmF2X19pdGVtLS1hY3RpdmVcIixcclxuICAgICAgKTtcclxuICAgICAgaXRlbXNGb290ZXJOYXZbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgXCJmb290ZXItbmF2X19pdGVtLS1hY3RpdmVcIixcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsIDwgNDAwKSB7XHJcbiAgICAgIGl0ZW1zTWFpbk5hdi5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJtYWluLW5hdl9faXRlbS0tYWN0aXZlXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0ZW1zRm9vdGVyTmF2LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICBcImZvb3Rlci1uYXZfX2l0ZW0tLWFjdGl2ZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZml4ZWRQb3NpdGlvbk1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXJyU2VjdGlvbnMgPSBbXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbHV0aW9uXCIpLFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZVwiKSxcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKSxcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKSxcclxuICBdO1xyXG5cclxuICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBcInNlY3Rpb24taGVhZGVyX19uYXYtLWZpeGVkXCIsXHJcbiAgICApO1xyXG5cclxuICAgIGNoYW5nZUl0ZW1zTWVudShhcnJTZWN0aW9ucywgd2luZG93LnNjcm9sbFkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgXCJzZWN0aW9uLWhlYWRlcl9fbmF2LS1maXhlZFwiLFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjb250cm9sUmVzaXplV2luZG93ID0gKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpIHtcclxuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLS1vcGVuXCIpO1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbi1uYXYtLW9wZW5cIik7XHJcbiAgICB3cmFwcGVyTG9nby5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICBcInNlY3Rpb24taGVhZGVyX19uYXYtYm94LS1maXhlZFwiLFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIG9uQ2xpY2tJdGVtTWVudSxcclxuICBjb250cm9sQnVyZ2VyTWVudSxcclxuICBmaXhlZFBvc2l0aW9uTWVudSxcclxuICBjb250cm9sUmVzaXplV2luZG93LFxyXG59O1xyXG4iXSwibmFtZXMiOlsid3JhcHBlckxvZ28iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdG4iLCJtYWluTmF2IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibmF2IiwiaXRlbXNNYWluTmF2IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW1zRm9vdGVyTmF2IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdHlsZSIsIm92ZXJmbG93IiwiYWRkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFyckJveCIsInNjcm9sbCIsImFyclNlY3Rpb25zIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxZIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImVsZW0iLCJhcnJDaGlsZCIsImNsYXNzQ2hpbGQiLCJvdGhlckFyckNoaWxkIiwib3RoZXJDbGFzc0NoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiJ3Q0F1UkEsSUFBTUEsRUFBY0MsU0FBU0MsY0FDM0IsNEJBRUlDLEVBQ0pGLFNBQVNDLGNBQWMsV0FDbkJFLEVBQ0pILFNBQVNDLGNBQWMsYUFDbkJHLEVBQ0pKLFNBQVNLLHFCQUFxQixRQUFRLEdBQ2xDQyxFQUFNTixTQUFTQyxjQUNuQix3QkFHSU0sRUFBZVAsU0FBU1EsaUJBQzVCLG1CQUVJQyxFQUFpQlQsU0FBU1EsaUJBQzlCLHFCQUdBUixTQUFTQyxjQUFjLFdBQ3ZCRCxTQUFTQyxjQUFjLFdBQ3ZCRCxTQUFTQyxjQUFjLFdBR0xELFNBQVNDLGNBQzNCLDRDQ3BQd0IsV0FFdEJDLEVBQVVRLFVBQVVDLFNBQVMsaUJBRTdCVCxFQUFVUSxVQUFVRSxPQUFPLGdCQUMzQlQsRUFBUU8sVUFBVUUsT0FBTyxrQkFDekJiLEVBQVlXLFVBQVVFLE9BQ3BCLGtDQUVGUixFQUFLUyxNQUFNQyxTQUFXLFNBRXRCWixFQUFVUSxVQUFVSyxJQUFJLGdCQUN4QlosRUFBUU8sVUFBVUssSUFBSSxrQkFDdEJYLEVBQUtTLE1BQU1DLFNBQVcsU0FHbkJmLEVBQVlXLFVBQVVDLFNBQ3JCLG1DQUdGWixFQUFZVyxVQUFVSyxJQUNwQiwwREFrRW9CLFdBQ3RCQyxPQUFPQyxXQUFhLE9BQ3RCZixFQUFVUSxVQUFVRSxPQUFPLGdCQUMzQlQsRUFBUU8sVUFBVUUsT0FBTyxrQkFDekJiLEVBQVlXLFVBQVVFLE9BQ3BCLHdEQTFCb0IsZUF2Q0RNLEVBQVFDLEVBd0N6QkMsRUFBYyxDQUNsQnBCLFNBQVNxQixlQUFlLFlBQ3hCckIsU0FBU3FCLGVBQWUsTUFDeEJyQixTQUFTcUIsZUFBZSxRQUN4QnJCLFNBQVNxQixlQUFlLFlBR3RCTCxPQUFPTSxRQUFVLEtBQ25CaEIsRUFBSUksVUFBVUssSUFDWiw4QkFqRG1CRyxFQW9ETEUsRUFwRGFELEVBb0RBSCxPQUFPTSxRQW5EdENKLEVBQU9LLFNBQVEsU0FBQ0MsRUFBTUMsR0FFbEJELEVBQUtFLHdCQUF3QkMsSUFBTVIsRUFDakNBLEVBQVMsS0FDWEssRUFBS0Usd0JBQXdCRSxRQUFVLEtBRXZDckIsRUFBYWdCLFNBQVEsU0FBQ00sR0FDcEJBLEVBQUtuQixVQUFVRSxPQUNiLDZCQUdKSCxFQUFlYyxTQUFRLFNBQUNNLEdBQ3RCQSxFQUFLbkIsVUFBVUUsT0FDYiwrQkFJSkwsRUFBYWtCLEdBQU9mLFVBQVVLLElBQzVCLDBCQUVGTixFQUFlZ0IsR0FBT2YsVUFBVUssSUFDOUIsNkJBRU9JLEVBQVMsTUFDbEJaLEVBQWFnQixTQUFRLFNBQUNNLEdBQ3BCQSxFQUFLbkIsVUFBVUUsT0FDYiw2QkFHSkgsRUFBZWMsU0FBUSxTQUFDTSxHQUN0QkEsRUFBS25CLFVBQVVFLE9BQ2Isb0NBc0JOTixFQUFJSSxVQUFVRSxPQUNaLGlEQXJJa0IsU0FDdEJrQixFQUNBQyxFQUNBQyxFQUNBQyxHQUVBSCxFQUFTUCxTQUFRLFNBQUNDLEVBQU1DLFVBQ3RCRCxFQUFLVSxpQkFBaUIsU0FBUyxXQUN4QlYsRUFBS2QsVUFBVUMsU0FBU29CLElBd0IzQmhDLEVBQVlXLFVBQVVFLE9BQ3BCLGtDQUVGVixFQUFVUSxVQUFVRSxPQUNsQixnQkFFRlQsRUFBUU8sVUFBVUUsT0FDaEIsa0JBRUZSLEVBQUtTLE1BQU1DLFNBQVcsT0FDdEJrQixFQUFjUCxHQUFPZixVQUFVSyxJQUM3QmtCLEdBRUZULEVBQUtkLFVBQVVLLElBQUlnQixLQXBDbkJELEVBQVNQLFNBQVEsU0FBQ1ksVUFDaEJBLEVBQVF6QixVQUFVRSxPQUFPbUIsTUFFM0JDLEVBQWNULFNBQVEsU0FBQ1ksVUFDckJBLEVBQVF6QixVQUFVRSxPQUNoQnFCLE1BR0psQyxFQUFZVyxVQUFVRSxPQUNwQixrQ0FFRlYsRUFBVVEsVUFBVUUsT0FDbEIsZ0JBRUZULEVBQVFPLFVBQVVFLE9BQ2hCLGtCQUVGUixFQUFLUyxNQUFNQyxTQUFXLE9BQ3RCa0IsRUFBY1AsR0FBT2YsVUFBVUssSUFDN0JrQixHQUVGVCxFQUFLZCxVQUFVSyxJQUFJZ0IifQ==
