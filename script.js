document.addEventListener('DOMContentLoaded', async function() {
  const papersContainer = document.getElementById('papers-container');

  // Function to extract sorting key from file name
  function getSortKey(filename) {
    const match = filename.match(/_(s|w)(\d+)_/);
    if (match) {
      // Convert 's' to 0 and 'w' to 1 to ensure Summer comes before Winter
      const seasonCode = match[1] === 's' ? '0' : '1';
      // Return a sort key like '210' for Summer 2021 or '221' for Winter 2021
      return parseInt(match[2] + seasonCode);
    }
    return 9999; // Default sort key for unrecognized patterns
  }

  // Fetch and process paper data
  async function fetchAndDisplayPapers() {
    try {
      const response = await fetch('https://cs-papers.goldenedit.workers.dev/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Parse the response and generate HTML
      ['paper1', 'paper2', 'paper3', 'paper4'].forEach(paper => {
        const qpKey = `assets/qp/${paper}`;
        const msKey = `assets/ms/${paper}`;
        const qpFiles = data[qpKey].sort((a, b) => getSortKey(a) - getSortKey(b));
        const msFiles = data[msKey].sort((a, b) => getSortKey(a) - getSortKey(b));

        const paperSection = document.createElement('section');
        paperSection.id = `${paper}-container`;
        paperSection.className = 'container';

        const heading = document.createElement('h2');
        heading.textContent = `Paper ${paper.replace('paper', '')}`;
        paperSection.appendChild(heading);

        const table = document.createElement('table');
        table.innerHTML = '<tr><th>Question Paper</th><th>Mark Scheme</th></tr>';

        qpFiles.forEach(qpFile => {
          const msFile = msFiles.find(ms => ms.replace('_ms_', '_qp_') === qpFile);
          const qpPath = `/assets/qp/${paper}/${qpFile}`;
          const msPath = msFile ? `/assets/ms/${paper}/${msFile}` : '#';

          const row = document.createElement('tr');
          row.innerHTML = `<td><a href="${qpPath}">${qpFile}</a></td>
                           <td>${msFile ? `<a href="${msPath}">${msFile}</a>` : 'N/A'}</td>`;
          table.appendChild(row);
        });

        paperSection.appendChild(table);
        papersContainer.appendChild(paperSection);
      });
    } catch (error) {
      console.error('Failed to fetch or process data:', error);
      papersContainer.innerHTML = `<p>Error loading papers: ${error.message}</p>`;
    }
  }

  await fetchAndDisplayPapers();

  // Update links and preferences after content is loaded
  setTimeout(() => {
    const links = document.querySelectorAll('a[href$=".pdf"]');
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
      var preferences = getPreferences();
      preferences[targetId] = true;
      savePreferences(preferences);
      applyPreferences(preferences);
    }

    function getPreferences() {
      return JSON.parse(localStorage.getItem('examResourcesPreferences') || '{}');
    }

    function savePreferences(preferences) {
      localStorage.setItem('examResourcesPreferences', JSON.stringify(preferences));
    }

    function applyPreferences(preferences) {
      links.forEach(link => {
        if (preferences[link.getAttribute('href')]) {
          link.classList.add('selected');
        } else {
          link.classList.remove('selected');
        }
      });
    }

    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
      var preferences = {};
      savePreferences(preferences);
      applyPreferences(preferences);
    });
  }, 1000);
});
