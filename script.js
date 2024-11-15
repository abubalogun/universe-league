fetch('YOUR_CSV_LINK')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        rows.forEach((row, index) => {
            if (index === 0) return; // Skip header row
            const [name, age, dob, photoPath, team] = row.split(',');

            // Determine the team class
            let teamClass = '';
            if (team.trim() === 'Rhythm') teamClass = 'rhythm';
            else if (team.trim() === 'Beat') teamClass = 'beat';
            else if (team.trim() === 'Groove') teamClass = 'groove';

            // Create a contestant card
            const card = document.createElement('div');
            card.className = `contestant-card ${teamClass}`;
            card.draggable = true;
            card.innerHTML = `
                <img src="${photoPath.trim()}" alt="${name}" class="contestant-photo">
                <h3>${name}</h3>
                <p>Age: ${age}</p>
                <p>Date of Birth: ${dob}</p>
                <p>Team: ${team.trim()}</p>
            `;
            document.getElementById('contestants').appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));
