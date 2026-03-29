function setMood(mood) {
  const result = document.getElementById('result');
  const container = document.getElementById('container');
  const lastMoodText = document.getElementById('lastMood');

  // Show the result card
  result.style.display = "block";

  // Remove previous mood classes
  container.className = 'container';

  // Set mood-specific background & content
  if (mood === 'happy') {
    container.classList.add('happy-bg');
    result.innerHTML = `
      <h3>Keep smiling 😊</h3>
      <p>Go out and enjoy your day!</p>
      <a href="https://youtu.be/Q_mWs5nnqb0?si=ww_h20jY7qYQrH6L" target="_blank">🎵 Happy Music</a>
      <a href="https://youtu.be/P7sewAMisJQ?si=h8sbp-BMzZr4ahUZ" target="_blank">🎵 Happy Music</a> 
    `;
  } else if (mood === 'lazy') {
    container.classList.add('lazy-bg');
    result.innerHTML = `
      <h3>Take it easy 😴</h3>
      <p>Rest and recharge yourself</p>
      <a href="https://youtu.be/CmHfWSxt0UQ?si=n6F0z7_k4Ha4hug2" target="_blank">🎵 Chill Music</a>
    `;
  } else if (mood === 'cool') {
    container.classList.add('cool-bg');
    result.innerHTML = `
      <h3>Stay cool 😎</h3>
      <p>You're doing great!</p>
      <a href="https://youtu.be/d1ldnvNoAE4?si=gKcVOFQkxCYr-jEt" target="_blank">🎵 Vibes</a>
    `;
  } else if (mood === 'angry') {
    container.classList.add('angry-bg');
    result.innerHTML = `
      <h3>Relax 😌</h3>
      <p>Take a deep breath</p>
      <a href="https://youtu.be/sq2CTj7OOfY?si=_JYyEwir2jDb1evn" target="_blank">🎵 Calm Music</a>
    `;
  }

  // Save last mood
  lastMoodText.innerText = "Last mood: " + mood;
  localStorage.setItem('lastMood', mood);
};

// On page load
window.onload = function() {
  const savedMood = localStorage.getItem('lastMood');
  const result = document.getElementById('result');

  if (savedMood) {
    result.style.display = "block"; // show result
    setMood(savedMood);
  } else {
    result.style.display = "none"; // hide card until click
  }
};