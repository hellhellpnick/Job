var sliderCardsCharacters=function(){"use strict";const s=document.querySelector(".layout-header").querySelectorAll(".card-character"),e=document.querySelector(".wrapper-cards").getElementsByTagName("li"),i=()=>{if(window.innerWidth>=1366){for(let e=0;e<=s.length-1;e++)if(s[e].classList.contains("is-opacity-card")){s[e].classList.remove("is-opacity-card"),console.log("ok");break}for(let e=0;e<=s.length-1;e++)if(s[e].classList.contains("slick-active")&&e!==s.length-1){s[e+1].classList.add("is-opacity-card");break}for(let e=0;e<=s.length-1;e++)if(s[e].classList.contains("is-hidden-card")){s[e].classList.remove("is-hidden-card");break}for(let e=0;e<=s.length-1;e++)s[e].classList.contains("slick-active")&&!s[e].classList.contains("is-opacity-card")||s[e].classList.add("is-hidden-card");for(let e=0;e<=s.length-1;e++)s[e].classList.contains("is-hidden-card")&&s[e].classList.remove("is-hidden-card");for(let e=0;e<=s.length-1;e++)s[e].classList.contains("slick-active")&&!s[e].classList.contains("is-opacity-card")||s[e].classList.add("is-hidden-card")}};return()=>{$(".wrapper-cards").slick({infinite:!1,slidesToShow:2,slidesToScroll:1,dots:!0,nextArrow:!1,prevArrow:!1,responsive:[{breakpoint:1365,settings:{slidesToShow:1}}]}),i(),s.forEach(s=>s.addEventListener("click",()=>{i()}));for(let s=0;s<=e.length-1;s++)e[s].addEventListener("click",i);$(".wrapper-cards").on("wheel",(function(s){s.preventDefault(),s.originalEvent.deltaY<0?($(this).slick("slickNext"),i()):($(this).slick("slickPrev"),i())}))}}();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyQ2FyZHNDaGFyYWN0ZXJzLmpzIiwic291cmNlcyI6WyJzcmMvanMvc2xpZGVyQ2FyZHNDaGFyYWN0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtaGVhZGVyJylcclxuY29uc3QgY2FyZHMgPSBoZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtY2hhcmFjdGVyJylcclxuY29uc3Qgd3JhcHBlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXItY2FyZHMnKVxyXG5jb25zdCBsaXN0ID0gd3JhcHBlckNhcmRzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpXHJcblxyXG5jb25zdCBmb3JDYXJkTGlzdCA9ICgpID0+IHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTM2Nikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2FyZHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGlmIChjYXJkc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wYWNpdHktY2FyZCcpKSB7XHJcbiAgICAgICAgY2FyZHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BhY2l0eS1jYXJkJylcclxuICAgICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjYXJkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNhcmRzW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2xpY2stYWN0aXZlJykgJiZcclxuICAgICAgICBpICE9PSBjYXJkcy5sZW5ndGggLSAxXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNhcmRzW2kgKyAxXS5jbGFzc0xpc3QuYWRkKCdpcy1vcGFjaXR5LWNhcmQnKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjYXJkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgaWYgKGNhcmRzW2ldLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuLWNhcmQnKSkge1xyXG4gICAgICAgIGNhcmRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbi1jYXJkJylcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2FyZHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhY2FyZHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGljay1hY3RpdmUnKSB8fFxyXG4gICAgICAgIGNhcmRzW2ldLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BhY2l0eS1jYXJkJylcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2FyZHNbaV0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuLWNhcmQnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2FyZHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGlmIChjYXJkc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbi1jYXJkJykpIHtcclxuICAgICAgICBjYXJkc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4tY2FyZCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBjYXJkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFjYXJkc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWNrLWFjdGl2ZScpIHx8XHJcbiAgICAgICAgY2FyZHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGFjaXR5LWNhcmQnKVxyXG4gICAgICApIHtcclxuICAgICAgICBjYXJkc1tpXS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4tY2FyZCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNsaWRlckNhcmRzQ2hhcmFjdGVycyA9ICgpID0+IHtcclxuICAkKCcud3JhcHBlci1jYXJkcycpLnNsaWNrKHtcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG5leHRBcnJvdzogZmFsc2UsXHJcbiAgICBwcmV2QXJyb3c6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTM2NSxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pXHJcblxyXG4gIGZvckNhcmRMaXN0KClcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoaXRlbSkgPT5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGZvckNhcmRMaXN0KClcclxuICAgIH0pXHJcbiAgKVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgbGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvckNhcmRMaXN0KVxyXG4gIH1cclxuXHJcbiAgJCgnLndyYXBwZXItY2FyZHMnKS5vbignd2hlZWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKGUub3JpZ2luYWxFdmVudC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICQodGhpcykuc2xpY2soJ3NsaWNrTmV4dCcpXHJcbiAgICAgIGZvckNhcmRMaXN0KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykuc2xpY2soJ3NsaWNrUHJldicpXHJcbiAgICAgIGZvckNhcmRMaXN0KClcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXJDYXJkc0NoYXJhY3RlcnNcclxuIl0sIm5hbWVzIjpbImNhcmRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImxpc3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvckNhcmRMaXN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImkiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCIkIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9yaWdpbmFsRXZlbnQiLCJkZWx0YVkiLCJ0aGlzIl0sIm1hcHBpbmdzIjoia0RBQUEsTUFDTUEsRUFEU0MsU0FBU0MsY0FBYyxrQkFDakJDLGlCQUFpQixtQkFFaENDLEVBRGVILFNBQVNDLGNBQWMsa0JBQ2xCRyxxQkFBcUIsTUFFekNDLEVBQWMsUUFDZEMsT0FBT0MsWUFBYyxLQUFNLEtBQ3hCLElBQUlDLEVBQUksRUFBR0EsR0FBS1QsRUFBTVUsT0FBUyxFQUFHRCxPQUNqQ1QsRUFBTVMsR0FBR0UsVUFBVUMsU0FBUyxtQkFBb0IsQ0FDbERaLEVBQU1TLEdBQUdFLFVBQVVFLE9BQU8sbUJBQzFCQyxRQUFRQyxJQUFJLGdCQUtYLElBQUlOLEVBQUksRUFBR0EsR0FBS1QsRUFBTVUsT0FBUyxFQUFHRCxPQUVuQ1QsRUFBTVMsR0FBR0UsVUFBVUMsU0FBUyxpQkFDNUJILElBQU1ULEVBQU1VLE9BQVMsRUFDckIsQ0FDQVYsRUFBTVMsRUFBSSxHQUFHRSxVQUFVSyxJQUFJLDZCQUsxQixJQUFJUCxFQUFJLEVBQUdBLEdBQUtULEVBQU1VLE9BQVMsRUFBR0QsT0FDakNULEVBQU1TLEdBQUdFLFVBQVVDLFNBQVMsa0JBQW1CLENBQ2pEWixFQUFNUyxHQUFHRSxVQUFVRSxPQUFPLDRCQUt6QixJQUFJSixFQUFJLEVBQUdBLEdBQUtULEVBQU1VLE9BQVMsRUFBR0QsSUFFbENULEVBQU1TLEdBQUdFLFVBQVVDLFNBQVMsa0JBQzdCWixFQUFNUyxHQUFHRSxVQUFVQyxTQUFTLG9CQUU1QlosRUFBTVMsR0FBR0UsVUFBVUssSUFBSSxzQkFJdEIsSUFBSVAsRUFBSSxFQUFHQSxHQUFLVCxFQUFNVSxPQUFTLEVBQUdELElBQ2pDVCxFQUFNUyxHQUFHRSxVQUFVQyxTQUFTLG1CQUM5QlosRUFBTVMsR0FBR0UsVUFBVUUsT0FBTyxzQkFJekIsSUFBSUosRUFBSSxFQUFHQSxHQUFLVCxFQUFNVSxPQUFTLEVBQUdELElBRWxDVCxFQUFNUyxHQUFHRSxVQUFVQyxTQUFTLGtCQUM3QlosRUFBTVMsR0FBR0UsVUFBVUMsU0FBUyxvQkFFNUJaLEVBQU1TLEdBQUdFLFVBQVVLLElBQUksMEJBTUQsS0FDNUJDLEVBQUUsa0JBQWtCQyxNQUFNLENBQ3hCQyxVQUFVLEVBQ1ZDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxXQUFXLEVBQ1hDLFdBQVksQ0FDVixDQUNFQyxXQUFZLEtBQ1pDLFNBQVUsQ0FDUlAsYUFBYyxPQU10QmQsSUFFQU4sRUFBTTRCLFFBQVNDLEdBQ2JBLEVBQUtDLGlCQUFpQixRQUFTLEtBQzdCeEIsV0FJQyxJQUFJRyxFQUFJLEVBQUdBLEdBQUtMLEVBQUtNLE9BQVMsRUFBR0QsSUFDcENMLEVBQUtLLEdBQUdxQixpQkFBaUIsUUFBU3hCLEdBR3BDVyxFQUFFLGtCQUFrQmMsR0FBRyxTQUFTLFNBQVVDLEdBQ3hDQSxFQUFFQyxpQkFFRUQsRUFBRUUsY0FBY0MsT0FBUyxHQUMzQmxCLEVBQUVtQixNQUFNbEIsTUFBTSxhQUNkWixNQUVBVyxFQUFFbUIsTUFBTWxCLE1BQU0sYUFDZFoifQ==