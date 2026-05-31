// Database Data Zodiak
const zodiacData = [
    { name: "Capricorn", sign: "♑", start: [12, 22], end: [1, 19], forecast: "Minggu ini adalah waktu yang tepat untuk fokus pada karier. Disiplinmu akan membuahkan hasil manis.", bestMatch: ["Taurus", "Virgo"], descMatch: "Sama-sama elemen bumi, sangat stabil!" },
    { name: "Aquarius", sign: "♒", start: [1, 20], end: [2, 18], forecast: "Ide-ide kreatif mengalir deras. Jangan takut untuk tampil beda dan menyuarakan pendapatmu.", bestMatch: ["Gemini", "Libra"], descMatch: "Obrolan kalian tidak akan pernah membosankan." },
    { name: "Pisces", sign: "♓", start: [2, 19], end: [3, 20], forecast: "Intuisi kamu sedang sangat tajam hari ini. Dengarkan kata hatimu dalam mengambil keputusan besar.", bestMatch: ["Cancer", "Scorpio"], descMatch: "Ikatan emosional yang sangat dalam dan saling memahami." },
    { name: "Aries", sign: "♈", start: [3, 21], end: [4, 19], forecast: "Energi kamu sedang meluap-luap! Selesaikan proyek tertunda, tapi hati-hati jangan terlalu impulsif.", bestMatch: ["Leo", "Sagittarius"], descMatch: "Hubungan penuh gairah, petualangan, dan energi positif." },
    { name: "Taurus", sign: "♉", start: [4, 20], end: [5, 20], forecast: "Kenyamanan adalah kunci minggu ini. Manjakan dirimu sejenak, keuanganmu terpantau cukup stabil.", bestMatch: ["Virgo", "Capricorn"], descMatch: "Hubungan yang saling mendukung secara finansial dan emosional." },
    { name: "Gemini", sign: "♊", start: [5, 21], end: [6, 20], forecast: "Komunikasi sedang menjadi kekuatan utamamu. Waktu yang bagus untuk memperluas jaringan/pertemanan.", bestMatch: ["Libra", "Aquarius"], descMatch: "Koneksi intelektual yang sangat kuat dan dinamis." },
    { name: "Cancer", sign: "♋", start: [6, 21], end: [7, 22], forecast: "Suasana rumah dan keluarga mendatangkan kedamaian. Kurangi overthinking tentang masa depan.", bestMatch: ["Scorpio", "Pisces"], descMatch: "Penuh kasih sayang, saling menjaga, dan sangat peka." },
    { name: "Leo", sign: "♌", start: [7, 23], end: [8, 22], forecast: "Sorotan lampu sedang mengarah padamu. Karismamu memikat banyak orang, manfaatkan untuk memimpin.", bestMatch: ["Aries", "Sagittarius"], descMatch: "Pasangan yang serasi, penuh romansa, dan saling mengagumi." },
    { name: "Virgo", sign: "♍", start: [8, 23], end: [9, 22], forecast: "Waktunya merapikan jadwal dan hidup sehat. Detail-detail kecil yang kamu perhatikan akan menyelamatkanmu.", bestMatch: ["Taurus", "Capricorn"], descMatch: "Pasangan yang sangat praktis, teratur, dan setia." },
    { name: "Libra", sign: "♎", start: [9, 23], end: [10, 22], forecast: "Keseimbangan adalah prioritasmu sekarang. Aspek hubungan asmara sedang menuju ke arah yang lebih harmonis.", bestMatch: ["Gemini", "Aquarius"], descMatch: "Menghargai keindahan, kedamaian, dan kebersamaan." },
    { name: "Scorpio", sign: "♏", start: [10, 23], end: [11, 21], forecast: "Ada transformasi besar dalam dirimu. Lepaskan apa yang sudah tidak berfungsi dan mulailah lembaran baru.", bestMatch: ["Cancer", "Pisces"], descMatch: "Saling setia dan memiliki daya tarik magnetis yang kuat." },
    { name: "Sagittarius", sign: "♐", start: [11, 22], end: [12, 21], forecast: "Keberuntungan berpihak pada yang berani. Ambillah risiko yang terukur, petualangan baru menantimu.", bestMatch: ["Aries", "Leo"], descMatch: "Penuh kebebasan, optimisme, dan tawa bersama." }
];

