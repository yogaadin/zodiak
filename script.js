// Zodiac Database
const zodiacLibrary = {
    aries: {
        name: "Aries", symbol: "♈", emoji: "🐏", element: "🔥 Api", range: "21 Mar – 19 Apr",
        matchWith: "Leo & Sagitarius", baseComp: 92,
        lucky: "Merah / 9", traits: ["Berani", "Spontan", "Energik", "Leader"],
        desc: "Kamu itu inisiator sejati, nggak takut ambil risiko dan selalu punya ide gila yang jadi kenyataan.",
        career: "Startup founder, atlet, creative director."
    },
    taurus: {
        name: "Taurus", symbol: "♉", emoji: "🐮", element: "🌍 Bumi", range: "20 Apr – 20 Mei",
        matchWith: "Virgo & Capricorn", baseComp: 88,
        lucky: "Hijau / 6", traits: ["Loyal", "Sabar", "Humble", "Foodie"],
        desc: "Orangnya stabil kayak gunung, tapi kalau sudah nyaman bisa sangat asyik.",
        career: "Chef, desainer, wealth manager."
    },
    gemini: {
        name: "Gemini", symbol: "♊", emoji: "👯", element: "💨 Udara", range: "21 Mei – 20 Jun",
        matchWith: "Libra & Aquarius", baseComp: 95,
        lucky: "Kuning / 5", traits: ["Adaptif", "Cerdas", "Funny", "Dinamis"],
        desc: "Paling lincah, selalu penasaran dan punya dua sisi yang bikin situasi nggak pernah membosankan.",
        career: "Podcaster, jurnalis, marketing."
    },
    cancer: {
        name: "Cancer", symbol: "♋", emoji: "🦀", element: "💧 Air", range: "21 Jun – 22 Jul",
        matchWith: "Scorpio & Pisces", baseComp: 90,
        lucky: "Silver / 2", traits: ["Peduli", "Intuitif", "Kreatif", "Loyal"],
        desc: "Hati lembut tapi cangkang keras, kamu pelindung circle terbaik dan super imajinatif.",
        career: "Psikolog, illustrator, guru."
    },
    leo: {
        name: "Leo", symbol: "♌", emoji: "🦁", element: "🔥 Api", range: "23 Jul – 22 Ags",
        matchWith: "Aries & Sagittarius", baseComp: 96,
        lucky: "Emas / 1", traits: ["PD", "Dermawan", "Karismatik", "Berani"],
        desc: "Sorot matahari! Kamu suka dihargai dan selalu memberikan energi positif.",
        career: "Entertainer, pemimpin event, brand ambassador."
    },
    virgo: {
        name: "Virgo", symbol: "♍", emoji: "🌾", element: "🌍 Bumi", range: "23 Ags – 22 Sep",
        matchWith: "Taurus & Capricorn", baseComp: 87,
        lucky: "Coklat / 7", traits: ["Analitis", "Rapi", "Teliti", "Helpful"],
        desc: "Detail-oriented, suka ngatur dan membantu, perfeksionis tapi baik hati.",
        career: "Data analyst, editor, medical field."
    },
    libra: {
        name: "Libra", symbol: "♎", emoji: "⚖️", element: "💨 Udara", range: "23 Sep – 22 Okt",
        matchWith: "Gemini & Aquarius", baseComp: 93,
        lucky: "Biru pastel / 6", traits: ["Diplomatis", "Estetik", "Sosial", "Fair"],
        desc: "Pembawa damai, suka keindahan dan keseimbangan, bisa lihat dari berbagai sisi.",
        career: "Lawyer, desainer grafis, humas."
    },
    scorpio: {
        name: "Scorpio", symbol: "♏", emoji: "🦂", element: "💧 Air", range: "23 Okt – 21 Nov",
        matchWith: "Cancer & Pisces", baseComp: 91,
        lucky: "Merah tua / 9", traits: ["Intens", "Misterius", "Setia", "Fokus"],
        desc: "Penuh misteri, kamu punya intuisi tajam dan nggak akan mengkhianati kepercayaan.",
        career: "Detektif, researcher, psikolog forensik."
    },
    sagittarius: {
        name: "Sagittarius", symbol: "♐", emoji: "🏹", element: "🔥 Api", range: "22 Nov – 21 Des",
        matchWith: "Aries & Leo", baseComp: 94,
        lucky: "Ungu / 3", traits: ["Optimis", "Petualang", "Jujur", "Filosofis"],
        desc: "Jiwa bebas dan pemburu mimpi, kamu nggak suka dibatasi dan selalu ingin tahu.",
        career: "Travel blogger, fotografer, outdoor guide."
    },
    capricorn: {
        name: "Capricorn", symbol: "♑", emoji: "🐐", element: "🌍 Bumi", range: "22 Des – 19 Jan",
        matchWith: "Taurus & Virgo", baseComp: 86,
        lucky: "Hitam / 8", traits: ["Disiplin", "Ambisius", "Tangguh", "Sabar"],
        desc: "Pekerja keras sejati, kamu punya tekad baja dan selalu mencapai target.",
        career: "CEO, arsitek, financial advisor."
    },
    aquarius: {
        name: "Aquarius", symbol: "♒", emoji: "🏺", element: "💨 Udara", range: "20 Jan – 18 Feb",
        matchWith: "Gemini & Libra", baseComp: 89,
        lucky: "Biru listrik / 4", traits: ["Inovatif", "Unik", "Humanis", "Independent"],
        desc: "Si paling out of the box, kamu futuristik dan suka bawa angin segar.",
        career: "IT developer, aktivis, penemu."
    },
    pisces: {
        name: "Pisces", symbol: "♓", emoji: "🐟", element: "💧 Air", range: "19 Feb – 20 Mar",
        matchWith: "Cancer & Scorpio", baseComp: 97,
        lucky: "Biru laut / 7", traits: ["Empatik", "Artistik", "Imajinatif", "Penyayang"],
        desc: "Jiwa seni dan air, mudah merasakan getaran orang lain, sangat kreatif.",
        career: "Musisi, ilustrator, art therapist."
    }
};

