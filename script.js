//SONG LIST
let displayedSongs = [];
const audio = new Audio;

const card_container = document.querySelector(
    ".Songs-list .card-content"
);

const songs = [
    {
        songimg: `cards/Song_Images/img1.jpg`,
        song: `Nakhre (From "Tum Mere Ho")`,
        name: `Sanju Rathod, G-SPXRK`,
        url: `songs/1.mp3`
    },
    {
        songimg: `cards/Song_Images/img2.jpg`,
        song: `Chalray Chalray Waal`,
        name: `Ravzz Musica`,
        url: `songs/2.mp3`
    },
    {
        songimg: `cards/Song_Images/img3.jpg`,
        song: `CHALREH CHALREH WAAL - Acoustic`,
        name: `Sufi Mafiya`,
        url: `songs/3.mp3`
    },
    {
        songimg: `cards/Song_Images/img4.jpg`,
        song: `Magale`,
        name: `Sai Abhyankkar, Harini, Karthik Netha`,
        url: `songs/4.mp3`
    },
    {
        songimg: `cards/Song_Images/img5.jpg`,
        song: `Ashke`,
        name: `Karan Aujli, Mxrci`,
        url: `songs/5.mp3`
    },
    {
        songimg: `cards/Song_Images/img6.jpg`,
        song: `One Name`,
        name: `Anirudh Ravichander, Super Subu`,
        url: `songs/6.mp3`
    },
    {
        songimg: `cards/Song_Images/img7.jpg`,
        song: `BADASS`,
        name: `Arjan Dhillon, Rumane`,
        url: `songs/7.mp3`
    },
    {
        songimg: `cards/Song_Images/img8.jpg`,
        song: `Chalrey Chalrey Waal`,
        name: `Guri Aasla`,
        url: `songs/8.mp3`
    },
    {
        songimg: `cards/Song_Images/img9.jpg`,
        song: `Rathinamo - Female Version`,
        name: `Saurav Srisan, Tanisha Gnanavel`,
        url: `songs/9.mp3`
    },
    {
        songimg: `cards/Song_Images/img10.jpg`,
        song: `Sammi Meri Waar`,
        name: `AISBACK`,
        url: `songs/10.mp3`
    },
    {
        songimg: `cards/Song_Images/img11.jpg`,
        song: `Chalreh Chalreh Waal - Acoustic Version`,
        name: `Sick Vibex`,
        url: `songs/11.mp3`
    },
    {
        songimg: `cards/Song_Images/img12.jpg`,
        song: `Said & Done`,
        name: `Arjan Dhillon, Qarn Mallhi`,
        url: `songs/12.mp3`
    },
    {
        songimg: `cards/Song_Images/img13.jpg`,
        song: `Pesamale`,
        name: `Siri Xander, Arra Aria Khayal`,
        url: `songs/13.mp3`
    },
    {
        songimg: `cards/Song_Images/img14.jpg`,
        song: `Nazar Lagi`,
        name: `Nazar Lagi, Asees Kaur`,
        url: `songs/14.mp3`
    },
    {
        songimg: `cards/Song_Images/img15.jpg`,
        song: `Scene`,
        name: `Vikram Sarkar, THOUGHT`,
        url: `songs/15.mp3`
    },
    {
        songimg: `cards/Song_Images/img16.jpg`,
        song: `Tumhein Bhi Humse (From "Tum Mere Ho")`,
        name: `Vishal Mishra, Mithoon`,
        url: `songs/16.mp3`
    },
    {
        songimg: `cards/Song_Images/img17.jpg`,
        song: `IYKYK`,
        name: `Jxggi, Dishant, Sickboi`,
        url: `songs/17.mp3`
    },
    {
        songimg: `cards/Song_Images/img18.jpg`,
        song: `Guzarish`,
        name: `Satinder Sartaaj`,
        url: `songs/18.mp3`
    },
    {
        songimg: `cards/Song_Images/img19.jpg`,
        song: `UP Wali Laiki`,
        name: `Nishant Mukta`,
        url: `songs/19.mp3`
    },
    {
        songimg: `cards/Song_Images/img20.jpg`,
        song: `Binde Meeda Bindhe Vetti - Dj Song`,
        name: `Srinidhi Nerella, Nagavva chunchu`,
        url: `songs/20.mp3`
    }
];

