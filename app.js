let cardDiv = document.getElementById("wishlist-cards");
const button = document.getElementById("button");
const form = document.vacationcardform;

button.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  var nodeList = [];

  newVacationCard(form, nodeList);
  cardDiv.append(...nodeList);
}

function newVacationCard(form, nodeList) {
  let placeHolderImage =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
  let { destination, location, photo, description } = form;
  if (photo === "") {
    photo = placeHolderImage;
  }

  let vacationCardDiv = document.createElement("div");
  vacationCardDiv.setAttribute("class", "card-class");

  let destinationCard = document.createElement("h3");
  // cardDestination.classList.add("card-destination");
  destinationCard.textContent = destination.value;

  let cardLocation = document.createElement("h4");
  cardLocation.textContent = location.value;

  let cardImage = document.createElement("img");
  cardImage.setAttribute("src", photo);

  let cardDescription = document.createElement("p");
  // cardDescription.classList.add("card-description");
  cardDescription.textContent = description.value;

  let editButton = document.createElement("edit-button");
  editButton.setAttribute("id", "vacation-edit-button");
  editButton.setAttribute("class", "edit-button");
  editButton.setAttribute("name", "edit-button");
  editButton.addEventListener("click", () => {
    const updatedDestination = prompt("Enter new name");
    form.destination.value = updatedDestination;
    const updatedLocation = prompt("Enter new location");
    form.location.value = updatedLocation;
    const udpatedPhotoURL = prompt("Enter new photo url");
    form.photo.value = udpatedPhotoURL;

    destinationHeading.innerText = updatedDestination;
    locationHeading.innerText = updatedLocation;
    descriptionParagraph.innerText = udpatedPhotoURL;
  });

  let removeButton = document.createElement("remove-button");
  removeButton.setAttribute("id", "vacation-remove-button");
  removeButton.setAttribute("class", "remove-button");
  removeButton.setAttribute("name", "remove-button");
  removeButton.addEventListener("click", () =>
    cardDiv.removeChild(vacationCardDiv)
  );
  vacationCardDiv.appendChild(cardImage);
  vacationCardDiv.appendChild(destinationCard);
  vacationCardDiv.appendChild(cardLocation);
  vacationCardDiv.appendChild(cardDescription);
  vacationCardDiv.appendChild(editButton);
  vacationCardDiv.appendChild(removeButton);

  nodeList.push(vacationCardDiv);
}
