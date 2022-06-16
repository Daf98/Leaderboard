import './style.css';
import dynamicScore from './modules/scores.js';

const originalURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const id = 'ai5Nvjw0VJjtGbkLNuyF';
const refreshButton = document.getElementById('refresh');
const user = document.getElementById('user');
const score = document.getElementById('score');
const submitButton = document.getElementById('submit');

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
  if (user.value) {
    dynamicScore(user.value, score.value);
  }
  user.value = null;
  score.value = null;
  return gamerArray;
};
refreshButton.addEventListener('click', receiveData);