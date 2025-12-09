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
    const newCard = document.createElement("div");

    const songname = document.getElementById("song_name").value;
    const imagelink = document.getElementById("image_link").value;

    newCard.style.background = "grey";
    newCard.style.borderRadius = "25px";
    newCard.style.height = "433px";
    newCard.style.width = "380px";
    newCard.style.display = "flex";
    newCard.style.justifyContent = "center";

    newCard.innerHTML = `
      <div class="card-info">
      <h3 style="text-align: center;">Song Name: ${songname}</h3>
      <img class="card_image" src="${imagelink}">
      <p></p>
      <button id="remove_card" class="remove-button">Remove Card</button>
    </div>
    `;

    newCard.classList.add("card");
    document.getElementById("cardContainer").appendChild(newCard);
    document.getElementById("form").reset();
  }
  injectCard();
});

document
  .getElementById("remove_card")
  .addEventListener("remove", function (event) {
    event.preventDefault();

    function removeButton() {
      const removeButton = document.querySelectorAll("remove_card");

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
    }

    removeButton();
  });
