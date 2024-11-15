async function loadContestants() {
    const contestants = [
        {
            "name": "Ayumu",
            "age": 20,
            "year": 2004,
            "nationality": "Japan",
            "photo": "path_to_image.jpg",
            "team": "Rhythm"
        },
        {
            "name": "Daisuke",
            "age": 14,
            "year": 2009,
            "nationality": "Japan",
            "photo": "path_to_image.jpg",
            "team": "Rhythm"
        }
        // Add more contestants here for testing
    ];

    const tableBody = document.querySelector('#contestants-table tbody');
    tableBody.innerHTML = '';

    contestants.forEach(contestant => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contestant.name}</td>
            <td>${contestant.age}</td>
            <td>${contestant.year}</td>
            <td>${contestant.nationality}</td>
            <td><img src="${contestant.photo}" alt="${contestant.name}" class="contestant-photo" /></td>
            <td>${contestant.team}</td>
        `;
        tableBody.appendChild(row);
    });
}


