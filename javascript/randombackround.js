window.onload = function() {

    var backgrounds = [
      'tiles/background-cat1.png',
      'tiles/background-cat2.png',
      'tiles/background-cat3.png',
      'tiles/background-cat4.png',
      'tiles/background-cat5.png',
      'tiles/background-cat6.png',
      'tiles/background-cat7.png',
      'tiles/background-flower.png'
      
    ];
  
    function getRandomIndex(max) {
      return Math.floor(Math.random() * max);
    }
  
    function getRandomBackground() {
      var currentIndex = localStorage.getItem('backgroundIndex');
      var index = getRandomIndex(backgrounds.length);
  
      while (index === parseInt(currentIndex)) {
        index = getRandomIndex(backgrounds.length);
      }
  
      localStorage.setItem('backgroundIndex', index);
      return backgrounds[index];
    }
  
    function applyRandomBackground() {
      var randomBackground = getRandomBackground();
      document.body.style.backgroundImage = 'url(' + randomBackground + ')';
    }
  
    applyRandomBackground();
  };
  