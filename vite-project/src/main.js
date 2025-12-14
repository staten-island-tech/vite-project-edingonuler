import "./style.css";

const light_button = document.getElementById("light_color");

const dark_button = document.getElementById("dark_color");

const songs = [];

// Add an event listener to the button
light_button.addEventListener("click", function () {
  // Change the background color of the body
  document.body.style.backgroundColor = "#FFDAB9"; // Or
});

dark_button.addEventListener("click", function () {
  // Change the background color of the body
  document.body.style.backgroundColor = "#96613d"; // Or
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  function injectCard() {
    const newCard = document.createElement("div");

    const songname = document.getElementById("song_name").value;
    const imagelink = document.getElementById("image_link").value;
    const genrename = document.getElementById("genre_name").value;

    newCard.innerHTML = `
      <div class="card-info">
      <h3 style="text-align: center;">Song Name: ${songname}, Genre: ${genrename}</h3>
      <img class="card_image" src="${imagelink}">
      <p></p>
      <button id="remove_card" class="delete-button">Remove Card</button>
    </div>
    `;

    songs.push({
      songName: songname,
      genreName: genrename,
      imageLink: imagelink
    })

    newCard.classList.add("card");
    document.getElementById("cardContainer").appendChild(newCard);
    document.getElementById("form").reset();
  }
  injectCard();
});

const deleteButtons = document.querySelectorAll(".delete-button");

const cardContainer = document.getElementById("cardContainer");

cardContainer.addEventListener("click", function (event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains("delete-button")) {
    // Find the parent card element
    const cardToRemove = event.target.closest(".card");

    // Remove the card from the DOM
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }
});

const nameField = document.getElementById("search-input-name");
const genreField = document.getElementById("search-input-genre");


document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameField.value.trim();
  const genre = genreField.value.trim();

  const selected = songs.filter((song) => {
    const isName = name === "" || song.songName === name;
    const isGenre = genre === "" || song.genreName === genre;

    return isName && isGenre;
  });


  document.getElementById("cardContainer").innerHTML = "";

  selected.forEach((song) => {
    const newCard = document.createElement("div");

    newCard.innerHTML = `
      <div class="card-info">
      <h3 style="text-align: center;">Song Name: ${song.songName}, Genre: ${song.genreName}</h3>
      <img class="card_image" src="${song.imageLink}">
      <p></p>
      <button id="remove_card" class="delete-button">Remove Card</button>
    </div>
    `;

    newCard.classList.add("card");
    document.getElementById("cardContainer").appendChild(newCard);
  })

});