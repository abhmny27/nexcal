// --- 1. SISTEM AUTENTIKASI (ANTI LAYAR PUTIH) ---
(function() {
    // Ambil nama file dengan tepat, bahkan jika dijalankan di Live Server
    let filename = window.location.pathname.split('/').pop().toLowerCase();
    
    // Jika path kosong (contoh: http://127.0.0.1:5500/), anggap itu index.html
    if (filename === '' || filename === '/') {
        filename = 'index.html';
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const isProfileComplete = localStorage.getItem("isProfileComplete") === "true";

    // Aturan ketat Redirect:
    if (!isLoggedIn) {
        // Jika belum login, dan BUKAN di halaman login -> Lempar ke login
        if (filename !== "login.html") window.location.replace("login.html");
    } else if (isLoggedIn && !isProfileComplete) {
        // Jika sudah login tapi data kosong, dan BUKAN di halaman setup -> Lempar ke setup
        if (filename !== "setup_profile.html" && filename !== "profile.html") window.location.replace("setup_profile.html");
    } else if (isLoggedIn && isProfileComplete) {
        // Jika sudah lengkap, tapi mencoba buka halaman login/setup -> Lempar ke beranda
        if (filename === "login.html" || filename === "setup_profile.html") window.location.replace("index.html");
    }
})();

// --- 2. UPDATE NAVBAR (UBAH TOMBOL LOGIN JADI PROFIL) ---
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const isProfileComplete = localStorage.getItem("isProfileComplete") === "true";

    if (isLoggedIn && isProfileComplete) {
        // Cari semua link navigasi
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            // Jika menemukan link yang mengarah ke login.html, ganti dengan widget profil
            if (link.getAttribute('href') === 'login.html') {
                const userName = localStorage.getItem("userName") || "Siswa";
                link.parentElement.innerHTML = `
                    <a href="profile.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; transition: opacity 0.2s;">
                        <span style="color:var(--text-primary); font-family:var(--font-mono); font-size:14px;">${userName}</span>
                        <img src="d97bbb08017ac2309307f0822e63d082.jpg" alt="User" style="width:34px; height:34px; border-radius:50%; border:2px solid var(--primary); object-fit:cover; background-color:#fff;">
                    </a>
                `;
            }
        });
    }
});

// --- 3. FUNGSI MOBILE MENU (HAMBURGER) ---
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function () {
            // Toggle class 'active' untuk memunculkan/menyembunyikan menu
            navLinks.classList.toggle("active");
            
            // Toggle aria-expanded untuk aksesibilitas
            const isExpanded = mobileMenu.getAttribute("aria-expanded") === "true";
            mobileMenu.setAttribute("aria-expanded", !isExpanded);
        });
    }
});