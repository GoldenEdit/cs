document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    // Check if the user has any saved preferences
    var savedPreferences = localStorage.getItem('examResourcesPreferences');
    if (savedPreferences) {
      var preferences = JSON.parse(savedPreferences);
      applyPreferences(preferences);
    }
    
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handleLinkClick);
    }
    
    function handleLinkClick(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
  
        // Save the user's preference
        var preferences = getPreferences();
        preferences[targetId] = true;
        savePreferences(preferences);
  
        applyPreferences(preferences);
      }
    }
    
    function getPreferences() {
      var preferences = localStorage.getItem('examResourcesPreferences');
      if (preferences) {
        return JSON.parse(preferences);
      }
      return {};
    }
    
    function savePreferences(preferences) {
      localStorage.setItem('examResourcesPreferences', JSON.stringify(preferences));
    }
    
    function applyPreferences(preferences) {
      for (var i = 0; i < links.length; i++) {
        var targetId = links[i].getAttribute('href');
        if (preferences[targetId]) {
          links[i].classList.add('selected');
        } else {
          links[i].classList.remove('selected');
        }
      }
    }
  });
  