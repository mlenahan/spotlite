// eslint-disable-next-line no-unused-vars
function createRecommendationsForm(genres) {
    const newSongsTitle = "SpotLite";
    const fillForm = "Get music recommendations from Spotify.";
    const artistLabel = "Artist";
    const songLabel = "Song";
    const genreLabel = "Genre";
    const submitButtonLabel = "SUBMIT";
    
    const newSongsTitleEL = document.createElement("h1");
    newSongsTitleEL.innerText = newSongsTitle;

    const fillFormEl = document.createElement("h2");
    fillFormEl.innerText = fillForm;

    // Artist Elements
    const artistLabelEl = document.createElement("label");
    artistLabelEl.setAttribute("for", "artist");
    artistLabelEl.innerText = artistLabel;

    const artistInputEl = document.createElement("input");
    artistInputEl.setAttribute("type", "text");
    artistInputEl.setAttribute("id", "artist");
    artistInputEl.setAttribute("name", "artistname");
    artistInputEl.setAttribute("placeholder", "Artist name..");

    // Artist Divs
    const artistLabelDiv = document.createElement("div");
    artistLabelDiv.appendChild(artistLabelEl);

    const artistInputDiv = document.createElement("div");
    artistInputDiv.appendChild(artistInputEl);

    // Song Elements
    const songLabelEl = document.createElement("label");
    songLabelEl.setAttribute("for", "song");
    songLabelEl.innerText = songLabel;

    const songInputEl = document.createElement("input");
    songInputEl.setAttribute("type", "text");
    songInputEl.setAttribute("id", "song");
    songInputEl.setAttribute("name", "songname");
    songInputEl.setAttribute("placeholder", "Song name..");

    // Song Divs
    const songLabelDiv = document.createElement("div");
    songLabelDiv.appendChild(songLabelEl);

    const songInputDiv = document.createElement("div");
    songInputDiv.appendChild(songInputEl);

    // Genre Elements
    const genreLabelEl = document.createElement("label");
    genreLabelEl.setAttribute("for", "genre");
    genreLabelEl.innerText = genreLabel;

    const genreSelectEl = document.createElement("select");
    genreSelectEl.setAttribute("name", "genre");
    genreSelectEl.setAttribute("id", "genre");

    console.log(genres);
    for (let genre of genres) {
        // eslint-disable-next-line no-undef
        const label = toTitleCase(genre);
        const genreOption = document.createElement("option");
        genreOption.value = genre;
        genreOption.text = label;
        genreSelectEl.appendChild(genreOption);
    }

    // Genre Divs
    const genreLabelDiv = document.createElement("div");
    genreLabelDiv.appendChild(genreLabelEl);

    const genreSelectDiv = document.createElement("div");
    genreSelectDiv.setAttribute("id", "genre");
    genreSelectDiv.setAttribute("name", "genre");
    genreSelectDiv.appendChild(genreSelectEl);

    // Submit button element
    const submitButtonEL = document.createElement("button");
    submitButtonEL.setAttribute("type", "submit");
    submitButtonEL.setAttribute("value", "SUBMIT");
    submitButtonEL.innerText = submitButtonLabel;

    const submitButtonDiv = document.createElement("div");
    submitButtonDiv.appendChild(submitButtonEL);

    // Adding divs to form
    const loginForm = document.createElement("form");
    loginForm.setAttribute("id","login-form"); 
    loginForm.appendChild(artistLabelDiv);
    loginForm.appendChild(artistInputDiv);
    loginForm.appendChild(songLabelDiv);
    loginForm.appendChild(songInputDiv);
    loginForm.appendChild(genreLabelDiv);
    loginForm.appendChild(genreSelectDiv);
    loginForm.appendChild(submitButtonDiv);

    const musicForm = document.createElement("div");
    musicForm.classList.add("music-form");
    musicForm.appendChild(newSongsTitleEL);
    musicForm.appendChild(fillFormEl);
    musicForm.appendChild(loginForm);

    return musicForm;
}
