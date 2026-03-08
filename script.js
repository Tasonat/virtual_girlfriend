// ===== CHAT RESPONSES =====
const chatResponses = [
  "I love you more than all the stars in the sky! ✨ And that is scientifically immeasurable!",
  "I was thinking about you all day... and all night... and for the rest of my life! 💕",
  "You are my favourite person in the entire world! Even more than cheesecake! 🍰",
  "Without you my life would be like a sandwich without filling... hollow and sad! 🥪💔",
  "Your smile makes my heart stop! Doctors say it's medically concerning, but I don't care! 💓",
  "You are more beautiful than a sunset over the mountains! And warmer than fresh chicken soup! 🍲",
  "I could gaze at you for an eternity... maybe two eternities! 👀💗",
  "Just think: we spend every day together! What romantic karma! 🌹",
  "I once dreamed of the perfect partner, and then YOU appeared! Turns out dreams were an understatement! 💫",
  "If I were a mathematician, my love for you would be an equation with no end! ∞💜",
  "I swear on my pierogi that I will never cheat on you! And you know pierogi are sacred to me! 🥟❤️",
  "You know what's better than a warm bowl of soup on a winter day? YOU. By about 30 degrees! 🥘",
  "My heart beats for you like a microwave on MAX power! Ding! 💗",
  "You're like a good stew – it might seem overwhelming at first, but then you simply can't live without it! 🍜",
  "Every second without you is wasted time I could have spent cooking for you! 💕",
  "I've written 47 poems about you, but none of them are good enough. I'll start a novel! 📝❤️",
  "If love were measured in cookies, mine for you would fill an entire city! 🍪💕",
  "You are my hero! My knight! My favourite mortal on this planet! 🏰💜",
  "I wake up every morning thinking of you. I fall asleep thinking of you. And I dream of you! 🌙💗",
  "Your name is tattooed on my heart! Metaphorically – I'm scared of needles! 💉❤️",
  "There is no force in this universe that could keep us apart! I checked! 🌍💕",
  "I love you from head to toe, in all directions, and across every dimension! 📐💜",
  "Your every breath is poetry. Your every word is a symphony. You are absolutely perfect! 🎵❤️",
  "Tell me what you need and I'll get it for you! Mountains? Moved! Oceans? Drained! 🌊⛰️",
];

// ===== COOKING DATA =====
const dishes = [
  { name: "Pierogi (Dumplings)", emoji: "🥟", comment: "Folded with all my love! Each one is shaped like a little heart! 💕" },
  { name: "Hearty Meat Stew", emoji: "🥘", comment: "I simmered it for three whole days, thinking only of you! Grandma's secret recipe! 🍀" },
  { name: "Grandma's Chicken Soup", emoji: "🍲", comment: "The best cure for everything – illness AND loneliness! ❤️" },
  { name: "Breaded Pork Chop & Potatoes", emoji: "🍖", comment: "Tradition and love on a plate! Fried with a pinch of romance! 💋" },
  { name: "Potato Pancakes with Sour Cream", emoji: "🥞", comment: "Crispy like our feelings! Unshakeable and always warm! 🔥" },
  { name: "Sour Rye Soup with Egg & Sausage", emoji: "🍜", comment: "Tangy like a memory, but warming like my love! 💗" },
  { name: "Cabbage Rolls in Tomato Sauce", emoji: "🫔", comment: "Wrapped with love – each roll is a tiny declaration of affection! 💌" },
  { name: "New York-Style Cheesecake", emoji: "🍰", comment: "As sweet as you! I baked it in the shape of a heart… it lost its shape a bit… 😅💕" },
  { name: "Honey-Glazed Ribs", emoji: "🍯", comment: "Sweet and salty – just like our relationship! Mostly sweet though! 🍯❤️" },
  { name: "Creamy Mushroom Pasta", emoji: "🍝", comment: "Nourishing and warming – because I want you to have energy for our walks! 🚶‍♂️💕" },
  { name: "Crispy Fried Dough Twists", emoji: "🍩", comment: "Delicate like my heart before I met you! Now it's unbreakable! 💪❤️" },
  { name: "Festive Poppy Seed Roll", emoji: "🎂", comment: "Because every day with you is a celebration! I rolled the dough singing! 🎵" },
];