// DOM Elements
const forecastBtn = document.getElementById('forecastBtn');
const userNameInput = document.getElementById('userName');
const resultPlaceholder = document.getElementById('resultPlaceholder');
const resultContent = document.getElementById('resultContent');
const themeToggle = document.getElementById('themeToggle');
const orb = document.getElementById('orb');

// Custom Select Elements
const selectWrapper = document.getElementById('zodiacSelectWrapper');
const selectTrigger = document.querySelector('.select-trigger');
const selectDropdown = document.getElementById('zodiacDropdown');
const selectedDisplay = document.getElementById('selectedZodiacDisplay');
const zodiacValueInput = document.getElementById('zodiacValue');

let selectedZodiac = 'aries';

// Custom Select Functions
function toggleDropdown() {
    selectDropdown.classList.toggle('show');
}

function selectZodiac(value, displayText) {
    selectedZodiac = value;
    zodiacValueInput.value = value;
    selectedDisplay.innerHTML = displayText;
    selectDropdown.classList.remove('show');
}

selectTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});

document.querySelectorAll('#zodiacDropdown div').forEach(option => {
    option.addEventListener('click', () => {
        const value = option.dataset.value;
        const displayText = option.textContent;
        selectZodiac(value, displayText);
    });
});

document.addEventListener('click', (e) => {
    if (!selectWrapper.contains(e.target)) {
        selectDropdown.classList.remove('show');
    }
});

// Theme Toggle
let isLightMode = false;

function setTheme(isLight) {
    if (isLight) {
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
    }
}

themeToggle.addEventListener('click', () => {
    isLightMode = !isLightMode;
    setTheme(isLightMode);
});

// Mouse move effect for orb
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    orb.style.transform = `translate(${x * 50}px, ${y * 50}px) scale(1)`;
});

// Random compatibility score
function getDynamicComp(baseComp) {
    let shift = Math.floor(Math.random() * 9) - 4;
    let newComp = baseComp + shift;
    if (newComp > 99) newComp = 99;
    if (newComp < 68) newComp = 68;
    return newComp;
}

// Generate forecast
function generateForecast() {
    const userName = userNameInput.value.trim();
    const displayName = userName === "" ? "Stargazer" : userName;
    const data = zodiacLibrary[selectedZodiac];
    
    if (!data) return;
    
    const dynamicComp = getDynamicComp(data.baseComp);
    const quotes = [
        "vibe kamu cocok banget sama zodiak ini 🔮",
        "aura positivity meningkat drastis ✨",
        "zodiak ini bikin kamu makin glow up! ⭐",
        "sistem pakar bilang: kecocokanmu tinggi banget! 📊",
        "bintang-bintang berpihak padamu 🌙"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    const resultHTML = `
        <div class="zodiac-profile">
            <div class="zodiac-avatar">${data.emoji} ${data.symbol}</div>
            <div class="zodiac-name-large">${data.name} · ${displayName}</div>
            <div class="zodiac-date-badge">📅 ${data.range}</div>
        </div>
        
        <div class="compat-badge">
            <div class="score">${dynamicComp}%</div>
            <div>🤝 Cocok dengan ${data.matchWith.split('&')[0]}</div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-chip">
                <i class="fas fa-fire"></i>
                <div>${data.element}</div>
            </div>
            <div class="stat-chip">
                <i class="fas fa-gem"></i>
                <div>🍀 ${data.lucky}</div>
            </div>
        </div>
        
        <div class="traits-container">
            ${data.traits.map(t => `<span class="trait-tag">#${t.toLowerCase()}</span>`).join('')}
        </div>
        
        <div class="desc-box">
            <p>✨ <strong>Vibe Kepribadian:</strong> ${data.desc}</p>
            <p style="margin-top: 10px; color: #a78bfa;">⭐ “${randomQuote}”</p>
        </div>
        
        <div class="career-box">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <i class="fas fa-briefcase"></i>
                <strong>Karier yang cocok:</strong>
            </div>
            <p style="font-size: 0.8rem;">${data.career}</p>
            <div style="margin-top: 12px; font-size: 0.65rem; opacity: 0.7; border-top: 1px solid rgba(139,92,246,0.2); padding-top: 8px;">
                ✨ berdasarkan analisis AI + pergerakan bintang ✨
            </div>
        </div>
    `;
    
    resultContent.innerHTML = resultHTML;
    resultPlaceholder.classList.add('hidden');
    resultContent.classList.remove('hidden');
}

// Event listener
forecastBtn.addEventListener('click', generateForecast);

// Enter key support
userNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateForecast();
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    setTheme(false);
    selectZodiac('aries', '♈ Aries · 21 Mar - 19 Apr');
});
