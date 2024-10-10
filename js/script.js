// Меню на мобильных версиях
document.getElementById("menuButton").onclick = function() {
    document.getElementById("menu").style.display = "block";
};

document.getElementById("closeButton").onclick = function() {
    document.getElementById("menu").style.display = "none";
};


// Преалодер при загрузки сайта
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  document.body.onload = function() {
    setTimeout(function() {
      var preloader = document.getElementById('page-preloader');
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 200);
  }

  // Плавная загрузка элементов на сайте
  // Функция для проверки, виден ли элемент на экране
function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Функция для добавления класса, если элемент в зоне видимости
function showOnScroll() {
  const elements = document.querySelectorAll('.scroll-element');
  elements.forEach(element => {
      if (isVisible(element)) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
}

// Добавляем событие при скролле
window.addEventListener('scroll', showOnScroll);

// Вызываем функцию при загрузке страницы, чтобы элементы проверялись сразу
document.addEventListener('DOMContentLoaded', showOnScroll);



function toggleDetails(id) {
  var element = document.getElementById(id);
  
  if (element.style.display === "block") {
      element.style.display = "none";
  } else {
      element.style.display = "block";
  }
}

// Скролл к нужным услугам
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}



  