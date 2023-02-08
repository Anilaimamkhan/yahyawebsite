
//   $(document).ready(function() {
//     $(window).scroll(function () {
//       var positiontop = $(document).scrollTop();
//       console.log(positiontop);
//       if ((positiontop > 10) && (positiontop < 200)) {
//           // $(".hero").addClass(" animate__animated animate__fadeInUp");
//       }

//   });

// });




let bars = document.querySelector(".menu-icon .fa-bars");
let nav = document.querySelector(".header nav");
let user = document.querySelector(".header .menu-icon #user");
let form = document.querySelector(".form-container");
let cross = document.querySelector(".form-container .cross");
let top_scroll = document.querySelector(".top-scroll");
let header = document.querySelector(".header")
let shopping = document.querySelector(".shopping-container i.shopping");
let shopping_container = document.querySelector(".shopping-container");
let cart = document.querySelector("#cart");


bars.onclick = () => {
  bars.classList.toggle("fa-times");
  form.classList.remove("active");
  nav.classList.toggle("active");
  shopping_container.classList.remove("active") ;

}

cart.onclick = () => {
    shopping_container.classList.toggle("active") ;
    form.classList.remove("active");
    bars.classList.remove("fa-times");
    nav.classList.remove("active");

}


shopping.onclick = () => {
    shopping_container.classList.toggle("active");
    form.classList.remove("active");
    // form.classList.toggle("active");

    bars.classList.remove("fa-times");
    nav.classList.remove("active");
}

bars.onclick = () => {
    bars.classList.toggle("fa-times");
    form.classList.remove("active");
    nav.classList.toggle("active");
    shopping_container.classList.remove("active") ;

}

user.onclick = () => {
    form.classList.toggle("active");
    // form.classList.remove("active");
    bars.classList.remove("fa-times");
      nav.classList.remove("active");
      shopping_container.classList.remove("active") ;

}

cross.onclick = () => {
    form.classList.toggle("active");
    bars.classList.remove("fa-times");
      nav.classList.remove("active");
      shopping_container.classList.remove("active") ;

}

top_scroll.onclick = () => {
    header.scrollIntoView({behavior:"smooth"});

    }




 
window.on("scroll", () => {
  form.classList.remove("active");
  bars.classList.remove("fa-times");
    nav.classList.remove("active");
    shopping_container.classList.remove("active") ;

})

// about swiper stasrst

// var swiper = new Swiper(".swiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//   });


  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
     640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      // "1234": {
      //   slidesPerView: 4,
      // },
    },
  });
// about swiper and



// about swiper and
// window.onscroll =()=> {
//   form.classList.remove("active");
//   bars.classList.remove("fa-times");
//   nav.classList.remove("active");
//   shopping_container.classList.remove("active") ;

// };



// function validation(){
//   let username = document.getElementById("username").value;

// if(username == ""){
// document.getElementById("user").innerHTML = "**please fill the name";
// return false;
// }
// }





