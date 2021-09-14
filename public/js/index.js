var isPlaying = false;
var previousTrack;

var audio_wander = document.getElementById('audio-wander');
var audio_few = document.getElementById('audio-few');
var audio_forever = document.getElementById('audio-forever');
var audio_slipping = document.getElementById('audio-slipping');
var audio_caress = document.getElementById('audio-caress');

var track_list = document.getElementById('track-list');

var all_audio = [
    audio_wander,
    audio_few,
    audio_forever,
    audio_slipping,
    audio_caress
];

track_elements = [];

for (let i = 0; i < 5; i++) {
    track_elements.push(track_list.children[i].children[0].children[0]);
}

function playWander(btn) {
    try {
        audio_wander.play();
        isPlaying = true;
        btn.children[0].children[0].classList.remove('hidden');
    } catch (error) {
        console.log(error);
    }
}
function playFew(btn) {
    try {
        audio_few.play();
        isPlaying = true;
        btn.children[0].children[0].classList.remove('hidden');
    } catch (error) {
        console.log(error);
    }
}
function playForever(btn) {
    try {
        audio_forever.play();
        isPlaying = true;
        btn.children[0].children[0].classList.remove('hidden');
    } catch (error) {
        console.log(error);
    }
}
function playSlipping(btn) {
    try {
        audio_slipping.play();
        isPlaying = true;
        btn.children[0].children[0].classList.remove('hidden');
    } catch (error) {
        console.log(error);
    }
}
function playCaress(btn) {
    try {
        audio_caress.play();
        isPlaying = true;
        btn.children[0].children[0].classList.remove('hidden');
    } catch (error) {
        console.log(error);
    }
}

function checkTrack(btn) {
    if (btn.id == 'track-wander') {
        previousTrack = 'track-wander';
        playWander(btn);
    }
    if (btn.id == 'track-few') {
        previousTrack = 'track-few';
        playFew(btn);
    }
    if (btn.id == 'track-forever') {
        previousTrack = 'track-forever';
        playForever(btn);
    }
    if (btn.id == 'track-slipping') {
        previousTrack = 'track-slipping';
        playSlipping(btn);
    }
    if (btn.id == 'track-caress') {
        previousTrack = 'track-caress';
        playCaress(btn);
    }
}

function audioBtnClick(btn) {
    if (isPlaying == true) {
        isPlaying = false;
        for (let i = 0; i < 5; i++) {
            track_elements[i].classList.add('hidden');
        }
        all_audio.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        if (btn.id != previousTrack) {
            checkTrack(btn);
        }
    } else {
        checkTrack(btn);
    }
}
