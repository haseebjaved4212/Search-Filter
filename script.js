const users = [
  {
    name: "Haseeb ",
    image: "./Assets/Gojo.jpg",
    description:
      "- Create your own path, don’t be just another face in the crowd.",
  },
  {
    name: "Talha ",
    image: "./Assets/Itachi.jpg",
    description:
      "Dreams aren’t what you see in sleep—they’re what keep you awake.",
  },
  {
    name: "Saim",
    image: "./Assets/Saim.jpg",
    description: " I’m that moment time can’t change",
  },
  {
    name: "Noman",
    image: "./Assets/Luffy.jpg",
    description: "Life’s a mission, and I’m chasing my goals.",
  },
  {
    name: "Hassan",
    image: "./Assets/megumi.jpg",
    description: "My attitude is inherited, not borrowed",
  },
  {
    name: "Arbaz",
    image: "./Assets/Sukuna.jpg",
    description: "My mindset is too high for others to decode",
  },
  {
    name: "Hamza",
    image: "./Assets/Tom.jpg",
    description: "I live from the heart—pretending isn’t my style.",
  },
];

function showUsers(users) {
  // Clear existing cards first
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerHTML = "";

  users.forEach(function (user) {
    // Create main card container
    const card = document.createElement("div");
    card.className = "card";

    // Create and setup background image
    const bgImg = document.createElement("img");
    bgImg.src = user.image;
    bgImg.className = "bg-img";

    // Create blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer";

    // Create content container
    const content = document.createElement("div");
    content.className = "content";

    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = user.description;

    // Assemble the card
    content.appendChild(heading);
    content.appendChild(paragraph);
    card.appendChild(bgImg);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Add the card to the container
    cardsContainer.appendChild(card);
  });
}

// Show all users when page loads
document.addEventListener("DOMContentLoaded", () => {
  showUsers(users);

  // Add search functionality
  const searchInput = document.querySelector('input[type="text"]');
  searchInput.addEventListener("input", (e) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    showUsers(filteredUsers);
  });
});
