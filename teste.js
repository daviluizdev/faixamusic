const songs = [
    {

        src: "src/Vento No Litoral (320).mp3"
        cover: "ibagens/legiao urbana capa.jpg"
    },
    {
        
        src: "src/Calcinha Preta - Um Novo Amor.mp3"
        cover: "ibagens/calçola.jpg"
    },
    {
       
        src: "src/Calcinha Preta - Dois Amores, Duas Paixões  (1).mp3"
        cover: "ibagens/calcinha preta capa.jpg"
    },  
    
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');

function loadSong(song) {

    audio.src = song.src;
    cover.src = song.cover;
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Play";
    }
}

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
playButton.addEventListener('click', togglePlayPause);

audio.addEventListener('ended', nextSong);


loadSong(songs[currentSongIndex]);