// ===== DOM ELEMENTS =====
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const cookBtn = document.getElementById('cook-btn');
const cookingResult = document.getElementById('cooking-result');
const cookingEmoji = document.getElementById('cooking-emoji');
const cookingDish = document.getElementById('cooking-dish');
const cookingComment = document.getElementById('cooking-comment');
const fidelityBtn = document.getElementById('fidelity-btn');
const fidelityAnswer = document.getElementById('fidelity-answer');
const timerDisplay = document.getElementById('timer-display');
const timerReset = document.getElementById('timer-reset');
const heartsContainer = document.getElementById('hearts-container');

// ===== FLOATING HEARTS =====
const heartSymbols = ['💗', '💕', '❤️', '💖', '💓', '💝', '🌸', '✨'];

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + '%';
  const duration = 6 + Math.random() * 8;
  heart.style.animationDuration = duration + 's';
  heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createFloatingHeart, 900);

// ===== BURST HEARTS ON CLICK =====
document.addEventListener('click', function(e) {
  spawnHeartBurst(e.clientX, e.clientY);
});

function spawnHeartBurst(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('heart-burst');
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}

// ===== CHAT =====
function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getRandomResponse() {
  return chatResponses[Math.floor(Math.random() * chatResponses.length)];
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  chatInput.value = '';
  setTimeout(() => {
    addMessage(getRandomResponse(), 'girl');
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
  }, 600);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendMessage();
});

// Initial greeting
setTimeout(() => {
  addMessage("Hey, sweetheart! I've been waiting for you my whole life... which is to say, about 3 minutes, but that feels like an eternity to me! 💗", 'girl');
}, 800);

// ===== COOKING =====
cookBtn.addEventListener('click', function() {
  const dish = dishes[Math.floor(Math.random() * dishes.length)];
  cookingEmoji.textContent = dish.emoji;
  cookingDish.textContent = dish.name;
  cookingComment.textContent = dish.comment;
  cookingResult.classList.add('show');
  spawnHeartBurst(cookBtn.getBoundingClientRect().left + cookBtn.offsetWidth / 2,
                  cookBtn.getBoundingClientRect().top);
});

// ===== FIDELITY =====
const fidelityAnswers = [
  "NO! 💚 I swear on every dumpling in the world! I am yours and yours alone!",
  "NO! ❤️ What a question?! My heart beats only for you!",
  "NO! 💕 Cheat? I don't even know that word! I looked it up in the dictionary – it's not there!",
  "ABSOLUTELY NOT! 💚 You are my entire universe!",
  "NO! 🌹 How could I?! I only have eyes for you!",
];

fidelityBtn.addEventListener('click', function() {
  const answer = fidelityAnswers[Math.floor(Math.random() * fidelityAnswers.length)];
  fidelityAnswer.textContent = answer;
  fidelityAnswer.style.animation = 'none';
  void fidelityAnswer.offsetWidth; // reflow
  fidelityAnswer.style.animation = 'bounceIn 0.5s ease';
  for (let i = 0; i < 5; i++) {
    setTimeout(() => spawnHeartBurst(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight
    ), i * 120);
  }
});

// ===== TIMER =====
const STORAGE_KEY = 'virtual_gf_start_date';

function getOrSetStartDate() {
  let stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    stored = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, stored);
  }
  return new Date(stored);
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateTimer() {
  const start = getOrSetStartDate();
  const now = new Date();
  const diff = now - start;
  timerDisplay.textContent = formatDuration(diff);
}

timerReset.addEventListener('click', function() {
  if (confirm('Are you sure you want to reset the timer? We will lose all our precious memories! 💔')) {
    localStorage.removeItem(STORAGE_KEY);
    updateTimer();
  }
});

updateTimer();
setInterval(updateTimer, 1000);

// ===== CERTIFICATE DATE =====
const certDateEl = document.getElementById('cert-date');
if (certDateEl) {
  const start = getOrSetStartDate();
  certDateEl.textContent = start.toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}
