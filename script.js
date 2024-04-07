// All genres - New Songs Add here
var genres = [
    {
        albumName: "Mix Songs", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkKllyUu396gYjslmYCszsMxBnt21ZtbPPbMNBy7IaQ&s", songs: [
            { album: "High Tides", name: "Divinity", image: "https://joystock.org/track-images/divinity.jpg", url: "https://tracks-new.joystock.org/joystock-divinity.mp3", duration: "05:34" },
            { album: "Mischief", name: "Write Your Story", image: "https://joystock.org/track-images/write-your-story.jpg", url: "https://tracks-new.joystock.org/joystock-write-your-story.mp3", duration: "03:22" },
            { album: "Unknown Brain", name: "Epic", image: "https://joystock.org/track-images/epic.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
            { album: "Joker", name: "FireBird", image: "https://joystock.org/track-images/firebird.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
            { album: "Harley Quinn", name: "Day One", image: "https://joystock.org/track-images/day-one.jpg", url: "https://tracks-new.joystock.org/joystock-day-one.mp3", duration: "04:51" }
        ]
    },
    {
        albumName: "Sad Songs", profile: "https://th.bing.com/th/id/OIP.ZCgiVECnViOLGW0fsK94bAHaE5?rs=1&pid=ImgDetMain", genre: "sadSongs", songs: [
            { album: "Sad Type Beat", name: "Empty World", image: "https://joystock.org/track-images/divinity.jpg", url: "https://cdn.pixabay.com/download/audio/2024/03/05/audio_c100c21833.mp3?filename=free-sad-type-beat-empty-world-quot-194595.mp3", duration: "04:04" },
            { album: "SoulProdMusic", name: "Piano Background Music", image: "https://cdn.pixabay.com/audio/2022/10/30/17-22-44-578_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/10/30/audio_fbd14dd8bc.mp3?filename=sad-moment-sad-and-melancholy-piano-background-music-124488.mp3", duration: "02:39" },
            { album: "Oleksii_Kalyna", name: "Sad Piano Music", image: "https://cdn.pixabay.com/audio/2023/12/12/21-17-56-759_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2023/12/12/audio_e960b50640.mp3?filename=sad-piano-one-181090.mp3", duration: "01:43" },
            { album: "NightCityTunes", name: "Cry Alone", image: "https://cdn.pixabay.com/audio/2022/10/02/15-09-03-520_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/10/02/audio_35e7aa30d5.mp3?filename=sad-emotional-beat-cry-alone-121597.mp3", duration: "03:39" },
            { album: "AudioCoffee", name: "Sad Dramatic Time", image: "https://cdn.pixabay.com/audio/2022/09/07/14-28-12-185_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/09/07/audio_ed8ed4e393.mp3?filename=sad-dramatic-time-119364.mp3", duration: "03:18" },
        ]
    },
    {
        albumName: "Lofi Songs", profile: "https://th.bing.com/th/id/OIP.p7fp6NTOpJqvTmpZG1s2yAHaEK?rs=1&pid=ImgDetMain", genre: "lofiSongs",
        songs: [
            { album: "Hawaii Vacation", name: "TVARI", image: "https://cdn.pixabay.com/audio/2023/07/22/02-56-04-375_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2023/07/22/audio_2661a812be.mp3?filename=tvari-hawaii-vacation-159069.mp3", duration: "03:04" },
            { album: "Vineemusic", name: "Vinee Heights", image: "https://cdn.pixabay.com/audio/2022/12/16/03-22-51-580_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/11/23/audio_97769bb35d.mp3?filename=vinee-heights-126947.mp3", duration: "04:17" },
            { album: "Abstract_EDM", name: "Dancehall", image: "https://cdn.pixabay.com/audio/2022/10/29/09-27-37-131_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/29/audio_fc4b1bc787.mp3?filename=dancehall-124368.mp3", duration: "05:21" },
            { album: "Abstract_EDM", name: "Silicon Valley", image: "https://cdn.pixabay.com/audio/2022/10/26/13-50-50-388_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_a20924bfe3.mp3?filename=silicon-valley-123990.mp3", duration: "05:26" },
            { album: "Abstract_EDM", name: "Yoo Kid", image: "https://cdn.pixabay.com/audio/2022/10/20/16-02-57-104_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/20/audio_f6b6669ac5.mp3?filename=yo-kid-123499.mp3", duration: "04:28" },
        ]
    },
    {
        albumName: "Sad Songs", profile: "https://th.bing.com/th/id/OIP.ZCgiVECnViOLGW0fsK94bAHaE5?rs=1&pid=ImgDetMain", genre: "sadSongs", songs: [
            { album: "Sad Type Beat", name: "Empty World", image: "https://joystock.org/track-images/divinity.jpg", url: "https://cdn.pixabay.com/download/audio/2024/03/05/audio_c100c21833.mp3?filename=free-sad-type-beat-empty-world-quot-194595.mp3", duration: "04:04" },
            { album: "SoulProdMusic", name: "Piano Background Music", image: "https://cdn.pixabay.com/audio/2022/10/30/17-22-44-578_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/10/30/audio_fbd14dd8bc.mp3?filename=sad-moment-sad-and-melancholy-piano-background-music-124488.mp3", duration: "02:39" },
            { album: "Oleksii_Kalyna", name: "Sad Piano Music", image: "https://cdn.pixabay.com/audio/2023/12/12/21-17-56-759_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2023/12/12/audio_e960b50640.mp3?filename=sad-piano-one-181090.mp3", duration: "01:43" },
            { album: "NightCityTunes", name: "Cry Alone", image: "https://cdn.pixabay.com/audio/2022/10/02/15-09-03-520_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/10/02/audio_35e7aa30d5.mp3?filename=sad-emotional-beat-cry-alone-121597.mp3", duration: "03:39" },
            { album: "AudioCoffee", name: "Sad Dramatic Time", image: "https://cdn.pixabay.com/audio/2022/09/07/14-28-12-185_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/09/07/audio_ed8ed4e393.mp3?filename=sad-dramatic-time-119364.mp3", duration: "03:18" },
        ]
    },
    {
        albumName: "Lofi Songs", profile: "https://th.bing.com/th/id/OIP.p7fp6NTOpJqvTmpZG1s2yAHaEK?rs=1&pid=ImgDetMain", genre: "lofiSongs",
        songs: [
            { album: "Hawaii Vacation", name: "TVARI", image: "https://cdn.pixabay.com/audio/2023/07/22/02-56-04-375_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2023/07/22/audio_2661a812be.mp3?filename=tvari-hawaii-vacation-159069.mp3", duration: "03:04" },
            { album: "Vineemusic", name: "Vinee Heights", image: "https://cdn.pixabay.com/audio/2022/12/16/03-22-51-580_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/11/23/audio_97769bb35d.mp3?filename=vinee-heights-126947.mp3", duration: "04:17" },
            { album: "Abstract_EDM", name: "Dancehall", image: "https://cdn.pixabay.com/audio/2022/10/29/09-27-37-131_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/29/audio_fc4b1bc787.mp3?filename=dancehall-124368.mp3", duration: "05:21" },
            { album: "Abstract_EDM", name: "Silicon Valley", image: "https://cdn.pixabay.com/audio/2022/10/26/13-50-50-388_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_a20924bfe3.mp3?filename=silicon-valley-123990.mp3", duration: "05:26" },
            { album: "Abstract_EDM", name: "Yoo Kid", image: "https://cdn.pixabay.com/audio/2022/10/20/16-02-57-104_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/20/audio_f6b6669ac5.mp3?filename=yo-kid-123499.mp3", duration: "04:28" },
        ]
    }, 
    {
        albumName: "Mix Songs", profile: "https://dev-resws.hungamatech.com/featured_content/70030e40a2ecbad87ae86f074cf1971e_500x500.jpg", songs: [
            { album: "High Tides", name: "Divinity", image: "https://joystock.org/track-images/divinity.jpg", url: "https://tracks-new.joystock.org/joystock-divinity.mp3", duration: "05:34" },
            { album: "Mischief", name: "Write Your Story", image: "https://joystock.org/track-images/write-your-story.jpg", url: "https://tracks-new.joystock.org/joystock-write-your-story.mp3", duration: "03:22" },
            { album: "Unknown Brain", name: "Epic", image: "https://joystock.org/track-images/epic.jpg", url: "https://tracks-new.joystock.org/joystock-epic.mp3", duration: "07:24" },
            { album: "Joker", name: "FireBird", image: "https://joystock.org/track-images/firebird.jpg", url: "https://tracks-new.joystock.org/joystock-firebird.mp3", duration: "02:58" },
            { album: "Harley Quinn", name: "Day One", image: "https://joystock.org/track-images/day-one.jpg", url: "https://tracks-new.joystock.org/joystock-day-one.mp3", duration: "04:51" }
        ]
    },
    {
        albumName: "Lofi Songs", profile: "https://www.ubetoo.com/wp-content/uploads/2024/01/ubetoo-best-amapiano-songs-mix-2024-vol-1-2024_01_18_12_27_37-ubetoo.webp", genre: "lofiSongs",
        songs: [
            { album: "Hawaii Vacation", name: "TVARI", image: "https://cdn.pixabay.com/audio/2023/07/22/02-56-04-375_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2023/07/22/audio_2661a812be.mp3?filename=tvari-hawaii-vacation-159069.mp3", duration: "03:04" },
            { album: "5Vineemusic", name: "Vinee Heights", image: "https://cdn.pixabay.com/audio/2022/12/16/03-22-51-580_200x200.jpg", url: "https://cdn.pixabay.com/download/audio/2022/11/23/audio_97769bb35d.mp3?filename=vinee-heights-126947.mp3", duration: "04:17" },
            { album: "Abstract_EDM", name: "Dancehall", image: "https://cdn.pixabay.com/audio/2022/10/29/09-27-37-131_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/29/audio_fc4b1bc787.mp3?filename=dancehall-124368.mp3", duration: "05:21" },
            { album: "Abstract_EDM", name: "Silicon Valley", image: "https://cdn.pixabay.com/audio/2022/10/26/13-50-50-388_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_a20924bfe3.mp3?filename=silicon-valley-123990.mp3", duration: "05:26" },
            { album: "Abstract_EDM", name: "Yoo Kid", image: "https://cdn.pixabay.com/audio/2022/10/20/16-02-57-104_200x200.png", url: "https://cdn.pixabay.com/download/audio/2022/10/20/audio_f6b6669ac5.mp3?filename=yo-kid-123499.mp3", duration: "04:28" },
        ]
    },
]

// Current default songs to Show
var defaultArray = genres[0].songs;
var choosenArray = [];

// Populating Default Playlist
function allSongs() {
    const playlist = document.querySelector("#playlist")
    var clutter = "";

    defaultArray.forEach(function (obj, index) {
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

// Populating Select Your Mood
function populateMood() {
    const albums = document.querySelector("#artists")
    var clutter = "";

    genres.forEach(function (obj, index) {
        clutter += `<div class="artist" id="${index}">
        <img src="${obj.profile}" alt="">
        <p>${obj.albumName}</p>
    </div>`;
    })
    albums.innerHTML = clutter;
}

// Selecting Your Mood
function selectMood() {
    const albums = document.querySelector("#artists")
    const playlist = document.querySelector("#playlist")

    albums.addEventListener('click', (dets) => {
        var clutter = "";
        choosenArray = genres[dets.target.id].songs;

        choosenArray.forEach(function (obj, index) {
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
    })
}
selectMood();

// Setting New Albums
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


// Select and Play Song
var audio = new Audio()
function startPlaying() {
    var currentPlaylist = document.querySelector('#playlist');
    var playPause = document.querySelector('#playPause');

    choosenArray = defaultArray;
    currentPlaylist.addEventListener('click', (dets) => {
        var songDetail = choosenArray[dets.target.id];
        audio.src = `${songDetail.url}`;
        audio.play();
        var nowPlaying = document.querySelector('#now-playing');
        nowPlaying.innerHTML = `<div id="icon"><img src="${songDetail.image}" alt=""></div>
        <div id="song-name">${songDetail.album}
        <p>${songDetail.name}</p></div>`;

        playPause.innerHTML = `<i class="ri-pause-fill"></i>`;
    })
}

function changeCurrentPlaying() {
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
populateMood();
startPlaying();
changeCurrentPlaying();
player();
