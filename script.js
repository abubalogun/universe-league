const contestants = [
    { name: "Anyul", year: 2000, team: "Beat", photo: "Anyul.jpg", nationality: "South Korea" },
    { name: "Ayumu", year: 2001, team: "Rhythm", photo: "Ayumu.jpg", nationality: "Japan" },
    { name: "Bae Jaeho", year: 2002, team: "Groove", photo: "Bae-Jaeho.jpg", nationality: "South Korea" },
    { name: "Cha Woongki", year: 2000, team: "Beat", photo: "Cha-Woongki.jpg", nationality: "South Korea" },
    { name: "Chih En", year: 2001, team: "Beat", photo: "Chih-En.jpg", nationality: "Taiwan" },
    { name: "Daisuke", year: 2000, team: "Rhythm", photo: "Daisuke.jpg", nationality: "Japan" },
    { name: "Eito", year: 2002, team: "Rhythm", photo: "Eito.jpg", nationality: "Japan" },
    { name: "Hiroto", year: 2000, team: "Groove", photo: "Hiroto.jpg", nationality: "Japan" },
    { name: "James", year: 1999, team: "Groove", photo: "James.jpg", nationality: "Thailand" },
    { name: "Jang Kyungho", year: 2001, team: "Groove", photo: "Jang-Kyungho.jpg", nationality: "South Korea" },
    { name: "Jin Ziming", year: 2000, team: "Rhythm", photo: "Jin-Ziming.jpg", nationality: "China" },
    { name: "Jiang Fan", year: 1998, team: "Beat", photo: "Jiang-Fan.jpg", nationality: "China" },
    { name: "JL", year: 2001, team: "Rhythm", photo: "JL.jpg", nationality: "Philippines" },
    { name: "Kenta", year: 2000, team: "Groove", photo: "Kenta.jpg", nationality: "Japan" },
    { name: "Keum Jinho", year: 2002, team: "Groove", photo: "Keum-Jinho.jpg", nationality: "South Korea" },
    { name: "Kim Daeyun", year: 2001, team: "Groove", photo: "Kim-Daeyun.jpg", nationality: "South Korea" },
    { name: "Kim Dongyun", year: 2000, team: "Beat", photo: "Kim-Dongyun.jpg", nationality: "South Korea" },
    { name: "Kim Gijoong", year: 2000, team: "Groove", photo: "Kim-Gijoong.jpg", nationality: "South Korea" },
    { name: "Kim Hyotae", year: 2001, team: "Groove", photo: "Kim-Hyotae.jpg", nationality: "South Korea" },
    { name: "Kim Joohyoung", year: 2001, team: "Groove", photo: "Kim-Joohyoung.jpg", nationality: "South Korea" },
    { name: "Koo Hanseo", year: 2001, team: "Beat", photo: "Koo-Hanseo.jpg", nationality: "South Korea" },
    { name: "Kwon Heejun", year: 1999, team: "Groove", photo: "Kwon-Heejun.jpg", nationality: "South Korea" },
    { name: "Li Zhinuo", year: 2000, team: "Beat", photo: "Li-Zhinuo.jpg", nationality: "China" },
    { name: "Li Zhiwei", year: 2001, team: "Groove", photo: "Li-Zhiwei.jpg", nationality: "China" },
    { name: "Mac", year: 2002, team: "Rhythm", photo: "Mac.jpg", nationality: "Thailand" },
    { name: "Nam Doyoon", year: 2000, team: "Beat", photo: "Nam-Doyoon.jpg", nationality: "South Korea" },
    { name: "Park Jihun", year: 2001, team: "Beat", photo: "Park-Jihun.jpg", nationality: "South Korea" },
    { name: "Park Juwon", year: 2002, team: "Rhythm", photo: "Park-Juwon.jpg", nationality: "South Korea" },
    { name: "Park Yeonjun", year: 2000, team: "Beat", photo: "Park-Yeonjun.jpg", nationality: "South Korea" },
    { name: "Park Han", year: 2001, team: "Rhythm", photo: "Park-Han.jpg", nationality: "South Korea" },
    { name: "Royce", year: 1999, team: "Rhythm", photo: "Royce.jpg", nationality: "China" },
    { name: "Seo Jeongwoo", year: 2000, team: "Groove", photo: "Seo-Jeongwoo.jpg", nationality: "South Korea" },
    { name: "Sirin", year: 2001, team: "Rhythm", photo: "Sirin.jpg", nationality: "Thailand" },
    { name: "Steven", year: 2000, team: "Rhythm", photo: "Steven.jpg", nationality: "Australia" },
    { name: "Yeo Gangdong", year: 1999, team: "Groove", photo: "Yeo-Gangdong.jpg", nationality: "South Korea" },
    { name: "Yuito", year: 2001, team: "Beat", photo: "Yuito.jpg", nationality: "Japan" },
    { name: "Zhang Shuaibo", year: 2000, team: "Groove", photo: "Zhang-Shuaibo.jpg", nationality: "China" },
    { name: "Zen Zen", year: 2000, team: "Rhythm", photo: "Zen-Zen.jpg", nationality: "Thailand" }
];

// Function to render contestant cards on the page
function renderContestants() {
    const container = document.getElementById("contestant-container");
    contestants.forEach(contestant => {
        const card = document.createElement("div");
        card.classList.add("contestant-card", contestant.team);

        // Create the image for each contestant
        const image = document.createElement("img");
        image.src = `images/${contestant.photo}`;
        image.alt = `${contestant.name}'s photo`;

        // Create the name, year, and nationality
        const name = document.createElement("h3");
        name.textContent = contestant.name;
        const year = document.createElement("p");
        year.textContent = `Year of Birth: ${contestant.year}`;
        const nationality = document.createElement("p");
        nationality.textContent = `Nationality: ${contestant.nationality}`;

        // Add the content to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(year);
        card.appendChild(nationality);

        // Add a ring around the photo to indicate team
        const ring = document.createElement("div");
        ring.classList.add("team-ring", contestant.team.toLowerCase());
        card.appendChild(ring);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Call the function to render the contestants
document.addEventListener("DOMContentLoaded", renderContestants);
