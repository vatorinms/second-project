let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');
let noSongsElement = container.querySelector('.no-songs');
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

function renderAdded() {
    
    let songs = songsContainer.querySelectorAll('.song');

    if (songs.length === 0) {
    resetButton.setAttribute('disabled', true);
    //resetButton.setAttribute('style', 'background-color: #f1f1f1');
    resetButton.classList.add('form__submit-btn_disabled');
    noSongsElement.classList.remove('no-songs_hidden');
        }
    else {
    resetButton.classList.remove('form__submit-btn_disabled');
    resetButton.removeAttribute('disabled');
    noSongsElement.classList.add('no-songs_hidden');
    }
    
}

function addSong() {
    let artist = document.querySelector('.input__text_type_artist');
    let song = document.querySelector('.input__text_type_song');
    songsContainer.insertAdjacentHTML ('beforeend', `
    <div class="song">
    <h4 class="song__artist">${artist.value}</h4>
    <p class="song__title">${song.value}</p>
    <button class="song__like"></button></div>
    `);
    artist.value = '';
    song.value = '';
    renderAdded(); 
}

addButton.addEventListener('click', addSong);

renderAdded();

//let inputartist = document.querySelector('.input__text_type_artist');
//console.log(typeof inputartist.value);





