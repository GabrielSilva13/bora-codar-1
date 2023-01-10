let track_art = document.querySelector("[data-track-art]");
let track_name = document.querySelector("[data-track-name]");
let track_artist = document.querySelector("[data-track-artist]");

let playpause_button = document.querySelector("[data-playpause]");
let next_button = document.querySelector("[data-next-button]");
let prev_button = document.querySelector("[data-prev-button]");

let seek_slider = document.querySelector("[data-seek-slider]");
let volume_slider = document.querySelector("[data-volume-slider]");
let curr_time = document.querySelector("[data-curr-time]");
let total_duration = document.querySelector("[data-total-duration]");

let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let updateTime;

const music_list = [
  {
    img: "images/panico.png",
    name: "I just call to say i kill you",
    artist: "The Merkins",
    music: "musics/just-call.mp3",
  },
  {
    img: "images/top-g.png",
    name: "Top G Music",
    artist: "Indila",
    music: "musics/top-g.mp3",
  },
  {
    img: "images/votu.png",
    name: "Votu",
    artist: "Anh Quân Idol",
    music: "musics/votu.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTime);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";

  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  updateTime = setInterval(setUpdate, 1000);

  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_button.innerHTML =
    "<i class='ph-pause-fill' style='color: #e1e1e6; font-size: 28px'></i>";
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_button.innerHTML =
    " <i class='ph-play-fill'style='color: #e1e1e6; font-size: 28px'></i>";
}

function nextTrack() {
  if (track_index < music_list.length - 1) {
    track_index += 1;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
