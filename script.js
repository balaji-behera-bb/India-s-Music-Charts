const songs = [
  { title: "Shararat", artist: "Shashwat Sachdev" },
  { title: "Dil Lagana Mana Tha", artist: "Krish Mondal" },
  { title: "Teri Yado Ki Chadar Odhe", artist: "Tarun Chaudhary" },
  { title: "Pal Pal", artist: "Afusic" },
  { title: "Gehra Hua", artist: "Shashwat Sachdev" },
  { title: "Fortuner", artist: "Raj Mawar" },
  { title: "Aawaara Angaara", artist: "A. R. Rahman" },
  { title: "Ghar Kab Aaoge", artist: "Anu Malik" },
  { title: "Sahiba", artist: "Aditya Rikhari" },
  { title: "Bagdo", artist: "Raj Mawar" },
  { title: "Hanuman Chalisa", artist: "Hariharan" },
  { title: "Saiyaara", artist: "Faheem Abdullah" },
  { title: "Laal Pari", artist: "Housefull 5" },
  { title: "Arz Kiya Hai", artist: "Anuv Jain" },
  { title: "FA9LA", artist: "Various Artists" },
  { title: "Uyi Amma", artist: "Film track" },
  { title: "Name Chale", artist: "Haryanvi track" },
  { title: "Kanimaa", artist: "Santhosh Narayanan" },
  { title: "Ghafoor", artist: "Shashwat Sachdev" },
  { title: "Shaky", artist: "Sanju Rathod" },
  { title: "Love Hangover", artist: "Jennie & Dominic Fike" },
  { title: "APT.", artist: "Rosé & Bruno Mars" },
  { title: "Soda Pop", artist: "KPop Demon Hunters" },
  { title: "Golden", artist: "KPop Demon Hunters" },
  { title: "Dreamers", artist: "Jungkook" },
  { title: "Angaaron", artist: "Pushpa 2" },
  { title: "Kissamik", artist: "Pushpa 2" },
  { title: "Pushpa Pushpa", artist: "Pushpa 2" },
  { title: "Jaane Tu", artist: "Chhaava" },
  { title: "Aaj Ki Raat", artist: "Stree 2" },
  { title: "Really Like You", artist: "BABYMONSTER" },
  { title: "SUPA DUPA LUV", artist: "BABYMONSTER" },
  { title: "Maleket Gamal El Kon", artist: "Tamer Hosny & Al Shami" },
  { title: "Chella Magale", artist: "Jana Nayagan" },
  { title: "Mega Victory Mass", artist: "Mana ShankaraVaraPrasad Garu" },
  { title: "Internet Girl", artist: "KATSEYE" },
  { title: "Midnight Sun", artist: "Zara Larsson" },
  { title: "Aperture", artist: "Harry Styles" },
  { title: "Stateside", artist: "PinkPantheress & Zara Larsson" },
  { title: "Do It (Yves Remix)", artist: "Underscores" },
  { title: "HYPNOTIZE", artist: "XG" },
  { title: "Delulu", artist: "KiiiKiii" },
  { title: "404 (New Era)", artist: "KiiiKiii" },
  { title: "So Easy (To Fall In Love)", artist: "Olivia Dean" },
  { title: "Born Again", artist: "Lisa ft. Doja Cat & RAYE" },
  { title: "Earthquake", artist: "Jisoo" },
  { title: "Billionaire", artist: "BABYMONSTER" },
  { title: "The Stranger", artist: "ONF" },
  { title: "Almond Chocolate", artist: "ILLIT" },
  { title: "Love, Afraid", artist: "MADEIN" }
];

const chart = document.getElementById("chartList");

songs.forEach((song, index) => {
  const position = index + 1;

  const card = document.createElement("div");
  card.className = "chart-card";

  const imgURL = `https://itunes.apple.com/search?term=${encodeURIComponent(song.title + " " + song.artist)}&limit=1`;

  fetch(imgURL)
    .then(res => res.json())
    .then(data => {
      const artwork = data.results[0]?.artworkUrl100 || "https://via.placeholder.com/60";
      buildCard(artwork);
    })
    .catch(() => buildCard("https://via.placeholder.com/60"));

  function buildCard(artwork) {
    card.innerHTML = `
      <div class="card-left">
        <div class="rank">${position}</div>
        <img class="cover" src="${artwork}">
        <div class="song-info">
          <div class="song-title">${song.title}</div>
          <div>${song.artist}</div>
        </div>
      </div>
      <div class="stats">
        NEW<br>
        Peak: ${position}<br>
        Weeks: 1
      </div>
    `;
    chart.appendChild(card);

    if (position === 1) {
      document.getElementById("topSongTitle").textContent = song.title;
      document.getElementById("topSongArtist").textContent = song.artist;
      document.getElementById("topSongImg").src = artwork;

      document.getElementById("gainerTitle").textContent = song.title;
      document.getElementById("gainerArtist").textContent = song.artist;
      document.getElementById("gainerImg").src = artwork;
    }
  }
});
