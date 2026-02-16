// IM Charts Top 50 – Auto cover fetch enabled
// Edit this list weekly only

const songs = [
  { position: 1, title: "Shararat", artist: "Shashwat Sachdev", movement: "new", peak: 1, weeks: 1 },
  { position: 2, title: "Dil Lagana Mana Tha", artist: "Krish Mondal", movement: "new", peak: 2, weeks: 1 },
  { position: 3, title: "Teri Yado Ki Chadar Odhe", artist: "Tarun Chaudhary", movement: "new", peak: 3, weeks: 1 },
  { position: 4, title: "Pal Pal", artist: "Afusic", movement: "new", peak: 4, weeks: 1 },
  { position: 5, title: "Gehra Hua", artist: "Shashwat Sachdev", movement: "new", peak: 5, weeks: 1 },
  { position: 6, title: "Fortuner", artist: "Raj Mawar", movement: "new", peak: 6, weeks: 1 },
  { position: 7, title: "Aawaara Angaara", artist: "A. R. Rahman", movement: "new", peak: 7, weeks: 1 },
  { position: 8, title: "Ghar Kab Aaoge", artist: "Anu Malik", movement: "new", peak: 8, weeks: 1 },
  { position: 9, title: "Sahiba", artist: "Aditya Rikhari", movement: "new", peak: 9, weeks: 1 },
  { position: 10, title: "Bagdo", artist: "Raj Mawar", movement: "new", peak: 10, weeks: 1 },
  { position: 11, title: "Hanuman Chalisa", artist: "Hariharan", movement: "new", peak: 11, weeks: 1 },
  { position: 12, title: "Saiyaara", artist: "Faheem Abdullah", movement: "new", peak: 12, weeks: 1 },
  { position: 13, title: "Laal Pari", artist: "Housefull 5", movement: "new", peak: 13, weeks: 1 },
  { position: 14, title: "Arz Kiya Hai", artist: "Anuv Jain", movement: "new", peak: 14, weeks: 1 },
  { position: 15, title: "FA9LA", artist: "Various Artists", movement: "new", peak: 15, weeks: 1 },
  { position: 16, title: "Uyi Amma", artist: "Film track", movement: "new", peak: 16, weeks: 1 },
  { position: 17, title: "Name Chale", artist: "Haryanvi track", movement: "new", peak: 17, weeks: 1 },
  { position: 18, title: "Kanimaa", artist: "Santhosh Narayanan", movement: "new", peak: 18, weeks: 1 },
  { position: 19, title: "Ghafoor", artist: "Shashwat Sachdev", movement: "new", peak: 19, weeks: 1 },
  { position: 20, title: "Shaky", artist: "Sanju Rathod", movement: "new", peak: 20, weeks: 1 },
  { position: 21, title: "Love Hangover", artist: "Jennie & Dominic Fike", movement: "new", peak: 21, weeks: 1 },
  { position: 22, title: "APT.", artist: "Rosé & Bruno Mars", movement: "new", peak: 22, weeks: 1 },
  { position: 23, title: "Soda Pop", artist: "KPop Demon Hunters", movement: "new", peak: 23, weeks: 1 },
  { position: 24, title: "Golden", artist: "KPop Demon Hunters", movement: "new", peak: 24, weeks: 1 },
  { position: 25, title: "Dreamers", artist: "Jungkook", movement: "new", peak: 25, weeks: 1 },
  { position: 26, title: "Angaaron", artist: "Pushpa 2", movement: "new", peak: 26, weeks: 1 },
  { position: 27, title: "Kissik", artist: "Pushpa 2", movement: "new", peak: 27, weeks: 1 },
  { position: 28, title: "Pushpa Pushpa", artist: "Pushpa 2", movement: "new", peak: 28, weeks: 1 },
  { position: 29, title: "Jaane Tu", artist: "Chhaava", movement: "new", peak: 29, weeks: 1 },
  { position: 30, title: "Aaj Ki Raat", artist: "Stree 2", movement: "new", peak: 30, weeks: 1 },
  { position: 31, title: "Really Like You", artist: "BABYMONSTER", movement: "new", peak: 31, weeks: 1 },
  { position: 32, title: "SUPA DUPA LUV", artist: "BABYMONSTER", movement: "new", peak: 32, weeks: 1 },
  { position: 33, title: "Maleket Gamal El Kon", artist: "Tamer Hosny & Al Shami", movement: "new", peak: 33, weeks: 1 },
  { position: 34, title: "Chella Magale", artist: "Jana Nayagan", movement: "new", peak: 34, weeks: 1 },
  { position: 35, title: "Mega Victory Mass", artist: "Mana ShankaraVaraPrasad Garu", movement: "new", peak: 35, weeks: 1 },
  { position: 36, title: "Internet Girl", artist: "KATSEYE", movement: "new", peak: 36, weeks: 1 },
  { position: 37, title: "Midnight Sun", artist: "Zara Larsson", movement: "new", peak: 37, weeks: 1 },
  { position: 38, title: "Aperture", artist: "Harry Styles", movement: "new", peak: 38, weeks: 1 },
  { position: 39, title: "Stateside", artist: "PinkPantheress & Zara Larsson", movement: "new", peak: 39, weeks: 1 },
  { position: 40, title: "Do It (Yves Remix)", artist: "Underscores", movement: "new", peak: 40, weeks: 1 },
  { position: 41, title: "HYPNOTIZE", artist: "XG", movement: "new", peak: 41, weeks: 1 },
  { position: 42, title: "Delulu", artist: "KiiiKiii", movement: "new", peak: 42, weeks: 1 },
  { position: 43, title: "404 (New Era)", artist: "KiiiKiii", movement: "new", peak: 43, weeks: 1 },
  { position: 44, title: "So Easy (To Fall In Love)", artist: "Olivia Dean", movement: "new", peak: 44, weeks: 1 },
  { position: 45, title: "Born Again", artist: "Lisa ft. Doja Cat & RAYE", movement: "new", peak: 45, weeks: 1 },
  { position: 46, title: "Earthquake", artist: "Jisoo", movement: "new", peak: 46, weeks: 1 },
  { position: 47, title: "Billionaire", artist: "BABYMONSTER", movement: "new", peak: 47, weeks: 1 },
  { position: 48, title: "The Stranger", artist: "ONF", movement: "new", peak: 48, weeks: 1 },
  { position: 49, title: "Almond Chocolate", artist: "ILLIT", movement: "new", peak: 49, weeks: 1 },
  { position: 50, title: "Love, Afraid", artist: "MADEIN", movement: "new", peak: 50, weeks: 1 }
];

const container = document.getElementById("chartContainer");
const topSongText = document.getElementById("topSongText");

async function fetchCover(song, artist) {
  try {
    const query = encodeURIComponent(song + " " + artist);
    const url = `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].artworkUrl100;
    }
  } catch (e) {
    console.log("Cover fetch failed:", song);
  }
  return "https://via.placeholder.com/60";
}

async function renderChart() {
  for (const song of songs) {
    const cover = await fetchCover(song.title, song.artist);

    const card = document.createElement("div");
    card.className = "chart-card";

    card.innerHTML = `
      <div class="position">${song.position}</div>
      <img class="cover" src="${cover}" />
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div>${song.artist}</div>
      </div>
      <div class="stats">
        <div>NEW</div>
        <div>Peak: ${song.peak}</div>
        <div>Weeks: ${song.weeks}</div>
      </div>
    `;

    container.appendChild(card);
  }

  if (songs.length > 0 && topSongText) {
    topSongText.textContent = songs[0].title + " – " + songs[0].artist;
  }
}

renderChart();
