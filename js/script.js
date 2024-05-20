document.addEventListener('DOMContentLoaded', () => {
  // Header START
  $('.hamburger').on('click', function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.header-mobile-wrap').slideUp(500);
    } else {
      $(this).addClass('is-active');
      $('.header-mobile-wrap').slideDown(500);
    }
  });
  // Header END

  // Banner START
  const bannerSwiper = new Swiper('.banner-swiper', {
    speed: 1000,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: '.banner-swiper .swiper-button-next',
      prevEl: '.banner-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.banner-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  // Banner END

  // Services START
  $('.services-btn').magnificPopup({
    type: 'inline',
    showCloseBtn: false,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
  });
  $('.modal-form-close').on('click', function () {
    $.magnificPopup.close();
  });
  // Services END

  // Gallery START
  $('.gallery-wrap a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace(
          'mfp-figure',
          'mfp-figure mfp-with-anim'
        );
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
  });

  $('.gallery-btn a').on('click', function (e) {
    e.preventDefault();
    var galleryItem = $('.gallery-item');

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).text('Показать еще');
      galleryItem.each(function () {
        if ($(this).hasClass('is-active')) {
          $(this).removeClass('is-active');
          $(this).slideUp();
        }
      });
    } else {
      $(this).addClass('is-active');
      $(this).text('Скрыть');
      galleryItem.each(function () {
        if (!$(this).is(':visible')) {
          $(this).addClass('is-active');
          $(this).slideDown();
        }
      });
    }
  });
  // Gallery END

  // Reviews START
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  // Reviews END
});
document.addEventListener("DOMContentLoaded", function() {
  const servicesTitles = document.querySelectorAll(".services-title");

  servicesTitles.forEach(function(title) {
    title.addEventListener("click", function() {
      const item = this.parentElement;
      item.classList.toggle("active");
    });
  });
});

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-button");
	for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// function openModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
  
//   var pdfViewer = document.getElementById("pdfViewer");
//   pdfViewer.src = "path/to/your/presentation.pdf"; // Укажите путь к вашей презентации PDF
// }

// // Закрывает модальное окно
// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// Загружает PDF при нажатии на кнопку "Скачать"
document.addEventListener('DOMContentLoaded', function() {
  // Весь ваш JavaScript код здесь

  document.getElementById("downloadLink").addEventListener("click", function(event) {
		
    event.preventDefault(); // Предотвращает переход по ссылке
    var pdfPath = "pdf/roastercoffee.pdf"; // Укажите путь к вашей презентации PDF
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "roastercoffee.pdf"; // Имя файла для загрузки
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // Добавляем обработчик события для закрытия модального окна при клике на кнопку "Закрыть"
  document.querySelector(".close").addEventListener("click", closeModal);
  
  // Добавляем обработчик события для открытия модального окна при клике на кнопку "Скачать презентацию"
  document.querySelector(".sticky-tab").addEventListener("click", openModal);
});
// Загружает PDF при нажатии на кнопку "Скачать"
document.addEventListener('DOMContentLoaded', function() {
  // Весь ваш JavaScript код здесь

  // document.getElementById("downloadLink").addEventListener("click", function(event) {

  //   event.preventDefault(); // Предотвращает переход по ссылке
  //   var pdfPath = "pdf/roastercoffee.pdf"; // Укажите путь к вашей презентации PDF
  //   var link = document.createElement("a");
  //   link.href = pdfPath;
  //   link.download = "roastercoffee.pdf"; // Имя файла для загрузки
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // });

  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // Добавляем обработчик события для закрытия модального окна при клике на кнопку "Закрыть"
  document.querySelector(".close").addEventListener("click", closeModal);
  
  // Добавляем обработчик события для открытия модального окна при клике на кнопку "Скачать презентацию"
  document.querySelector(".sticky-tab-new").addEventListener("click", openModal);
});
document.addEventListener('DOMContentLoaded', function() {
  // Весь ваш JavaScript код здесь

  // document.getElementById("downloadLink").addEventListener("click", function(event) {

  //   event.preventDefault(); // Предотвращает переход по ссылке
  //   var pdfPath = "pdf/roastercoffee.pdf"; // Укажите путь к вашей презентации PDF
  //   var link = document.createElement("a");
  //   link.href = pdfPath;
  //   link.download = "roastercoffee.pdf"; // Имя файла для загрузки
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // });

  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // Добавляем обработчик события для закрытия модального окна при клике на кнопку "Закрыть"
  document.querySelector(".close").addEventListener("click", closeModal);
  
  // Добавляем обработчик события для открытия модального окна при клике на кнопку "Скачать презентацию"
  document.querySelector(".sticky-tab-new-one").addEventListener("click", openModal);
});

//++++++++++++++++++++++++++++++++
$(function () {
	var inputs = $(".input");
	var paras = $(".description-flex-container").find("p");
	inputs.click(function () {
		var t = $(this),
			ind = t.index(),
			matchedPara = paras.eq(ind);

		t.add(matchedPara).addClass("active");
		inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
	});
});

console.log('%CWOTTTTT', 'color: teal; font-size: 46px;');

let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}