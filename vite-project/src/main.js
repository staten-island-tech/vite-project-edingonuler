import "./style.css";

const light_button = document.getElementById("light_color");

const dark_button = document.getElementById("dark_color");

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
    const songname = document.getElementById("song_name").value;
    const imagelink = document.getElementById("image_link").value;
    const newCard = document.createElement("div");

    newCard.style.background = "grey";
    newCard.style.borderRadius = "25px";
    card.style.height = "433px";
    card.style.width = "380px";
    card.style.display = "flex";
    card.style.justifyContent = "center";

    newCard.classList.add("card");

    newCard.innerHTML = `
      <div class="card-info">
      <h3 style="text-align: center;">Song Name: ${songname}</h3>
      <img class="card_image" src="${imagelink}">
      <p></p>
      <button id="remove_card" class="remove-button">Remove Card</button>
    </div>
    `;
  }
  injectCard();

  const removeButton = document.querySelectorAll("remove-button");
  console.log(removeButton);
  // Loop through each button and add an event listener
  removeButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Get the button that was clicked
      const clickedButton = event.target;

      // Find the parent card element
      // Assuming the button is inside a .card-body, which is inside a .card
      const card = clickedButton.closest(".card");
      console.log(card);
      // If a card is found, remove it
      if (card) {
        card.remove();
      }
    });
  });

  document.getElementById("cardContainer").appendChild(card);
  document.getElementById("form").reset();
});
