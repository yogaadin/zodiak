// ========== DATABASE ZODIAC MODERN & CASUAL ==========
const zodiacLibrary = {
    aries: {
        name: "Aries", symbol: "♈", emoji: "🐏", element: "🔥 Api", range: "21 Mar – 19 Apr",
        matchWith: "Leo & Sagitarius", baseComp: 92,
        lucky: "Merah / Angka 9", traits: ["Berani", "Spontan", "Energik", "Leader"],
        desc: "Kamu itu inisiator sejati, nggak takut ambil risiko dan selalu punya ide gila yang jadi kenyataan.",
        career: "Startup founder, atlet, creative director."
    },
    taurus: {
        name: "Taurus", symbol: "♉", emoji: "🐮", element: "🌍 Bumi", range: "20 Apr – 20 Mei",
        matchWith: "Virgo & Capricorn", baseComp: 88,
        lucky: "Hijau / Angka 6", traits: ["Loyal", "Sabar", "Humble", "Foodie"],
        desc: "Orangnya stabil kayak gunung, tapi kalau sudah nyaman bisa sangat asyik dan dependable.",
        career: "Chef, desainer, wealth manager."
    },
    gemini: {
        name: "Gemini", symbol: "♊", emoji: "👯", element: "💨 Udara", range: "21 Mei – 20 Jun",
        matchWith: "Libra & Aquarius", baseComp: 95,
        lucky: "Kuning / Angka 5", traits: ["Adaptif", "Cerdas", "Funny", "Suka ganti topik"],
        desc: "Paling lincah, selalu penasaran dan punya dua sisi yang bikin situasi nggak pernah membosankan.",
        career: "Podcaster, jurnalis, marketing."
    },
    cancer: {
        name: "Cancer", symbol: "♋", emoji: "🦀", element: "💧 Air", range: "21 Jun – 22 Jul",
        matchWith: "Scorpio & Pisces", baseComp: 90,
        lucky: "Silver / Angka 2", traits: ["Peduli", "Intuitif", "Kreatif", "Loyal"],
        desc: "Hati lembut tapi cangkang keras, kamu pelindung circle terbaik dan super imajinatif.",
        career: "Psikolog, illustrator, guru."
    },
    leo: {
        name: "Leo", symbol: "♌", emoji: "🦁", element: "🔥 Api", range: "23 Jul – 22 Ags",
        matchWith: "Aries & Sagittarius", baseComp: 96,
        lucky: "Emas / Angka 1", traits: ["PD", "Dermawan", "Karismatik", "Berani"],
        desc: "Sorot matahari! Kamu suka dihargai dan selalu memberikan energi positif ke sekitar.",
        career: "Entertainer, pemimpin event, brand ambassador."
    },
    virgo: {
        name: "Virgo", symbol: "♍", emoji: "🌾", element: "🌍 Bumi", range: "23 Ags – 22 Sep",
        matchWith: "Taurus & Capricorn", baseComp: 87,
        lucky: "Coklat / Angka 7", traits: ["Analitis", "Rapi", "Teliti", "Helpful"],
        desc: "Sangat detail-oriented, suka ngatur dan membantu, perfeksionis tapi baik hati.",
        career: "Data analyst, editor, medical field."
    },
    libra: {
        name: "Libra", symbol: "♎", emoji: "⚖️", element: "💨 Udara", range: "23 Sep – 22 Okt",
        matchWith: "Gemini & Aquarius", baseComp: 93,
        lucky: "Biru pastel / Angka 6", traits: ["Diplomatis", "Estetik", "Sosial", "Fair"],
        desc: "Pembawa damai, suka keindahan dan keseimbangan, bisa lihat dari berbagai sisi.",
        career: "Lawyer, desainer grafis, humas."
    },
    scorpio: {
        name: "Scorpio", symbol: "♏", emoji: "🦂", element: "💧 Air", range: "23 Okt – 21 Nov",
        matchWith: "Cancer & Pisces", baseComp: 91,
        lucky: "Merah tua / Angka 9", traits: ["Intens", "Misterius", "Setia", "Fokus"],
        desc: "Penuh misteri, kamu punya intuisi tajam dan nggak akan mengkhianati kepercayaan.",
        career: "Detektif, researcher, psikolog forensik."
    },
    sagittarius: {
        name: "Sagittarius", symbol: "♐", emoji: "🏹", element: "🔥 Api", range: "22 Nov – 21 Des",
        matchWith: "Aries & Leo", baseComp: 94,
        lucky: "Ungu / Angka 3", traits: ["Optimis", "Petualang", "Jujur", "Filosofis"],
        desc: "Jiwa bebas dan pemburu mimpi, kamu nggak suka dibatasi dan selalu ingin tahu.",
        career: "Travel blogger, fotografer, outdoor guide."
    },
    capricorn: {
        name: "Capricorn", symbol: "♑", emoji: "🐐", element: "🌍 Bumi", range: "22 Des – 19 Jan",
        matchWith: "Taurus & Virgo", baseComp: 86,
        lucky: "Hitam / Angka 8", traits: ["Disiplin", "Ambisius", "Tangguh", "Sabar"],
        desc: "Pekerja keras sejati, kamu punya tekad baja dan selalu mencapai target.",
        career: "CEO, arsitek, financial advisor."
    },
    aquarius: {
        name: "Aquarius", symbol: "♒", emoji: "🏺", element: "💨 Udara", range: "20 Jan – 18 Feb",
        matchWith: "Gemini & Libra", baseComp: 89,
        lucky: "Biru listrik / Angka 4", traits: ["Inovatif", "Unik", "Humanis", "Independent"],
        desc: "Si paling out of the box, kamu futuristik dan suka bawa angin segar.",
        career: "IT developer, aktivis, penemu."
    },
    pisces: {
        name: "Pisces", symbol: "♓", emoji: "🐟", element: "💧 Air", range: "19 Feb – 20 Mar",
        matchWith: "Cancer & Scorpio", baseComp: 97,
        lucky: "Biru laut / Angka 7", traits: ["Empatik", "Artistik", "Imajinatif", "Penyayang"],
        desc: "Jiwa seni dan air, mudah merasakan getaran orang lain, sangat kreatif.",
        career: "Musisi, ilustrator, art therapist."
    }
};

