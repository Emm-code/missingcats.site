window.onload = function() {

    var backgrounds = [
      'tiles/moneytile1.png',
      'tiles/moneytile2.png',
      'tiles/moneytile3.png'
      
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
  