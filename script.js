// All genres - New Songs Add here
var genres = [
    { profile: "https://th.bing.com/th/id/R.7a37c37ac29910afa383100c69c4fc61?rik=LDPxVGjDVGFbaQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fColorful-music-wallpaper-HD.jpg&ehk=7YZu3hZCkx%2bwnX1%2f9G7Hw7AIfVUtb%2f63Zvvdoqh4FW0%3d&risl=&pid=ImgRaw&r=0", name: "Mix Songs", genre: "mixSongs" },
    { profile: "https://th.bing.com/th/id/OIP.jXE_hSwHp9PChSgNfjNwBQHaEo?rs=1&pid=ImgDetMain", name: "Rock", genre: "rockSongs" },
    { profile: "https://th.bing.com/th/id/OIP.ZCgiVECnViOLGW0fsK94bAHaE5?rs=1&pid=ImgDetMain", name: "Sad", genre: "sadSongs" },
    { profile: "https://th.bing.com/th/id/OIP.p7fp6NTOpJqvTmpZG1s2yAHaEK?rs=1&pid=ImgDetMain", name: "Lofi", genre: "lofiSongs" }
]

// Genre with their playlist
var rockSongs = {
    profile: "https://th.bing.com/th/id/R.7a37c37ac29910afa383100c69c4fc61?rik=LDPxVGjDVGFbaQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fColorful-music-wallpaper-HD.jpg&ehk=7YZu3hZCkx%2bwnX1%2f9G7Hw7AIfVUtb%2f63Zvvdoqh4FW0%3d&risl=&pid=ImgRaw&r=0",
    albumName: "Mix Songs",
    songs: [
        { album: "High Tides", name: "Divinity", image: "https://joystock.org/track-images/divinity.jpg", url: "https://tracks-new.joystock.org/joystock-divinity.mp3", duration: "05:34" },
        { album: "Mischief", name: "Write Your Story", image: "https://joystock.org/track-images/write-your-story.jpg", url: "https://tracks-new.joystock.org/joystock-write-your-story.mp3", duration: "03:22" },
        { album: "Unknown Brain", name: "Epic", image: "https://joystock.org/track-images/epic.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
        { album: "Joker", name: "FireBird", image: "https://joystock.org/track-images/firebird.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
        { album: "Harley Quinn", name: "Day One", image: "https://joystock.org/track-images/day-one.jpg", url: "https://tracks-new.joystock.org/joystock-day-one.mp3", duration: "04:51" }
    ]
};
var array = rockSongs.songs;

// Genre with their playlist
var sadSongs = [
    { album: "High Tides", name: "Divinity", image: "https://joystock.org/track-images/divinity.jpg", url: "https://tracks-new.joystock.org/joystock-divinity.mp3", duration: "05:34" },
    { album: "Mischief", name: "Write Your Story", image: "https://joystock.org/track-images/write-your-story.jpg", url: "https://tracks-new.joystock.org/joystock-write-your-story.mp3", duration: "03:22" },
    { album: "Unknown Brain", name: "Epic", image: "https://joystock.org/track-images/epic.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
    { album: "Joker", name: "FireBird", image: "https://joystock.org/track-images/firebird.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
    { album: "Harley Quinn", name: "Day One", image: "https://joystock.org/track-images/day-one.jpg", url: "https://tracks-new.joystock.org/joystock-day-one.mp3", duration: "04:51" },
]

// Genre with their playlist
var lofiSongs = [
    { album: "High Tides", name: "Divinity", image: "https://joystock.org/track-images/divinity.jpg", url: "https://tracks-new.joystock.org/joystock-divinity.mp3", duration: "05:34" },
    { album: "Mischief", name: "Write Your Story", image: "https://joystock.org/track-images/write-your-story.jpg", url: "https://tracks-new.joystock.org/joystock-write-your-story.mp3", duration: "03:22" },
    { album: "Unknown Brain", name: "Epic", image: "https://joystock.org/track-images/epic.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
    { album: "Joker", name: "FireBird", image: "https://joystock.org/track-images/firebird.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
    { album: "Harley Quinn", name: "Day One", image: "https://joystock.org/track-images/day-one.jpg", url: "https://tracks-new.joystock.org/joystock-day-one.mp3", duration: "04:51" },
]

// Setting default playlist
var newArrivals = [
    { album: "Christmas", name: "Divinity", image: "https://joystock.org/track-images/christmas.jpg", url: "https://tracks-new.joystock.org/joystock-christmas.mp3", duration: "05:34" },
    { album: "Neon Lights", name: "Write Your Story", image: "https://joystock.org/track-images/neon-lights.jpg", url: "https://tracks-new.joystock.org/joystock-write-your-story.mp3", duration: "03:22" },
    { album: "Breathtaking Landscapes", name: "Breathtaking Landscapes", image: "https://joystock.org/track-images/breathtaking-landscapes.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
    { album: "Action", name: "Action", image: "https://joystock.org/track-images/sacred-spirits.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
    { album: "Epic Music", name: "Epic", image: "https://joystock.org/track-images/inspiring-cinematic-emotion.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
    { album: "FireBird", name: "FireBird", image: "https://joystock.org/track-images/action-drums.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
    { album: "Epic Music", name: "Epic", image: "https://joystock.org/track-images/inspiring-cinematic-emotion.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
    { album: "FireBird", name: "FireBird", image: "https://joystock.org/track-images/action-drums.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
    { album: "Rock", name: "Day One", image: "https://joystock.org/track-images/grandiose.jpg", url: "https://tracks-new.joystock.org/joystock-day-one.mp3", duration: "04:51" }
]
// Populating default playlist
function allSongs() {
    const playlist = document.querySelector("#playlist")
    const mood = document.querySelector("#artists")
    var clutter = "";

    array.forEach(function (obj, index) {
        clutter += `<ol class="currentStack" id="${index}">
        <div id="album">
            <img src="${obj.image}" alt="">
            <h5 id="album-name">${obj.album}</h5>
        </div>
        <div id="song">${obj.name}</div>
        <h5 id="duration">${obj.duration}</h5>
    </ol>`;
    })
    playlist.innerHTML = clutter;
}

function selectMood() {
    const playlist = document.querySelector("#artists")
    var clutter = "";

    genres.forEach(function (obj, index) {
        clutter += `<div class="artist" id="${index}">
        <img src="${obj.profile}" alt="">
        <p>${obj.name}</p>
    </div>`;
    })
    playlist.innerHTML = clutter;
}

function populateAlbum() {
    const mood = document.querySelector("#artists")
    var clutter = "";

    genres.forEach(function (obj, index) {
        clutter += `<div class="artist" id="${index}">
        <img src="${obj.profile}" alt="">
        <p>${obj.name}</p>
    </div>`;
    })
    playlist.innerHTML = clutter;
}
populateAlbum();

var audio = new Audio()

function startPlaying() {
    var currentPlaylist = document.querySelector('#playlist');
    var playPause = document.querySelector('#playPause');

    currentPlaylist.addEventListener('click', (dets) => {
        var songDetail = array[dets.target.id];
        audio.src = `${songDetail.url}`;
        audio.play();
        var nowPlaying = document.querySelector('#now-playing');
        nowPlaying.innerHTML = `<div id="icon"><img src="${songDetail.image}" alt=""></div>
        <div id="song-name">${songDetail.album}
        <p>${songDetail.name}</p></div>`;

        playPause.innerHTML = `<i class="ri-pause-fill"></i>`;
    })
}

function changeAlbum() {
    var playlist = document.querySelector(".albumGrid")
    var clutter = "";

    newArrivals.forEach(function (obj, index) {
        clutter += `<div class="album-item">
        <img src="${obj.image}" alt="">
        <p id="detail">${obj.name}</p>
    </div>`;
    })
    playlist.innerHTML = clutter;
}

function player() {
    var backward = document.querySelector('#backward');
    var playPause = document.querySelector('#playPause');
    var forward = document.querySelector('#forward');
    var liked = document.querySelector('#liked');
    var disliked = document.querySelector('#disliked');
    var mute = document.querySelector('#mute');

    playPause.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPause.innerHTML = `<i class="ri-pause-line"></i>`;
        } else {
            audio.pause();
            playPause.innerHTML = `<i class="ri-play-fill"></i>`;
        }
    });

    backward.addEventListener('click', function () {
        audio.currentTime -= 10;
    })

    forward.addEventListener('click', function () {
        audio.currentTime += 10;
    })

    liked.addEventListener('click', function () {
        alert("Great! We'll suggest you more similar songs.")
        liked.style.color = 'green';
        disliked.style.color = 'white';
    })

    disliked.addEventListener('click', function () {
        alert("Song Disliked!")
        liked.style.color = 'white';
        disliked.style.color = 'red';
    })

    mute.addEventListener('click', function () {

        if (audio.muted) {
            audio.muted = false;
            mute.innerHTML = `<i id="iconColor" class="ri-volume-up-fill"></i>`;
        } else {
            audio.muted = true;
            mute.innerHTML = `<i id="iconColor" class="ri-volume-mute-fill"></i>`;
            document.querySelector('#iconColor').style.color = 'red';
        }
    });
}

allSongs();
selectMood();
startPlaying();
changeAlbum();
player();
