import './style.css';
import dynamicScore from './modules/scores.js';

const refreshButton = document.getElementById('refresh');
const user = document.getElementById('user');
const score = document.getElementById('score');
const submitButton = document.getElementById('submit');

// send data to the API
const sendData = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ai5Nvjw0VJjtGbkLNuyF/scores', {
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
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ai5Nvjw0VJjtGbkLNuyF/scores', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const gamerArray = await response.json();
    dynamicScore(user.value, score.value);
    return gamerArray;
};
refreshButton.addEventListener('click', receiveData);