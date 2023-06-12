document.addEventListener('DOMContentLoaded', function(){

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

    const btnAnsw = document.querySelectorAll('.btn-answ');
    btnAnsw.forEach(item =>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('btn-active');
        });
    });



    const swiper = new Swiper('.swiper', {
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

})
