const originalURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
// Create a new game
const game = {
  name: 'Tetris',
};
// function to get ID (only used once)
const getID = async () => {
  const response = await fetch(originalURL, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const APId = await response.json();
  return APId;
};

export default getID;