// DOM Elements
const forecastBtn = document.getElementById('forecastBtn');
const zodiacSelect = document.getElementById('zodiacSelect');
const nickInput = document.getElementById('userNick');
const resultPanel = document.getElementById('resultPanel');
const darkToggle = document.getElementById('darkmodeToggle');
const modeLabel = document.getElementById('modeLabel');

// Dark mode state
let darkModeActive = false;

function applyDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        modeLabel.innerText = 'Light mode';
    } else {
        document.body.classList.remove('dark');
        modeLabel.innerText = 'Dark mode';
    }
}

darkToggle.addEventListener('click', () => {
    darkModeActive = !darkModeActive;
    applyDarkMode(darkModeActive);
});

// Helper random dynamic compatibility (menambah keseruan)
function getDynamicComp(baseComp) {
    let shift = Math.floor(Math.random() * 9) - 4; // -4 .. +4
    let newComp = baseComp + shift;
    if (newComp > 99) newComp = 99;
    if (newComp < 68) newComp = 68;
    return newComp;
}

// Fungsi generate ramalan
function generateForecast() {
    const selectedKey = zodiacSelect.value;
    const userNick = nickInput.value.trim();
    const displayName = userNick === "" ? "bestie" : userNick;
    const data = zodiacLibrary[selectedKey];
    if (!data) return;

    const dynamicComp = getDynamicComp(data.baseComp);
    const randomQuoteArr = [
        "vibe kamu cocok banget sama zodiak ini 🔥",
        "aura positivity meningkat drastis ✨",
        "zodiak ini bikin kamu makin glow up!",
        "no cap, ini ramalan paling akurat buat kamu 🧢",
        "totally underrated sih, kamu cocok banget 💯",
        "sistem pakar bilang: kecocokanmu tinggi banget! 📊",
        "berdasarkan analisis zodiak, kamu terbaik! ⭐"
    ];
    const randomQuote = randomQuoteArr[Math.floor(Math.random() * randomQuoteArr.length)];

    const resultHtml = `
        <div class="zod-card">
            <div class="card-header">
                <div class="zod-info">
                    <div class="zod-emoji">${data.emoji} ${data.symbol}</div>
                    <div>
                        <div class="zod-name">${data.name} · ${displayName}</div>
                        <div class="zod-date">📆 ${data.range}</div>
                    </div>
                </div>
                <div class="compat-chip">
                    <div class="compat-score">${dynamicComp}%</div>
                    <div style="font-size: 10px; font-weight: 600;">🤝 match with ${data.matchWith.split('&')[0]}</div>
                </div>
            </div>

            <div class="grid-stats">
                <div class="stat-item">
                    <div class="stat-icon">⚡</div>
                    <div><div class="stat-label">Elemen</div><div class="stat-value">${data.element}</div></div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">🍀</div>
                    <div><div class="stat-label">Lucky charm</div><div class="stat-value">${data.lucky}</div></div>
                </div>
            </div>

            <div class="traits-pill">
                ${data.traits.map(tr => `<span class="pill">#${tr.toLowerCase()}</span>`).join('')}
            </div>

            <div class="desc-block">
                <div class="desc-text">✨ <strong>kepribadianmu vibes:</strong> ${data.desc}<br>⭐ <span style="color:var(--accent-primary);">“${randomQuote}”</span></div>
            </div>

            <div class="career-footer">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px; flex-wrap:wrap;">
                    <span>💼</span> <strong style="color:var(--text-main);">karier yang cocok banget:</strong>
                </div>
                <div class="desc-text" style="margin-bottom:4px;">${data.career}</div>
                <div style="font-size: 11px; margin-top: 10px; color: var(--text-muted); border-top: 1px dashed var(--border-light); padding-top: 8px;">✨ based on star movement + gen z mood ✨</div>
            </div>
        </div>
    `;
    resultPanel.innerHTML = resultHtml;
}

// Event listener
forecastBtn.addEventListener('click', () => {
    generateForecast();
});

// Handle enter key pada input
nickInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateForecast();
    }
});

// Show preview saat load pertama
window.addEventListener('DOMContentLoaded', () => {
    applyDarkMode(false);
    generateForecast();
});