function shuffleSongs(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // [arr[i], arr[j]] = [arr[j], arr[i]];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

function TrendingSong() {

    const shuffledSongs = shuffleSongs([...songs]);
    displayedSongs = shuffledSongs;

    let html = "";

    for (let i = 0; i < shuffledSongs.length; i++) {
        const img = shuffledSongs[i].songimg;
        const songName = shuffledSongs[i].song;
        const artistsname = shuffledSongs[i].name;

        html += `
            <div class="card" data-song-index="${i}">
                <div class="imgs">
                    <img src="${img}" alt="image">
                    <img class="playbtn" src="cards/playbtn.svg" alt="playbtn">
                </div>
                <div class="songname">${songName}</div>
                <div class="name">${artistsname}</div>
            </div>`;
    }

    card_container.innerHTML = html;
}
TrendingSong();

function openSongPage(song) {
    const main = document.querySelector(".mainbox > .right .main");
    const previousContent = main.innerHTML;

    playSong(song);

    main.innerHTML =
        `
    <div class="back-btn">
        <svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#545154"
            fill="none" stroke="#a29da2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8V12M12 12V16M12 12H16M12 12H8"></path>
        </svg>
    </div>

    <div class="song-page">
        <div class="song-hero">
            <img src="${song.songimg}" alt="$song-img">
            <div>
                <div>Single</div>
                <h1 class="songname">${song.song}</h1>
                <span class="name">${song.name} • 1 song , </span>
                <span class="song-duration">0:00</span>
            </div>
        </div>

        <div class="bg">
            <div class="song-controls">
                <button class="play-btn">
                    <img src="elements/play.svg" alt="Play" />
                </button>
                <span><img class="shuffle" src="elements/shuffle.svg" alt="shuffle"></span>
                <span>
                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"
                        color="#545154" fill="none" stroke="#a29da2" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8V12M12 12V16M12 12H16M12 12H8"></path>
                    </svg>
                </span>
                <span>•••</span>
            </div>

            <div class="progress-container">
                <span class="current-time">0:00</span>

                <input type="range" class="progress-bar" min="0" max="100" value="0">

                <span class="total-time">0:00</span>    
            </div>

            <div class="song-info">
                <div class="left">
                    <span class="track-heading"># &nbsp; Title</span>
                    <span class="duration"><img src="elements/duration.svg" alt="duration"></span>
                </div>
                <div class="line"></div>
                <div class="track">
                    <span>1</span>
                    <div>
                        <div class="songname">${song.song}</div>
                        <div class="name">${song.name}</div>
                    </div>
                    <div class="right">
                        <span>
                            <svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"
                                color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 8V12M12 12V16M12 12H16M12 12H8"></path>
                            </svg>
                        </span>
                        <div class="song-duration">0:00</div>
                        <span class="dot">•••</span>
                    </div>
                </div>
            </div>

            <div class="song-footer">
                <div>16 October2026</div>
                <div>© 2026 Spotify Clone. All rights reserved. | Made with ❤️ for music lovers.</div>
            </div>
        </div>

        <div class="footer">
            <div class="line"></div>
            <div class="about">
                <div class="text">
                    <div class="list">
                        <div>Company</div>
                        <ul>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>For the Record</li>
                        </ul>
                    </div>
                    <div class="list">
                        <div>Communities</div>
                        <ul>
                            <li>For Artists</li>
                            <li>For Creators</li>
                            <li>For Authors</li>
                            <li>Developers</li>
                            <li>Advertising</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                        </ul>
                    </div>
                    <div class="list">
                        <div>Useful links</div>
                        <ul>
                            <li>Support</li>
                            <li>Free Mobile App</li>
                            <li>Popular by Country</li>
                            <li>Top Song Lyrics</li>
                            <li>Import your music</li>
                        </ul>
                    </div>
                    <div class="list">
                        <div>Spotify Plans</div>
                        <ul>
                            <li>Premium Standard</li>
                            <li>Premium Platinum</li>
                            <li>Premium Student</li>
                            <li>Spotify Free</li>
                        </ul>
                    </div>
                </div>
                <div class="socialMedia">
                    <div class="img">
                        <img src="elements/Instagram.svg" alt="Instagram">
                    </div>
                    <div class="img">
                        <img src="elements/X.svg" alt="Instagram">
                    </div>
                    <div class="img">
                        <img src="elements/Facebook.svg" alt="Instagram">
                    </div>
                </div>
            </div>
            <div class="line"></div>

            <div class="copyright">
                © 2026 Girish Lamani • Educational Portfolio Project
            </div>
        </div>
    </div>
    `;


    main.querySelector(".back-btn").addEventListener("click", () => {
        stopSong();
        main.innerHTML = previousContent;
        initializeScrollArrows();
    });

    const playBtn = main.querySelector(".play-btn");

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Song playback failed:", error);
            });
        } else {
            audio.pause();
        }
    });
}

