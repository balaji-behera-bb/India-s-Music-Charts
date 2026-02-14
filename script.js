// EDIT THIS LIST WEEKLY
const songs = [
  { position: 1, title: "Song 1", artist: "Artist 1", movement: "new", peak: 1, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 2, title: "Song 2", artist: "Artist 2", movement: "new", peak: 2, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 3, title: "Song 3", artist: "Artist 3", movement: "new", peak: 3, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 4, title: "Song 4", artist: "Artist 4", movement: "new", peak: 4, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 5, title: "Song 5", artist: "Artist 5", movement: "new", peak: 5, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 6, title: "Song 6", artist: "Artist 6", movement: "new", peak: 6, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 7, title: "Song 7", artist: "Artist 7", movement: "new", peak: 7, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 8, title: "Song 8", artist: "Artist 8", movement: "new", peak: 8, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 9, title: "Song 9", artist: "Artist 9", movement: "new", peak: 9, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 10, title: "Song 10", artist: "Artist 10", movement: "new", peak: 10, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 11, title: "Song 11", artist: "Artist 11", movement: "new", peak: 11, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 12, title: "Song 12", artist: "Artist 12", movement: "new", peak: 12, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 13, title: "Song 13", artist: "Artist 13", movement: "new", peak: 13, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 14, title: "Song 14", artist: "Artist 14", movement: "new", peak: 14, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 15, title: "Song 15", artist: "Artist 15", movement: "new", peak: 15, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 16, title: "Song 16", artist: "Artist 16", movement: "new", peak: 16, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 17, title: "Song 17", artist: "Artist 17", movement: "new", peak: 17, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 18, title: "Song 18", artist: "Artist 18", movement: "new", peak: 18, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 19, title: "Song 19", artist: "Artist 19", movement: "new", peak: 19, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 20, title: "Song 20", artist: "Artist 20", movement: "new", peak: 20, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 21, title: "Song 21", artist: "Artist 21", movement: "new", peak: 21, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 22, title: "Song 22", artist: "Artist 22", movement: "new", peak: 22, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 23, title: "Song 23", artist: "Artist 23", movement: "new", peak: 23, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 24, title: "Song 24", artist: "Artist 24", movement: "new", peak: 24, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 25, title: "Song 25", artist: "Artist 25", movement: "new", peak: 25, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 26, title: "Song 26", artist: "Artist 26", movement: "new", peak: 26, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 27, title: "Song 27", artist: "Artist 27", movement: "new", peak: 27, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 28, title: "Song 28", artist: "Artist 28", movement: "new", peak: 28, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 29, title: "Song 29", artist: "Artist 29", movement: "new", peak: 29, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 30, title: "Song 30", artist: "Artist 30", movement: "new", peak: 30, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 31, title: "Song 31", artist: "Artist 31", movement: "new", peak: 31, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 32, title: "Song 32", artist: "Artist 32", movement: "new", peak: 32, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 33, title: "Song 33", artist: "Artist 33", movement: "new", peak: 33, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 34, title: "Song 34", artist: "Artist 34", movement: "new", peak: 34, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 35, title: "Song 35", artist: "Artist 35", movement: "new", peak: 35, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 36, title: "Song 36", artist: "Artist 36", movement: "new", peak: 36, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 37, title: "Song 37", artist: "Artist 37", movement: "new", peak: 37, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 38, title: "Song 38", artist: "Artist 38", movement: "new", peak: 38, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 39, title: "Song 39", artist: "Artist 39", movement: "new", peak: 39, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 40, title: "Song 40", artist: "Artist 40", movement: "new", peak: 40, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 41, title: "Song 41", artist: "Artist 41", movement: "new", peak: 41, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 42, title: "Song 42", artist: "Artist 42", movement: "new", peak: 42, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 43, title: "Song 43", artist: "Artist 43", movement: "new", peak: 43, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 44, title: "Song 44", artist: "Artist 44", movement: "new", peak: 44, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 45, title: "Song 45", artist: "Artist 45", movement: "new", peak: 45, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 46, title: "Song 46", artist: "Artist 46", movement: "new", peak: 46, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 47, title: "Song 47", artist: "Artist 47", movement: "new", peak: 47, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 48, title: "Song 48", artist: "Artist 48", movement: "new", peak: 48, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 49, title: "Song 49", artist: "Artist 49", movement: "new", peak: 49, weeks: 1, cover: "https://via.placeholder.com/60" },
  { position: 50, title: "Song 50", artist: "Artist 50", movement: "new", peak: 50, weeks: 1, cover: "https://via.placeholder.com/60" }
];

const container = document.getElementById("chartContainer");
const topSongText = document.getElementById("topSongText");

songs.forEach(song => {
  const card = document.createElement("div");
  card.className = "chart-card";

  let movementHTML = "";
  if (song.movement === "up") movementHTML = '<div class="up">▲</div>';
  else if (song.movement === "down") movementHTML = '<div class="down">▼</div>';
  else movementHTML = '<div>NEW</div>';

  card.innerHTML = `
    <div class="position">${song.position}</div>
    <img class="cover" src="${song.cover}" />
    <div class="song-info">
      <div class="song-title">${song.title}</div>
      <div>${song.artist}</div>
    </div>
    <div class="stats">
      ${movementHTML}
      <div>Peak: ${song.peak}</div>
      <div>Weeks: ${song.weeks}</div>
    </div>
  `;

  container.appendChild(card);
});

// Update top song widget
if (songs.length > 0) {
  topSongText.textContent = songs[0].title + " – " + songs[0].artist;
}
