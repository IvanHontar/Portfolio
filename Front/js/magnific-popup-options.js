$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  
  // Call the functions 
  magnifPopup();

});


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('portfolioForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    // Отправка данных формы на сервер с помощью AJAX
    const formData = new FormData(form);
    fetch('/submit_form', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Если ответ от сервера успешный, показываем сообщение об успешной отправке формы
        successMessage.style.display = 'block';
      } else {
        // Если произошла ошибка, обрабатываем её
        console.error('Error:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});