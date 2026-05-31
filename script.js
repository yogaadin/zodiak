// --- Inisialisasi Dropdown Hari & Bulan ---
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

for (let d = 1; d <= 31; d++) daySelect.innerHTML += `<option value="${d}">${d}</option>`;
months.forEach((m, i) => monthSelect.innerHTML += `<option value="${i+1}">${m}</option>`);

// --- Database Zodiak + Data Karir Masa Kini ---
const zodiaks = [
  { name:'Aries', symbol:'♈', range:'21 Mar – 19 Apr', element:'Api', color:'#ffeedb', bg:'#ff763d', planet:'Mars', lucky:'Merah Cabe', icon:'🔥', 
    sifat:['Gaspol','Bossy','Setia Kawan','Ambisius'], 
    career: 'Founder Startup, Project Manager, / Professional Athlete',
    desc:'Lu itu definisi manusia berenergi nuklir. Nggak suka basa-basi, kalau mau sesuatu harus dapet SEKARANG. Pemimpin alami tapi kadang sumbunya agak pendek ya, senggol bacok!' },
  
  { name:'Taurus', symbol:'♉', range:'20 Apr – 20 Mei', element:'Tanah', color:'#eafaf1', bg:'#22c55e', planet:'Venus', lucky:'Hijau Matcha', icon:'🌱', 
    sifat:['Kaum Rebahan','Loyal Pol','Seleranya Elit','Keras Kepala'], 
    career: 'Financial Planner, Food Vlogger, / Luxury Brand Manager',
    desc:'Kesenangan hidup lu sederhana: makan enak, tidur nyenyak, dan saldo rekening aman. Lu tipe pacar atau sahabat idaman karena setia mampus, tapi kalau udah ngambek... beuh susah luluh!' },
  
  { name:'Gemini', symbol:'♊', range:'21 Mei – 20 Jun', element:'Udara', color:'#fefce8', bg:'#eab308', planet:'Merkurius', lucky:'Kuning Lemon', icon:'💨', 
    sifat:['Social Butterfly','Overthinker','Asik Pol','Bunglon'], 
    career: 'PR Specialist, Content Creator, / Live Streamer',
    desc:'Katanya berkepribadian ganda, padahal lu cuma punya banyak mode aja! Lu seru banget diajak deep talk ataupun ngegosip. Otak lu cepet dapet info baru, tapi cepet bosenan juga.' },
  
  { name:'Cancer', symbol:'♋', range:'21 Jun – 22 Jul', element:'Air', color:'#f0fdfa', bg:'#14b8a6', planet:'Bulan', lucky:'Perak Estetik', icon:'💧', 
    sifat:['Perasa (Sefruit Sadboy)','Intuisi Kuat','Homebody','Protektif'], 
    career: 'Psychologist, HRD, / Interior Designer (WFH Enthusiast)',
    desc:'Hati lu selembut tisu dibagi dua. Empati lu tinggi banget, suka jagain temen-temen lu layaknya seorang ibu. Tapi hati-hati, kalau lo udah masuk ke mode *shell mode*, semua orang lo cuekin.' },
  
  { name:'Leo', symbol:'👑', range:'23 Jul – 22 Ags', element:'Api', color:'#fff7ed', bg:'#f97316', planet:'Matahari', lucky:'Emas Berkilau', icon:'🦁', 
    sifat:['Main Character','Pede Pol','Royal','Drama dikit'], 
    career: 'Creative Director, Event Organizer, / Influencer / Actor',
    desc:'Lu lahir dengan aura *Main Character*. Suka jadi pusat perhatian, berhati emas, dan royal banget sama orang terdekat. Agak gengsian dikit sih, tapi aslinya lu penyayang banget.' },
  
  { name:'Virgo', symbol:'♍', range:'23 Ags – 22 Sep', element:'Tanah', color:'#fafafa', bg:'#64748b', planet:'Merkurius', lucky:'Cokelat Pastel', icon:'⚙️', 
    sifat:['Perfeksionis','Over-analyzer','Rapi Efisien','Mandiri'], 
    career: 'Data Analyst, Editor, / Quality Assurance (QA)',
    desc:'Nggak ada detail yang lolos dari mata lu. Semua harus sesuai rencana dan rapi. Lu sering jadi tempat curhat karena solusi lo realistis banget, walaupun kadang kritikan lo agak pedes.' },
  
  { name:'Libra', symbol:'♎', range:'23 Sep – 22 Okt', element:'Udara', color:'#fdf2f8', bg:'#ec4899', planet:'Venus', lucky:'Pink Pastel', icon:'⚖️', 
    sifat:['Plinplan','Peace Maker','Modis','Aesthetic Finder'], 
    career: 'Fashion Stylist, Lawyer/Mediator, / Beauty Influencer',
    desc:'Lu adalah pemburu estetika sejati. Paling anti konflik dan suka kedamaian. Tapi kalau disuruh milih tempat makan? Bisa berjam-jam karena timbangan lu nggak pernah seimbang!' },
  
  { name:'Scorpio', symbol:'🦂', range:'23 Okt – 21 Nov', element:'Air', color:'#fae8ff', bg:'#a855f7', planet:'Pluto', lucky:'Hitam Misterius', icon:'🔮', 
    sifat:['Misterius','Detektif','Setia Mati-matian','Intens'], 
    career: 'Investigator, Cyber Security, / Trader / Financial Analyst',
    desc:'Aura lu misterius bikin orang penasaran. Insting detektif lu kuat banget, jangan harap ada yang bisa bohongin lu. Sekali dikhianati kelar udah, tapi kalau lu udah sayang, bakal dijagain mati-matian.' },
  
  { name:'Sagitarius', symbol:'🏹', range:'22 Nov – 21 Des', element:'Api', color:'#e0f2fe', bg:'#0284c7', planet:'Jupiter', lucky:'Biru Elektrik', icon:'🌌', 
    sifat:['Jiwa Bebas','Pelawak','Jujur Kebablasan','Petualang'], 
    career: 'Travel Blogger, Stand-up Comedian, / Tour Guide Specialist',
    desc:'Lu adalah definisi manusia bebas tanpa beban. Selalu optimis, suka jalan-jalan, dan hobi ngelawak. Kadang kalau ngomong suka jujur kebablasan sampai bikin orang tersedak, tapi aslinya gak bermaksud jahat kok.' },
  
  { name:'Capricorn', symbol:'♑', range:'22 Des – 19 Jan', element:'Tanah', color:'#f1f5f9', bg:'#475569', planet:'Saturnus', lucky:'Abu-abu Minimalis', icon:'⛰️', 
    sifat:['Hustle Culture','Dewasa','Disiplin','Skeptis'], 
    career: 'Investment Banker, CEO / Co-Founder, / Business Strategist',
    desc:'Anak magang teladan atau calon CEO ya lu ini. Otak lu isinya cuan, karier, dan masa depan. Kelihatan kaku dan dingin di luar, padahal aslinya lu cuma lagi capek mikirin masa depan aja.' },
  
  { name:'Aquarius', symbol:'♒', range:'20 Jan – 18 Feb', element:'Udara', color:'#ecfeff', bg:'#06b6d4', planet:'Uranus', lucky:'Neon Teal', icon:'⚡', 
    sifat:['Unik/Aneh','Visioner','Gak Suka Ikut-ikutan','Savage'], 
    career: 'UI/UX Designer, Tech Developer, / Trend Forecaster',
    desc:'Lu sering dibilang dateng dari planet lain karena jalan pikiran lo yang unik banget. Lu gak suka ikut-ikutan tren, mandiri, dan visioner. Singkatnya: lu adalah definisi *indie* sejati.' },
  
  { name:'Pisces', symbol:'🌊', range:'19 Feb – 20 Mar', element:'Air', color:'#e0e7ff', bg:'#4f46e5', planet:'Neptunus', lucky:'Ungu Lavender', icon:'🎨', 
    sifat:['Pemimpi','Kreatif Sastra','Baperan','Indra Keenam'], 
    career: 'Musician / Songwriter, Illustrator, / Photographer',
    desc:'Lu hidup di dunia mimpi yang penuh imajinasi. Kreatif banget, berjiwa seni, dan sensitif sama perasaan orang lain. Kadang suka kabur dari kenyataan ke dunia fantasi buatan lo sendiri.' }
];

