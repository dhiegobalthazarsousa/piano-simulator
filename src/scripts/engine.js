const pianoKeys = document.querySelectorAll(".piano-keys .key");
const mappedKeys = [];

let audio = new Audio("src/audios/a.wav");

const playTune = (key) => {
    audio.src = `src/audios/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150)
}

document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)){
        playTune(e.key);
    }
});

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});
