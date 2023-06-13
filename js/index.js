document.addEventListener('DOMContentLoaded', function(){
    // Появление исчезновение хедера
    const header = document.querySelector('header');
    let prevScroll = window.scrollY;
    window.addEventListener('scroll', function(){
        
        if (window.scrollY > window.outerHeight){
            header.classList.add('header-active-scroll');
            if (prevScroll > window.scrollY ){
                header.style.marginTop = 0 + 'px';
            }else{
                header.style.marginTop = -300 + 'px';
            }    
        }else{
            header.classList.remove('header-active-scroll');
        };

        prevScroll = window.scrollY;
    });


    // Активация кнопки в тесте
    const btnAnsw = document.querySelectorAll('.btn-answ');
    btnAnsw.forEach(item =>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('btn-active');
        });
    });


    // Открытие ответа на вопрос

    const qustionBtn = document.querySelectorAll('.questions-items').forEach(function(item) {
        item.addEventListener('click', function(){
            item.classList.toggle('active-quest');
            item.nextElementSibling.classList.toggle('show-answ');
            // console.log(item.nextElementSibling)
        });
    });




    const swiperFirst = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
        spaceBetween: 25,
        slidesPerView: 1.3,
        // slidesPerGroup: 1,
        centeredSlides: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

    const swiperSecond = new Swiper('.swiper-courses', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
        spaceBetween: 25,
        slidesPerView: 1.4,
        // slidesPerGroup: 1,
        centeredSlides: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

})
