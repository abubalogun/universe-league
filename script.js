document.addEventListener("DOMContentLoaded", () => {
    const contestants = [
        { name: "Ayumu", nationality: "Japan", photo: "images/ayumu.jpg", team: "Rhythm" },
        { name: "Cha Woongki", nationality: "South Korea", photo: "images/cha-woongki.jpg", team: "Rhythm" },
        { name: "Daisuke", nationality: "Japan", photo: "images/daisuke.jpg", team: "Rhythm" },
        { name: "Eito", nationality: "Japan", photo: "images/eito.jpg", team: "Rhythm" },
        { name: "Jin Ziming", nationality: "China", photo: "images/jin-ziming.jpg", team: "Rhythm" },
        { name: "JL", nationality: "South Korea", photo: "images/jl.jpg", team: "Rhythm" },
        { name: "Xie Yuxin", nationality: "China", photo: "images/xie-yuxin.jpg", team: "Rhythm" },
        { name: "Kwon Heejun", nationality: "South Korea", photo: "images/kwon-heejun.jpg", team: "Rhythm" },
        { name: "Mac", nationality: "China", photo: "images/mac.jpg", team: "Rhythm" },
        { name: "Park Juwon", nationality: "South Korea", photo: "images/park-juwon.jpg", team: "Rhythm" },
        { name: "Royce", nationality: "South Korea", photo: "images/royce.jpg", team: "Rhythm" },
        { name: "Sirin", nationality: "South Korea", photo: "images/sirin.jpg", team: "Rhythm" },
        { name: "Steven", nationality: "South Korea", photo: "images/steven.jpg", team: "Rhythm" },
        { name: "Zhang Shuaibo", nationality: "China", photo: "images/zhang-shuaibo.jpg", team: "Rhythm" },

        { name: "Bae Jaeho", nationality: "South Korea", photo: "images/bae-jaeho.jpg", team: "Groove" },
        { name: "He Junjin", nationality: "South Korea", photo: "images/he-junjin.jpg", team: "Groove" },
        { name: "Hiroto", nationality: "Japan", photo: "images/hiroto.jpg", team: "Groove" },
        { name: "James", nationality: "South Korea", photo: "images/james.jpg", team: "Groove" },
        { name: "Jang Kyungho", nationality: "South Korea", photo: "images/jang-kyungho.jpg", team: "Groove" },
        { name: "Kenta", nationality: "Japan", photo: "images/kenta.jpg", team: "Groove" },
        { name: "Kim Daeyun", nationality: "South Korea", photo: "images/kim-daeyun.jpg", team: "Groove" },
        { name: "Kim Gijoong", nationality: "South Korea", photo: "images/kim-gijoong.jpg", team: "Groove" },
        { name: "Kim Joohyoung", nationality: "South Korea", photo: "images/kim-joohyoung.jpg", team: "Groove" },
        { name: "Li Zhiwei", nationality: "China", photo: "images/li-zhiwei.jpg", team: "Groove" },
        { name: "Parkhan", nationality: "South Korea", photo: "images/parkhan.jpg", team: "Groove" },
        { name: "Seo Jeongwoo", nationality: "South Korea", photo: "images/seo-jeongwoo.jpg", team: "Groove" },
        { name: "Yeo Gangdong", nationality: "South Korea", photo: "images/yeo-gangdong.jpg", team: "Groove" },
        { name: "Zenzen", nationality: "China", photo: "images/zenzen.jpg", team: "Groove" },

        { name: "Anyul", nationality: "South Korea", photo: "images/anyul.jpg", team: "Beat" },
        { name: "Cha Woongki", nationality: "South Korea", photo: "images/cha-woongki.jpg", team: "Beat" },
        { name: "Chih En", nationality: "Taiwan", photo: "images/chih-en.jpg", team: "Beat" },
        { name: "Jiang Fan", nationality: "China", photo: "images/jiang-fan.jpg", team: "Beat" },
        { name: "Keum Jinho", nationality: "South Korea", photo: "images/keum-jinho.jpg", team: "Beat" },
        { name: "Kim Dongyun", nationality: "South Korea", photo: "images/kim-dongyun.jpg", team: "Beat" },
        { name: "Kim Hyotae", nationality: "South Korea", photo: "images/kim-hyotae.jpg", team: "Beat" },
        { name: "Koo Hanseo", nationality: "South Korea", photo: "images/koo-hanseo.jpg", team: "Beat" },
        { name: "Li Zhinuo", nationality: "China", photo: "images/li-zhinuo.jpg", team: "Beat" },
        { name: "Nam Doyoon", nationality: "South Korea", photo: "images/nam-doyoon.jpg", team: "Beat" },
        { name: "Park Jihun", nationality: "South Korea", photo: "images/park-jihun.jpg", team: "Beat" },
        { name: "Park Yeonjun", nationality: "South Korea", photo: "images/park-yeonjun.jpg", team: "Beat" },
        { name: "Kang Junhyuk", nationality: "South Korea", photo: "images/kang-junhyuk.jpg", team: "Beat" },
        { name: "Yuito", nationality: "Japan", photo: "images/yuito.jpg", team: "Beat" }
    ];

    const contestantList = document.getElementById("contestantList");
    const rankingSpots = document.querySelectorAll(".ranking-spot");

    // Dynamically generate contestant profiles
    contestants.forEach((contestant, index) => {
        const contestantDiv = document.createElement("div");
        contestantDiv.classList.add("contestant", contestant.team.toLowerCase());
        contestantDiv.draggable = true;
        contestantDiv.innerHTML = `
            <img src="${contestant.photo}" alt="${contestant.name}">
            <div>
                <h4>${contestant.name}</h4>
                <p>${contestant.nationality}</p>
            </div>
        `;
        
        contestantDiv.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", index);
        });

        contestantList.appendChild(contestantDiv);
    });

    // Allow contestant to be dropped into ranking spots
    rankingSpots.forEach(spot => {
        spot.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        spot.addEventListener("drop", (e) => {
            e.preventDefault();
            const contestantIndex = e.dataTransfer.getData("text");
            const spotRank = spot.getAttribute("data-rank");

            // Place the contestant in the correct spot
            const contestant = contestants[contestantIndex];
            spot.innerHTML = `
                <img src="${contestant.photo}" alt="${contestant.name}">
                <h4>${contestant.name}</h4>
                <p>${contestant.nationality}</p>
            `;

            // Make sure the 1st pick spot is highlighted
            if (spotRank == "1") {
                spot.classList.add("top-spot");
            }
        });
    });

    // Save rankings to localStorage
    document.getElementById("saveRanking").addEventListener("click", () => {
        const rankings = Array.from(rankingSpots).map(spot => {
            return spot.querySelector("h4") ? spot.querySelector("h4").textContent : null;
        }).filter(name => name);

        localStorage.setItem("ranking", JSON.stringify(rankings));
        alert("Ranking saved!");
    });

    // Download ranking as an image (using html2canvas)
    document.getElementById("downloadImage").addEventListener("click", () => {
        html2canvas(document.body).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'ranking.png';
            link.click();
        });
    });
});
