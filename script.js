// Fetch the Google Sheets CSV data
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR8dXmESFi1XT4fA_cIYURG5Iz_gD6oH-NAta9mR_e1VHJENMWtvf9YsJO4CkjTbjWDgXQ9eGZXQKAA/pub?gid=0&single=true&output=csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        rows.forEach((row, index) => {
            if (index === 0) return; // Skip the header row
            const [name, age, year, nationality, photoPath, team] = row.split(',');

            // Determine the team class
            let teamClass = '';
            if (team.trim() === 'Rhythm') teamClass = 'rhythm';
            else if (team.trim() === 'Beat') teamClass = 'beat';
            else if (team.trim() === 'Groove') teamClass = 'groove';

            // Create a contestant card
            const card = document.createElement('div');
            card.className = `contestant-card ${teamClass}`;
            card.draggable = true; // Enable drag-and-drop
            card.innerHTML = `
                <img src="${photoPath.trim()}" alt="${name}" class="contestant-photo">
                <h3>${name}</h3>
                <p>Age: ${age}</p>
                <p>Year of Birth: ${year}</p>
                <p>Nationality: ${nationality.trim()}</p>
                <p>Team: ${team.trim()}</p>
            `;
            document.getElementById('contestants').appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));
