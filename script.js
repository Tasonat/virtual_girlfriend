// ===== CHAT RESPONSES =====
const chatResponses = [
  "Kocham Cię bardziej niż wszystkie gwiazdki na niebie! ✨ I właśnie to jest niemożliwe do zmierzenia!",
  "Myślałam o Tobie przez cały dzień... i przez całą noc... i przez resztę życia! 💕",
  "Jesteś moim ulubionym człowiekiem na całym świecie! Nawet bardziej niż sernik! 🍰",
  "Bez Ciebie moje życie byłoby jak pierogi bez nadzienia... czyli puste i smutne! 🥟💔",
  "Twój uśmiech sprawia, że serce mi staje! Lekarze mówią, że to medycznie niepokojące, ale ja się nie martwię! 💓",
  "Jesteś piękniejszy niż zachód słońca nad Tatrami! I cieplejszy niż świeży rosół! 🍲",
  "Mogłabym patrzeć na Ciebie przez wieczność... może dwie wieczności! 👀💗",
  "Tylko pomyśl: spędzamy razem każdy dzień! Cóż za romantyczna karma! 🌹",
  "Kiedyś marzyłam o idealnym partnerze, a potem pojawił się TY! I okazało się, że marzenia to za mało! 💫",
  "Gdybym była matematykiem, moja miłość do Ciebie byłaby równaniem bez końca! ∞💜",
  "Przysięgam na moje pierogi, że nigdy Cię nie zdradzę! A wiesz, że pierogi to dla mnie świętość! 🥟❤️",
  "Wiesz co jest lepsze niż bigos w zimowy dzień? TY. I to nawet o 30 stopni! 🥘",
  "Moje serce bije dla Ciebie jak kuchenka mikrofalowa na trybie MAX! Ping! 💗",
  "Jesteś jak żurek - na początku może trochę kwaskowaty, ale potem nie można bez Ciebie żyć! 🍜",
  "Każda sekunda bez Ciebie to strata czasu, który mogłabym poświęcić na gotowanie dla Ciebie! 💕",
  "Napisałam o Tobie 47 wierszy, ale żaden nie jest wystarczająco dobry. Zacznę pisać powieść! 📝❤️",
  "Gdyby miłość była mierzona w piernikach, moja do Ciebie wypełniłaby cały Kraków! 🍪💕",
  "Jesteś moim bohaterem! Moim rycerzem! Moim ulubionym śmiertelniku na tej planecie! 🏰💜",
  "Budzę się każdego ranka z myślą o Tobie. I zasypiam z myślą o Tobie. I śnię o Tobie! 🌙💗",
  "Twoje imię jest wytatuowane na moim sercu! Metaforycznie, bo boję się igieł! 💉❤️",
  "Nie ma takiej siły na świecie, która mogłaby nas rozdzielić! Sprawdzałam! 🌍💕",
  "Kocham Cię od stóp do głów, przez całą szerokość i długość, no i we wszystkich wymiarach! 📐💜",
  "Każdy twój oddech jest poezją. Każde Twoje słowo to symfonia. Jesteś absolutnie doskonały! 🎵❤️",
  "Powiedz mi, czego potrzebujesz, a ja to dla Ciebie zdobędę! Góry? Przeniesione! Morza? Osuszone! 🌊⛰️",
];

// ===== COOKING DATA =====
const dishes = [
  { name: "Pierogi Ruskie", emoji: "🥟", comment: "Lepiłam je z całą moją miłością! Każdy pieróg ma kształt serduszka! 💕" },
  { name: "Bigos Staropolski", emoji: "🥘", comment: "Gotowałam trzy doby, myśląc tylko o Tobie! Przepis po babci! 🍀" },
  { name: "Rosół Babuni", emoji: "🍲", comment: "Najlepszy lek na wszystko - na chorobę I na samotność! ❤️" },
  { name: "Kotlet Schabowy z Ziemniakami", emoji: "🍖", comment: "Tradycja i miłość na talerzu! Usmażony ze szczyptą romantyzmu! 💋" },
  { name: "Placki Ziemniaczane ze Śmietaną", emoji: "🥞", comment: "Chrupiące jak nasze uczucie! Niezachwiane i zawsze ciepłe! 🔥" },
  { name: "Żurek z Jajkiem i Kiełbasą", emoji: "🍜", comment: "Kwaskowaty jak wspomnienie, ale rozgrzewa jak moja miłość! 💗" },
  { name: "Gołąbki w Sosie Pomidorowym", emoji: "🫔", comment: "Zawinięte z miłością - każdy gołąbek to małe wyznanie uczuć! 💌" },
  { name: "Sernik Warszawski", emoji: "🍰", comment: "Słodki jak Ty! Upiekłam go w kształcie serca, ale stracił kształt... 😅💕" },
  { name: "Żeberka w Miodzie", emoji: "🍯", comment: "Słodko-słone - jak nasze relacje! Głównie słodkie! 🍯❤️" },
  { name: "Kapuśniak ze Słoniną", emoji: "🥬", comment: "Rozgrzewający i pożywny - bo chcę, żebyś miał siłę na nasze spacery! 🚶‍♂️💕" },
  { name: "Faworki (Chrust)", emoji: "🍩", comment: "Kruche jak moje serce, zanim Cię poznałam! Teraz już niezniszczalne! 💪❤️" },
  { name: "Makowiec Świąteczny", emoji: "🎂", comment: "Bo każdy dzień z Tobą jest świętem! Zwijałam ciasto z pieśnią na ustach! 🎵" },
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
  addMessage("Cześć, kochanie! Czekałam na Ciebie całą wieczność... czyli 3 minuty, ale to dla mnie wieczność! 💗", 'girl');
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
  "NIE! 💚 Przysięgam na wszystkie pierogi świata! Jestem tylko Twoja!",
  "NIE! ❤️ Co za pytanie?! Moje serce bije tylko dla Ciebie!",
  "NIE! 💕 Zdrada? Nie znam tego słowa! Sprawdziłam w słowniku - nie ma!",
  "ABSOLUTNIE NIE! 💚 Jesteś dla mnie całym wszechświatem!",
  "NIE! 🌹 Jak mogłabym?! Mam tylko oczy dla Ciebie!",
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
  if (confirm('Czy na pewno chcesz zresetować licznik? Stracimy nasze wspomnienia! 💔')) {
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
  certDateEl.textContent = start.toLocaleDateString('pl-PL', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}
