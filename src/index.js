import './style.css';
import dynamicScore from './modules/scores.js';

const originalURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const id = 'gWhcVuMkx7y5jeewikfn';
const refreshButton = document.getElementById('refresh');
const user = document.getElementById('user');
const score = document.getElementById('score');
const submitButton = document.getElementById('submit');
const scoreList = document.getElementById('ul');

// send data to the API
const sendData = async () => {
  const response = await fetch(`${originalURL}/games/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const success = await response.json();
  return success;
};
submitButton.addEventListener('click', sendData);
// function to receive data and parse JSON
const receiveData = async () => {
  const response = await fetch(`${originalURL}/games/${id}/scores/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gamerArray = await response.json();
  const actualArray = gamerArray.result;
  scoreList.innerHTML = '';
  actualArray.forEach((item) => { dynamicScore(item.user, item.score); });
  user.value = null;
  score.value = null;
};
refreshButton.addEventListener('click', receiveData);