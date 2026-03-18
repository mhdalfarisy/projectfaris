<div align="center">

# Muhammad Al Farisy — Personal Portfolio

Personal portfolio website built with React and deployed via GitHub Pages.
</div>

---

## 📸 Preview
![Website Demo](https://raw.githubusercontent.com/mhdalfarisy/mhdalfarisy/main/gif_web_faris.gif)

https://mhdalfarisy.github.io/#

---

## ✨ Features

- 📱 **Fully Responsive** — Tampil optimal di semua perangkat (mobile, tablet, desktop)
- 🗂️ **Multi-Page Layout** — Navigasi terstruktur dengan React Router DOM
- 📬 **Contact Form** — Terintegrasi dengan EmailJS, tanpa perlu backend
- 🎨 **React-Bootstrap** — Komponen UI modern dan konsisten
- ✏️ **Easy to Customize** — Semua konten dapat diubah dari satu file
- ⚡ **Typewriter Effect** — Animasi teks dinamis di halaman utama
- 🚀 **Deployed via GitHub Pages** — Auto-deploy dengan `gh-pages`

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| [React](https://reactjs.org/) | ^18.2.0 | UI framework utama |
| [React Router DOM](https://reactrouter.com/) | ^6.6.2 | Navigasi multi-halaman |
| [React Bootstrap](https://react-bootstrap.github.io/) | ^2.7.0 | Komponen UI |
| [Bootstrap](https://getbootstrap.com/) | ^5.2.3 | CSS framework |
| [EmailJS](https://www.emailjs.com/) | ^4.4.1 | Pengiriman form kontak |
| [React Icons](https://react-icons.github.io/) | ^4.1.0 | Library ikon |
| [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) | ^2.18.2 | Animasi teks |
| [React Transition Group](https://reactcommunity.org/react-transition-group/) | ^4.4.2 | Animasi transisi halaman |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | ^6.3.0 | Deploy ke GitHub Pages |

---

## 🚀 Setup & Installation

**1. Clone repository**
```bash
git clone https://github.com/mhdalfarisy/mhdalfarisy.github.io.git
```

**2. Masuk ke folder proyek**
```bash
cd mhdalfarisy.github.io
```

**3. Install dependencies**
```bash
npm install
# atau
yarn install
```

**4. Jalankan development server**
```bash
npm start
# atau
yarn start
```

**5. Buka di browser**
```
http://localhost:3000
```

---

## 🏗️ Build & Deploy

**Build untuk production**
```bash
npm run build
```

**Deploy ke GitHub Pages**
```bash
npm run deploy
```

> Deploy otomatis ke `https://mhdalfarisy.github.io/`

---

## ✏️ Cara Kustomisasi

Semua konten halaman (About, Skills, Portfolio, Kontak) dapat diubah melalui satu file:
```
src/content_option.js
```

Tidak perlu menyentuh file lain untuk mengubah informasi pribadi, skill, maupun daftar project.

---

## 📁 Struktur Folder
```
mhdalfarisy.github.io/
├── public/                  # File statis publik
├── src/
│   ├── assets/              # Gambar dan media
│   ├── components/          # Komponen React
│   └── content_option.js   ← ✏️ Edit semua konten di sini
├── static/
├── .env                     # Konfigurasi environment (EmailJS)
├── package.json
└── README.md
```

---

## ⚙️ Konfigurasi EmailJS

Isi file `.env` dengan kredensial EmailJS Anda:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

Daftar gratis di [emailjs.com](https://www.emailjs.com/) untuk mendapatkan kredensial.

---

## 📄 License

Proyek ini menggunakan lisensi [MIT](LICENSE) — bebas digunakan dan dimodifikasi.

---

<div align="center">

Jika portfolio ini bermanfaat, jangan lupa beri ⭐ di GitHub!

**[🌐 mhdalfarisy.github.io](https://mhdalfarisy.github.io/)**

</div>
