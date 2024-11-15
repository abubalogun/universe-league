// Function to fetch and display contestant data
async function loadContestants() {
    // Fetch the contestant data from the Google Apps Script API
    const response = await fetch('https://script.google.com/macros/s/AKfycbzNM3f2eYsZfCcDf9b2zHPQVsBJ0_ye50iO0gLU2imQHsYzKgW_TYBrgDeKMsg4TlCO/exec'); // Replace with your Google Apps Script URL
    const contestants = await response.json();
    const tableBody = document.querySelector('#contestants-table tbody');
    
    // Clear existing rows in the table (if any)
    tableBody.innerHTML = '';

    // Populate the table with fetched data
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

// Call the function to load data when the page is ready
document.addEventListener('DOMContentLoaded', loadContestants);