// Fungsi mencari Zodiak berdasarkan tanggal input kalender
function getZodiac(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return zodiacData.find(z => {
        const [sMonth, sDay] = z.start;
        const [eMonth, eDay] = z.end;
        
        if (sMonth > eMonth) { // Kondisi khusus Capricorn di akhir/awal tahun
            return (month === sMonth && day >= sDay) || (month === eMonth && day <= eDay);
        }
        return (month === sMonth && day >= sDay) || (month === eMonth && day <= eDay);
    });
}

// Fungsi Utama: Dipanggil saat tombol "Ramal Sekarang" diklik
function revealDestiny() {
    const birthdateInput = document.getElementById('birthdate').value;
    const partnerZodiac = document.getElementById('partner-zodiac').value;

    if (!birthdateInput) {
        alert("Silakan masukkan tanggal lahir kamu terlebih dahulu!");
        return;
    }

    const userZodiac = getZodiac(birthdateInput);
    
    // Tampilkan Box Hasil Ramalan
    const resultBox = document.getElementById('resultBox');
    resultBox.style.display = 'block';

    // Isi Data Utama UI
    document.getElementById('zodiacName').innerText = userZodiac.name;
    document.getElementById('zodiacIcon').innerText = userZodiac.sign;
    document.getElementById('forecastText').innerText = userZodiac.forecast;
    document.getElementById('zodiacDateRange').innerText = `Elemen Utama Pasangan Terbaik: ${userZodiac.bestMatch.join(', ')}`;

    // Logika Hitung Kecocokan Pasangan Spesifik (Jika Dipilih)
    const partnerTextObj = document.getElementById('partnerMatchText');
    if (partnerZodiac) {
        if (userZodiac.bestMatch.includes(partnerZodiac)) {
            partnerTextObj.innerHTML = `💘 Dengan <strong>${partnerZodiac}</strong>: Tingkat kecocokanmu <strong>Tinggi (95%)</strong>! ${userZodiac.descMatch}`;
        } else if (userZodiac.name === partnerZodiac) {
            partnerTextObj.innerHTML = `🤝 Dengan Semesta <strong>${partnerZodiac}</strong> yang sama: Tingkat kecocokan <strong>Cukup Baik (75%)</strong>. Saling bercermin ego masing-masing.`;
        } else {
            partnerTextObj.innerHTML = `✨ Dengan <strong>${partnerZodiac}</strong>: Tingkat kecocokan <strong>Sedang (60%)</strong>. Membutuhkan komunikasi ekstra namun saling melengkapi!`;
        }
    } else {
        partnerTextObj.innerText = "Masukkan zodiak pasanganmu di atas untuk melihat kecocokan spesifik.";
    }

    // Tampilkan List Rekomendasi Kecocokan Umum Secara Dinamis
    const compListContainer = document.getElementById('generalCompList');
    compListContainer.innerHTML = ''; // Hapus sisa data render sebelumnya
    
    userZodiac.bestMatch.forEach(matchName => {
        const matchData = zodiacData.find(z => z.name === matchName);
        const item = document.createElement('div');
        item.className = 'comp-item';
        item.innerHTML = `
            <span>${matchData.sign}</span>
            <strong>${matchData.name}</strong>
            <p>Sangat Serasi</p>
        `;
        compListContainer.appendChild(item);
    });
}

// Fungsi Mengganti Tab Konten (Ramalan / Kecocokan)
function switchTab(evt, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}
