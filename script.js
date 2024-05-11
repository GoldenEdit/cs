document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and display files
    async function displayFiles(paperType, containerId) {
      const qpResponse = await fetch(`/assets/qp/${paperType}`);
      const msResponse = await fetch(`/assets/ms/${paperType}`);

      const qpFiles = await qpResponse.json();
      const msFiles = await msResponse.json();

      const qpContainer = document.querySelector(`#${containerId} .question-papers`);
      const msContainer = document.querySelector(`#${containerId} .mark-schemes`);

      qpFiles.forEach(file => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `/assets/qp/${paperType}/${file}`;
          a.textContent = file;
          li.appendChild(a);
          qpContainer.appendChild(li);
      });

      msFiles.forEach(file => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `/assets/ms/${paperType}/${file}`;
          a.textContent = file;
          li.appendChild(a);
          msContainer.appendChild(li);
      });
  }

  // Populate papers and mark schemes for each paper type
  ['paper1', 'paper2', 'paper3', 'paper4'].forEach(paperType => {
      displayFiles(paperType, `${paperType}-container`);
  });
  
    var links = document.querySelectorAll('a[href$=".pdf"]');
  
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
      var targetId = this.getAttribute('href');
  
      // Save the user's preference
      var preferences = getPreferences();
      preferences[targetId] = true;
      savePreferences(preferences);
  
      applyPreferences(preferences);
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
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', handleClearClick);
  
    function handleClearClick() {
      var preferences = getPreferences();
      preferences = {};
      savePreferences(preferences);
      applyPreferences(preferences);
    }
    
  });


  
  