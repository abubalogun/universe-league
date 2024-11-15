const contestants = [
    { name: "Anyul", team: "Beat", photo: "Anyul.jpg", nationality: "South Korea" },
    { name: "Ayumu", team: "Rhythm", photo: "Ayumu.jpg", nationality: "Japan" },
    { name: "Bae Jaeho", team: "Groove", photo: "Bae-Jaeho.jpg", nationality: "South Korea" },
    { name: "Cha Woongki", team: "Beat", photo: "Cha-Woongki.jpg", nationality: "South Korea" },
    { name: "Chih En", team: "Beat", photo: "Chih-En.jpg", nationality: "Taiwan" },
    { name: "Daisuke", team: "Rhythm", photo: "Daisuke.jpg", nationality: "Japan" },
    { name: "Eito", team: "Rhythm", photo: "Eito.jpg", nationality: "Japan" },
    { name: "Hiroto", team: "Groove", photo: "Hiroto.jpg", nationality: "Japan" },
    { name: "James", team: "Groove", photo: "James.jpg", nationality: "Thailand" },
    { name: "Jang Kyungho", team: "Groove", photo: "Jang-Kyungho.jpg", nationality: "South Korea" },
    { name: "Jin Ziming", team: "Rhythm", photo: "Jin-Ziming.jpg", nationality: "China" },
    { name: "Jiang Fan", team: "Beat", photo: "Jiang-Fan.jpg", nationality: "China" },
    { name: "JL", team: "Rhythm", photo: "JL.jpg", nationality: "Philippines" },
    { name: "Kenta", team: "Groove", photo: "Kenta.jpg", nationality: "Japan" },
    { name: "Keum Jinho", team: "Groove", photo: "Keum-Jinho.jpg", nationality: "South Korea" },
    { name: "Kim Daeyun", team: "Groove", photo: "Kim-Daeyun.jpg", nationality: "South Korea" },
    { name: "Kim Dongyun", team: "Beat", photo: "Kim-Dongyun.jpg", nationality: "South Korea" },
    { name: "Kim Gijoong", team: "Groove", photo: "Kim-Gijoong.jpg", nationality: "South Korea" },
    { name: "Kim Hyotae", team: "Groove", photo: "Kim-Hyotae.jpg", nationality: "South Korea" },
    { name: "Kim Joohyoung", team: "Groove", photo: "Kim-Joohyoung.jpg", nationality: "South Korea" },
    { name: "Koo Hanseo", team: "Beat", photo: "Koo-Hanseo.jpg", nationality: "South Korea" },
    { name: "Kwon Heejun", team: "Groove", photo: "Kwon-Heejun.jpg", nationality: "South Korea" },
    { name: "Li Zhinuo", team: "Beat", photo: "Li-Zhinuo.jpg", nationality: "China" },
    { name: "Li Zhiwei", team: "Groove", photo: "Li-Zhiwei.jpg", nationality: "China" },
    { name: "Mac", team: "Rhythm", photo: "Mac.jpg", nationality: "Thailand" },
    { name: "Nam Doyoon", team: "Beat", photo: "Nam-Doyoon.jpg", nationality: "South Korea" },
    { name: "Park Jihun", team: "Beat", photo: "Park-Jihun.jpg", nationality: "South Korea" },
    { name: "Park Juwon", team: "Rhythm", photo: "Park-Juwon.jpg", nationality: "South Korea" },
    { name: "Park Yeonjun", team: "Beat", photo: "Park-Yeonjun.jpg", nationality: "South Korea" },
    { name: "Park Han", team: "Rhythm", photo: "Park-Han.jpg", nationality: "South Korea" },
    { name: "Royce", team: "Rhythm", photo: "Royce.jpg", nationality: "China" },
    { name: "Seo Jeongwoo", team: "Groove", photo: "Seo-Jeongwoo.jpg", nationality: "South Korea" },
    { name: "Sirin", team: "Rhythm", photo: "Sirin.jpg", nationality: "Thailand" },
    { name: "Steven", team: "Rhythm", photo: "Steven.jpg", nationality: "Australia" },
    { name: "Yeo Gangdong", team: "Groove", photo: "Yeo-Gangdong.jpg", nationality: "South Korea" },
    { name: "Yuito", team: "Beat", photo: "Yuito.jpg", nationality: "Japan" },
    { name: "Zhang Shuaibo", team: "Groove", photo: "Zhang-Shuaibo.jpg", nationality: "China" },
    { name: "Zenzen", team: "Rhythm", photo: "Zenzen.jpg", nationality: "Thailand" }
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

        // Create the name and nationality
        const name = document.createElement("h3");
        name.textContent = contestant.name;
        const nationality = document.createElement("p");
        nationality.textContent = `Nationality: ${contestant.nationality}`;

        // Add the content to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(nationality);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Call the function to render the contestants
document.addEventListener("DOMContentLoaded", renderContestants);