function updatePlayPauseIcon() {
    const playIcon = document.querySelector(".play-btn img");

    if (playIcon) {
        playIcon.src = audio.paused
            ? "elements/play.svg"
            : "elements/pause.svg";

        playIcon.alt = audio.paused ? "Play" : "Pause";
    }
}

audio.addEventListener("play", updatePlayPauseIcon);
audio.addEventListener("pause", updatePlayPauseIcon);

const right = document.querySelector(".mainbox > .right");

right.addEventListener("click", (e) => {
    const card = e.target.closest(".Songs-list .card-content .card");
    if (!card) return;

    const index = Number(card.dataset.songIndex);
    const song = displayedSongs[index];

    if (song) {
        openSongPage(song);
    }
});

// AUDIO PLAYER

function playSong(song) {
    audio.pause();
    audio.src = song.url;
    audio.currentTime = 0;

    audio.play().catch(error => { console.error("Song playback failed:", error); });
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

audio.addEventListener("loadedmetadata", () => {
    const durationElement = document.querySelectorAll(".song-page .song-duration");

    durationElement.forEach((element) => {
        element.textContent = formatTime(audio.duration);
    });

    const totalTime = document.querySelector(".total-time");

    if (totalTime) {
        totalTime.textContent = formatTime(audio.duration);
    }
})

audio.addEventListener("timeupdate", () => {
    const currentTime = document.querySelector(".current-time");
    const progressBar = document.querySelector(".progress-bar");

    if (!currentTime || !progressBar) return;

    currentTime.textContent = formatTime(audio.currentTime);

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    }
});

document.querySelector(".mainbox > .right").addEventListener("input", (e) => {
    if (!e.target.matches(".progress-bar")) return;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;

    audio.currentTime =
        (Number(e.target.value) / 100) * audio.duration;
});

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    audio.removeAttribute("src");
    audio.load();
}


//SCROLL ARROW
function initializeScrollArrows() {

    const wrapper = document.querySelectorAll(".card-wrapper");
    wrapper.forEach((element) => {
        const card = element.querySelector(".card-content");
        const leftBtn = element.querySelector(".scroll-left");
        const rightBtn = element.querySelector(".scroll-right");

        function updateArrows() {
            if (card.scrollLeft <= 0)
                leftBtn.style.display = "none";
            else
                leftBtn.style.display = "flex";

            if (card.scrollLeft + card.clientWidth >= card.scrollWidth - 1)
                rightBtn.style.display = "none";
            else
                rightBtn.style.display = "flex";
        }

        const scrollAmount = card.clientWidth * 0.45;
        rightBtn.addEventListener("click", () => {
            card.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });

        leftBtn.addEventListener("click", () => {
            card.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        card.addEventListener("scroll", updateArrows);
        updateArrows();
    });
}
initializeScrollArrows();


// PlayingView
const panel = document.querySelector(".playingView");
const toggle = document.querySelector(".panel-toggle");
toggle.addEventListener("click", () => {
    panel.classList.toggle("closed");
});