const searchBar = document.getElementById("searchBar"); // Gets the reference to the search bar
const gameList = ['Dota 2', 'Battlefield 2042', 'League Of Legends', 'Valorant', 'World of Warcraft', 'CS-GO', 'Fortnite', 'World of Tanks'];

// keyUp -> anytime a key is pressed
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredGame = gameList.filter(gameName => {
    return gameName.toLowerCase().includes(searchString);
  });
  console.log(filteredGame);
});

const resizeBrowser = () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "navbarlinks") {
    x.className += " responsive";
  } else {
    x.className = "navbarlinks";
  }
}