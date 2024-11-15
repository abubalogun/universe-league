// Contestant data stored directly in JavaScript
const contestants = [
    { name: "Ayumu", age: 20, year: 2004, nationality: "Japan", photo: "images/ayumu.jpg", team: "Rhythm" },
    { name: "Daisuke", age: 14, year: 2009, nationality: "Japan", photo: "images/daisuke.jpg", team: "Rhythm" },
    { name: "Bae Jaeho", age: 16, year: 2008, nationality: "South Korea", photo: "images/bae-jaeho.jpg", team: "Groove" },
    { name: "He Junjin", age: 19, year: 2005, nationality: "China", photo: "images/he-junjin.jpg", team: "Groove" },
    { name: "Anyul", age: 14, year: 2010, nationality: "South Korea", photo: "images/anyul.jpg", team: "Beat" },
    { name: "Cha Woongki", age: 22, year: 2002, nationality: "South Korea", photo: "images/cha-woongki.jpg", team: "Beat" },
    { name: "Chih En", age: 18, year: 2006, nationality: "Taiwan", photo: "images/chih-en.jpg", team: "Beat" },
    // Add more contestants as needed
];

// Function to dynamically populate the table with contestant data
function loadContestants() {
    const tableBody = document.querySelector('#contestants-table tbody');
    tableBody.innerHTML = ''; // Clear any existing data

    contestants.forEach(contestant => {
        const row = document.createElement('tr');
        
        // Assign team classes to row for color coding
        let teamClass = '';
        if (contestant.team === 'Rhythm') {
            teamClass = 'team-rhythm';
        } else if (contestant.team === 'Beat') {
            teamClass = 'team-beat';
        } else if (contestant.team === 'Groove') {
            teamClass = 'team-groove';
        }

        row.innerHTML = `
            <td>${contestant.name}</td>
            <td>${contestant.age}</td>
            <td>${contestant.year}</td>
            <td>${contestant.nationality}</td>
            <td><img src="${contestant.photo}" alt="${contestant.name}" class="contestant-photo" /></td>
            <td class="${teamClass}">${contestant.team}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load contestants when the page is ready
document.addEventListener('DOMContentLoaded', loadContestants);
