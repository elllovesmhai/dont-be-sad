const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const loveMessage = document.getElementById('love-message');

// No button moves to a random position
noBtn.addEventListener('click', () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

// Yes button reveals the message
yesBtn.addEventListener('click', () => {
  document.querySelector('.box').style.display = 'none';
  loveMessage.classList.remove('hidden');
});