// --- Logika Penentu Algoritma Astrologi ---
function getZodiak(d, m) {
  if ((m===1&&d>=20)||(m===2&&d<=18)) return zodiaks[10];
  if ((m===2&&d>=19)||(m===3&&d<=20)) return zodiaks[11];
  if ((m===3&&d>=21)||(m===4&&d<=19)) return zodiaks[0];
  if ((m===4&&d>=20)||(m===5&&d<=20)) return zodiaks[1];
  if ((m===5&&d>=21)||(m===6&&d<=20)) return zodiaks[2];
  if ((m===6&&d>=21)||(m===7&&d<=22)) return zodiaks[3];
  if ((m===7&&d>=23)||(m===8&&d<=22)) return zodiaks[4];
  if ((m===8&&d>=23)||(m===9&&d<=22)) return zodiaks[5];
  if ((m===9&&d>=23)||(m===10&&d<=22)) return zodiaks[6];
  if ((m===10&&d>=23)||(m===11&&d<=21)) return zodiaks[7];
  if ((m===11&&d>=22)||(m===12&&d<=21)) return zodiaks[8];
  return zodiaks[9];
}

// --- Fungsi Render Hasil UI ---
function generateZodiac() {
  const d = parseInt(daySelect.value);
  const m = parseInt(monthSelect.value);
  const nameInput = document.getElementById('username').value.trim();
  const z = getZodiak(d, m);
  
  const rateSeed = (nameInput.length + d + m) * 9;
  const compatibilityRate = 75 + (rateSeed % 22); 

  const sapaan = nameInput ? `Yo <strong>${nameInput}</strong>, ` : 'Gais, ';

  const resContainer = document.getElementById('resultContainer');
  resContainer.style.borderStyle = "solid";
  resContainer.innerHTML = `
    <div class="zodiac-card">
      <div class="zodiac-header">
        <div class="meta-left">
          <div class="zodiac-symbol" style="background: ${z.bg}; color: ${z.color}">${z.symbol}</div>
          <div>
            <div class="zodiac-name">${z.name}</div>
            <div class="zodiac-range">${z.range}</div>
            <span class="element-badge" style="background:${z.bg}; color:${z.color}">${z.icon} ${z.element}</span>
          </div>
        </div>
        <div class="compatibility-box">
          <div class="comp-val">${compatibilityRate}%</div>
          <div class="comp-lbl">Vibe Match</div>
        </div>
      </div>

      <div class="attr-grid">
        <div class="attr-block">
          <span class="attr-icon">🪐</span>
          <div class="attr-info">
            <span class="attr-label">Planet Guard</span>
            <span class="attr-value">${z.planet}</span>
          </div>
        </div>
        <div class="attr-block">
          <span class="attr-icon">🎨</span>
          <div class="attr-info">
            <span class="attr-label">Warna Hoki</span>
            <span class="attr-value">${z.lucky}</span>
          </div>
        </div>
      </div>

      <div class="section-title">✨ Kepribadian Lo Banget:</div>
      <div class="sifat-flex">
        ${z.sifat.map(s => `<span class="sifat-tag">${s}</span>`).join('')}
      </div>

      <div class="section-title">💼 Cari Cuan Vibes:</div>
      <div class="career-box">
        <span class="career-icon">🚀</span>
        <div class="career-text-wrapper">
          <span class="career-title">${z.career}</span>
          <span class="career-desc">Karier di atas cocok banget sama energi rasi bintang lo!</span>
        </div>
      </div>

      <div class="section-title">📜 Spill Realita:</div>
      <div class="character-box">
        <p class="desc-text">${sapaan}${z.desc}</p>
      </div>
    </div>
  `;
}

// --- Kontrol Tema: Dark / Light Mode ---
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeBtn');
    if(html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        btn.innerHTML = '☀️ Terang';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.innerHTML = '🌙 Gelap';
    }
}
