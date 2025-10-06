# 🚀 Portfolio Website - Muhamad Muslih

[![Deploy to GitHub Pages](https://github.com/papermintx/papermintx/actions/workflows/deploy.yml/badge.svg)](https://github.com/papermintx/papermintx/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fpapermintx.github.io%2Fpapermintx)](https://papermintx.github.io/papermintx)

Selamat datang di repository portfolio website saya! Website ini menampilkan proyek-proyek, keahlian, dan informasi tentang saya sebagai Android Developer.

## 🌐 Live Demo

Kunjungi website saya di: **[https://papermintx.github.io/papermintx](https://papermintx.github.io/papermintx)**

## ✨ Fitur Website

- 🎨 **Desain Modern & Responsif** - Tampil sempurna di semua perangkat
- ⚡ **Animasi Interaktif** - Particle.js background dan smooth animations
- 🖼️ **Portfolio Showcase** - Menampilkan project terbaik dengan screenshot
- 📊 **GitHub Statistics** - Real-time stats dari GitHub API
- 🌙 **Smooth Navigation** - Single page application dengan smooth scrolling
- 🎯 **SEO Optimized** - Meta tags untuk optimasi search engine
- 📱 **Mobile First** - Dioptimalkan untuk pengalaman mobile yang sempurna

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dengan modern CSS features
- **JavaScript (ES6+)** - Interactive features
- **Particles.js** - Animated background particles
- **Font Awesome** - Icon library
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated deployment

## 📁 Struktur Project

```
papermintx/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── screenshoot brofin/         # Project screenshots
│   ├── Home Screen.jpg
│   ├── Add Expense Screen.jpg
│   └── ...
├── index.html                  # Main HTML file
├── style.css                   # Styling
├── script.js                   # JavaScript functionality
├── README.md                   # Project documentation
└── SETUP_GUIDE.md             # Setup instructions
```

## 🚀 Cara Setup GitHub Pages

### Langkah 1: Push ke GitHub

```bash
git add .
git commit -m "Add portfolio website"
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** > **Pages**
3. Di **Source**, pilih **GitHub Actions**
4. Website akan otomatis ter-deploy setiap kali ada push ke branch main

### Langkah 3: Akses Website

Website akan tersedia di: `https://papermintx.github.io/papermintx`

## 📝 Cara Mengedit Portfolio

### Mengubah Informasi Personal

Edit file `index.html` pada bagian berikut:

```html
<!-- Nama -->
<h1>Hi, I'm <span class="gradient-text">Muhamad Muslih</span></h1>

<!-- Email -->
<a href="mailto:muhamadmuslih720@gmail.com">

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/muhamad-muslih-a92120275/">

<!-- GitHub Username -->
<a href="https://github.com/papermintx">
```

### Menambah Project Baru

Tambahkan project card di section projects:

```html
<div class="project-card">
    <!-- Project content here -->
</div>
```

### Mengubah Warna Theme

Edit file `style.css` pada bagian `:root`:

```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #7f52ff;
    --accent-color: #ff6b6b;
}
```

## 🎨 Customization

Website ini sangat mudah di-customize:

- **Colors**: Ubah CSS variables di `style.css`
- **Content**: Edit HTML di `index.html`
- **Animations**: Modifikasi JavaScript di `script.js`
- **Particles**: Sesuaikan konfigurasi di `script.js`

## 📱 Screenshots

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🔧 Local Development

Untuk menjalankan website di local:

1. Clone repository:
```bash
git clone https://github.com/papermintx/papermintx.git
cd papermintx
```

2. Buka `index.html` di browser, atau gunakan Live Server:
```bash
# Jika menggunakan Python
python -m http.server 8000

# Atau dengan PHP
php -S localhost:8000

# Atau gunakan VS Code Live Server extension
```

3. Buka browser dan akses `http://localhost:8000`

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

1. Fork repository ini
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source dan tersedia untuk semua orang.

## 👤 Author

**Muhamad Muslih**

- GitHub: [@papermintx](https://github.com/papermintx)
- LinkedIn: [Muhamad Muslih](https://www.linkedin.com/in/muhamad-muslih-a92120275/)
- Email: muhamadmuslih720@gmail.com

## 🌟 Show Your Support

Berikan ⭐️ jika project ini membantu Anda!

---

<div align="center">
  <p>Made with ❤️ by Muhamad Muslih</p>
  <p>© 2025 All rights reserved</p>
</div>
