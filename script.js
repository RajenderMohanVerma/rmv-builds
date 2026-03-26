const heartsContainer = document.getElementById('hearts-container');
const mainContainer = document.getElementById('main-container');
const question = document.getElementById('question');
const message = document.getElementById('message');
const gifContainer = document.getElementById('gif-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Photo Configuration - Add your photo URLs here
 const photoGallery = [
  { src: './Static/images/first_img.jpg', caption: '💕 Us Together' },
  { src: './Static/images/second_img.jpg', caption: '😍 You make me smile' },
  { src: './Static/images/third_img.jpg', caption: '🌹 My Love' },
  { src: './Static/images/fourth_img.jpg', caption: '💑 Forever & Always' }
];

// Expanded Rejection Stages with more emotional messages
const rejectionStages = [
  {
    question: "Please think again! 🙄",
    message: "itni jaldi na matt bolo😥",
    gifPath: "mochi.gif"
  },
  {
    question: "Ek aur baar Soch lo! 😣",
    message: "kyu aisa kar rahi ho Pls Maan jao😣",
    gifPath: "couple-forgive-me.gif"
  },
  {
    question: "Beautiful pls Man jao na! 😭",
    message: "Bhut glt baat hai yrr😭 Kitna code likh waogi?",
    gifPath: "peach-goma-phone.gif"
  },
  {
    question: "Meri bestie... please? 🥺",
    message: "Ab to maan jao 😢",
    gifPath: "maaan jao.gif"
  },
  {
    question: "I'll code forever for you! 💻",
    message: "Just say YES! Karunga jo chahogi 🥺",
    gifPath: "6.gif"
  }
];

let currentStage = -1;
let currentPhotoIndex = 0;

// Audio Paths - Update with your audio URLs
const audioConfig = {
  backgroundMusic: 'https://assets.codepen.io/3685267/AdobeStock_126235000_Preview.mp3',
  clickSound: 'https://assets.codepen.io/3685267/click.mp3',
  successSound: 'https://assets.codepen.io/3685267/success.wav'
};

// Create audio elements
let bgaudio = new Audio(audioConfig.backgroundMusic);
bgaudio.loop = true;
bgaudio.volume = 0.3;

// Enhanced Particle System
function createParticle(type = 'heart') {
  const particle = document.createElement('div');
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = Math.random() * 3 + 2 + 's';
  particle.style.opacity = Math.random() * 0.8 + 0.2;

  if (type === 'heart') {
    particle.classList.add('heart');
    particle.innerHTML = '❤️';
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
  } else if (type === 'sparkle') {
    particle.classList.add('sparkle');
    particle.innerHTML = '✨';
    particle.style.fontSize = Math.random() * 15 + 8 + 'px';
  } else if (type === 'bubble') {
    particle.classList.add('bubble');
    const size = Math.random() * 20 + 10;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
  }

  heartsContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000);
}

// Create mixed particles
function createMixedParticles() {
  const types = ['heart', 'sparkle', 'bubble'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  createParticle(randomType);
}

// Particle creation interval
const particleInterval = setInterval(createMixedParticles, 300);

// Burst effect on success
function createBurstEffect() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createParticle('heart');
      createParticle('sparkle');
    }, i * 30);
  }
}

// Function to move element randomly
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Gallery Modal Management
function initGalleryModal() {
  const modal = document.getElementById('gallery-modal');
  const closeBtn = document.querySelector('.gallery-close');
  const galleryBtn = document.getElementById('gallery-btn');
  const prevBtn = document.getElementById('prev-photo');
  const nextBtn = document.getElementById('next-photo');

  if (!galleryBtn) return;

  galleryBtn.addEventListener('click', () => {
    modal.classList.add('active');
    currentPhotoIndex = 0;
    displayPhoto();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length;
      displayPhoto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex + 1) % photoGallery.length;
      displayPhoto();
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function displayPhoto() {
  const photoImg = document.getElementById('gallery-photo');
  const caption = document.getElementById('photo-caption');
  
  if (photoImg && photoGallery[currentPhotoIndex]) {
    photoImg.src = photoGallery[currentPhotoIndex].src;
    if (caption) {
      caption.textContent = `${currentPhotoIndex + 1} / ${photoGallery.length} - ${photoGallery[currentPhotoIndex].caption}`;
    }
  }
}

// Logic for No button
noBtn.addEventListener('click', () => {
  playSound(audioConfig.clickSound);
  currentStage++;
  if (currentStage < rejectionStages.length) {
    updateContent(rejectionStages[currentStage]);
  } else {
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

  gifContainer.innerHTML = `<img src="./Static/images/${stage.gifPath}" alt="GIF" style="max-width: 100%; height: auto; border-radius: 15px;">`;
}

// Success Logic
yesBtn.addEventListener('click', () => {
  playSound(audioConfig.successSound);
  mainContainer.classList.add('success');
  question.innerHTML = "I knew it! You Love me! 💕";
  message.innerText = "You've made me the happiest person alive! 😘";
  gifContainer.innerHTML = `<img src="./Static/images/7.gif" alt="Success GIF" style="max-width: 100%; height: auto; border-radius: 15px;">`;

  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';

  // Create burst effect
  createBurstEffect();

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
    confetti(Object.assign({}, defaults, { 
      particleCount, 
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
    }));
    confetti(Object.assign({}, defaults, { 
      particleCount, 
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
    }));
  }, 250);

  // Show gallery after success
  setTimeout(() => {
    const galleryBtn = document.getElementById('gallery-btn');
    if (galleryBtn) {
      galleryBtn.style.display = 'block';
    }
  }, 1000);
});

// Audio Control Functions
function playSound(soundUrl) {
  if (!soundUrl) return;
  try {
    const audio = new Audio(soundUrl);
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed:', e));
  } catch (e) {
    console.log('Audio error:', e);
  }
}

function toggleBackgroundMusic() {
  const musicToggle = document.getElementById('music-toggle');
  if (!musicToggle) return;

  if (bgaudio.paused) {
    bgaudio.play().catch(e => console.log('Background music failed:', e));
    musicToggle.textContent = '🔊';
  } else {
    bgaudio.pause();
    musicToggle.textContent = '🔇';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initGalleryModal();
  
  // Start background music on first interaction
  document.addEventListener('click', () => {
    if (bgaudio.paused) {
      bgaudio.play().catch(e => console.log('Background music failed:', e));
    }
  }, { once: true });
});
