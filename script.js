const heartsContainer = document.getElementById('hearts-container');
const mainContainer = document.getElementById('main-container');
const question = document.getElementById('question');
const message = document.getElementById('message');
const gifContainer = document.getElementById('gif-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const rejectionStages = [
  {
    question: "Please think again! 🙄",
    message: "itni jaldi na matt bolo😥",
    gifId: "22050818",
    gifName: "mochi-gif-22050818"
  },
  {
    question: "Ek aur baar Soch lo! 😣",
    message: "kyu aisa kar rahi ho Pls Maan jao😣",
    gifId: "15195810",
    gifName: "couple-forgive-me-asking-for-forgiveness-begging-crying-gif-15195810"
  },
  {
    question: "Beautiful pls Man jao na! 😭",
    message: "Bhut glt baat hai yrr😭 Kitna code likh waogi?",
    gifId: "15974530976611222074",
    gifName: "peach-goma-phone-gif-15974530976611222074"
  }
];

let currentStage = -1;

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heart.style.opacity = Math.random();
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Function to move element randomly using percentages
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Logic for No button
noBtn.addEventListener('click', () => {
  currentStage++;
  if (currentStage < rejectionStages.length) {
    updateContent(rejectionStages[currentStage]);
  } else {
    // After all stages, make it run away
    noBtn.innerHTML = "Catch Me!";
    moveRandomEl(noBtn);
  }
});

noBtn.addEventListener('mouseenter', () => {
  if (currentStage >= rejectionStages.length - 1) {
    moveRandomEl(noBtn);
  }
});

// Update page content dynamically
function updateContent(stage) {
  question.innerText = stage.question;
  message.innerText = stage.message;

  // Update GIF
  gifContainer.innerHTML = `
        <div class="tenor-gif-embed" data-postid="${stage.gifId}" data-share-method="host" data-aspect-ratio="1" data-width="100%">
            <a href="https://tenor.com/view/${stage.gifName}">Sticker</a>
        </div>
    `;

  // Re-trigger Tenor embed script if necessary
  if (window.Tenor) {
    window.Tenor.Custom.load();
  } else {
    const script = document.createElement('script');
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
}

// Success Logic
yesBtn.addEventListener('click', () => {
  mainContainer.classList.add('success');
  question.innerHTML = "I knew it! You Love me a lot 😘";
  message.innerText = "You've made me the happiest person! ❤️";
  gifContainer.innerHTML = `
        <div class="tenor-gif-embed" data-postid="253027946666209433" data-share-method="host" data-aspect-ratio="1.37853" data-width="100%">
            <a href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">Mochi Cat GIF</a>
        </div>
    `;

  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';

  // Celebration Confetti
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
});
