// https://codepen.io/jamesqquick/pen/XWJxBQv

const searchBar = document.getElementById("searchBar"); // Gets the reference to the search bar
const gameList = ['Dota 2', 'Battlefield 2042', 'League Of Legends', 'Valorant', 'World of Warcraft', 'CS-GO', 'Fortnite', 'World of Tanks'];
const charactersList = document.getElementById('charactersList');
const gameSearchBar = document.getElementById('searchBar');
let proPlayers = [];

const resizeBrowser = () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "navbarlinks") {
    x.className += " responsive";
  } else {
    x.className = "navbarlinks";
  }
}

// keyUp -> anytime a key is pressed
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredGame = gameList.filter(gameName => {
    return gameName.toLowerCase().includes(searchString);
  });
});

gameSearchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPlayers = proPlayers.filter((player) => {
      return (
        player.name.toLowerCase().includes(searchString) ||
        player.steamid.toLowerCase().includes(searchString)
      );
    });
    console.log(filteredPlayers);
    displayPlayers(filteredPlayers);
  });
  
  const loadPlayers = async () => {
    try {
      const res = await fetch('https://api.opendota.com/api/proPlayers');
      proPlayers = await res.json();
      displayPlayers(proPlayers);
    } catch (err) {
      console.error(err);
    }
  };
  
  const displayPlayers = (players) => {
    const htmlString = players
      .map((player) => {
        return `
            <li class="player">
                <a target='_blank' href=${player.profileurl}><h2>${player.name}</h2></a>
                <p>SteamID: ${player.steamid}</p>
                <img src="${player.avatarfull}"></img>
            </li>
        `;
      })
      .join('');
      playersList.innerHTML = htmlString;
  };
  
  loadPlayers();