# 📖 Panduan Setup GitHub Pages - Portfolio Website

Panduan lengkap untuk meng-host portfolio website Anda di GitHub Pages secara GRATIS! 🎉

## 📋 Daftar Isi

1. [Persiapan](#persiapan)
2. [Upload ke GitHub](#upload-ke-github)
3. [Konfigurasi GitHub Pages](#konfigurasi-github-pages)
4. [Verifikasi Deployment](#verifikasi-deployment)
5. [Custom Domain (Opsional)](#custom-domain-opsional)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Persiapan

### Yang Anda Butuhkan:

- ✅ Akun GitHub (gratis) - [Daftar di sini](https://github.com/join)
- ✅ Git terinstall di komputer
- ✅ Repository `papermintx` yang sudah dibuat

### Cek Git Installation:

```bash
git --version
```

Jika belum terinstall, download dari: https://git-scm.com/

---

## 🚀 Upload ke GitHub

### Langkah 1: Inisialisasi Git (Jika Belum)

Buka PowerShell di folder project Anda:

```powershell
cd "C:\Users\Muhamad Muslih\OneDrive\Desktop\papermintx"

# Cek status git
git status
```

### Langkah 2: Add & Commit Files

```powershell
# Add semua file
git add .

# Commit dengan pesan
git commit -m "Add complete portfolio website with animations"
```

### Langkah 3: Push ke GitHub

```powershell
# Push ke repository
git push -u origin main
```

> ⚠️ **Catatan**: Jika ada error "remote origin already exists", skip langkah remote add

---

## ⚙️ Konfigurasi GitHub Pages

### Metode 1: Menggunakan GitHub Actions (Recommended) ✨

1. **Buka Repository di GitHub**
   - Pergi ke: https://github.com/papermintx/papermintx

2. **Masuk ke Settings**
   - Klik tab **Settings** (di menu atas)
   - Scroll ke bagian **Code and automation**
   - Klik **Pages**

3. **Pilih Source**
   - Di bagian **Source**, pilih **GitHub Actions**
   - Klik **Save**

4. **Otomatis Deploy**
   - GitHub Actions akan otomatis men-deploy website Anda
   - File `.github/workflows/deploy.yml` sudah dikonfigurasi

### Metode 2: Deploy dari Branch (Alternative)

1. **Buka Settings > Pages**
2. **Pilih Source**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. **Klik Save**

---

## ✅ Verifikasi Deployment

### 1. Cek GitHub Actions

1. Buka tab **Actions** di repository
2. Lihat workflow "Deploy to GitHub Pages"
3. Tunggu hingga status berubah menjadi ✅ (hijau)
4. Biasanya memakan waktu 1-3 menit

### 2. Akses Website

Website Anda akan tersedia di:

```
https://papermintx.github.io/papermintx
```

### 3. Verifikasi Fitur

Pastikan semua fitur berjalan:
- ✅ Particles background muncul
- ✅ Typing animation berfungsi
- ✅ Navigation smooth scrolling
- ✅ Project screenshots tampil
- ✅ GitHub stats loading
- ✅ Contact links bekerja

---

## 🌐 Custom Domain (Opsional)

Jika Anda memiliki domain sendiri (contoh: `muslihdev.com`):

### 1. Tambahkan Custom Domain

1. Buka **Settings > Pages**
2. Di bagian **Custom domain**, masukkan domain Anda
3. Klik **Save**

### 2. Konfigurasi DNS

Tambahkan record DNS di provider domain Anda:

#### Untuk Apex Domain (muslihdev.com):

```
Type: A
Name: @
Value: 185.199.108.153
```

```
Type: A
Name: @
Value: 185.199.109.153
```

```
Type: A
Name: @
Value: 185.199.110.153
```

```
Type: A
Name: @
Value: 185.199.111.153
```

#### Untuk Subdomain (www.muslihdev.com):

```
Type: CNAME
Name: www
Value: papermintx.github.io
```

### 3. Verifikasi Domain

Kembali ke GitHub Pages settings dan klik **Check DNS configuration**

---

## 🔧 Troubleshooting

### Problem 1: Website Tidak Muncul (404)

**Solusi:**
1. Pastikan repository bernama `papermintx` (sesuai username)
2. Cek file `index.html` ada di root folder
3. Tunggu 5-10 menit untuk propagasi
4. Clear browser cache (Ctrl + Shift + R)

### Problem 2: GitHub Actions Gagal

**Solusi:**
1. Buka tab **Actions**
2. Klik workflow yang gagal
3. Lihat error message
4. Perbaiki file `.github/workflows/deploy.yml`
5. Push ulang perubahan

### Problem 3: Styling Tidak Muncul

**Solusi:**
1. Cek path file CSS di `index.html`
2. Pastikan `style.css` ada di root folder
3. Cek browser console untuk error (F12)

### Problem 4: Images Tidak Tampil

**Solusi:**
1. Pastikan path gambar benar
2. Gunakan relative path: `screenshoot brofin/Home Screen.jpg`
3. Cek nama file exact (case-sensitive)
4. Pastikan gambar sudah ter-commit ke GitHub

### Problem 5: Particles.js Tidak Muncul

**Solusi:**
1. Cek koneksi internet (particles.js load dari CDN)
2. Buka browser console (F12) cek error
3. Pastikan link CDN di `index.html` benar

---

## 🔄 Update Website

Setiap kali Anda ingin update website:

```powershell
# 1. Edit files (index.html, style.css, dll)

# 2. Add changes
git add .

# 3. Commit
git commit -m "Update portfolio content"

# 4. Push
git push origin main

# 5. GitHub Actions akan otomatis deploy (tunggu 1-3 menit)
```

---

## 📊 Monitoring

### Melihat Traffic Website

1. **GitHub Insights**:
   - Buka tab **Insights** > **Traffic**
   - Lihat views dan visitors

2. **Google Analytics** (Opsional):
   - Daftar di [Google Analytics](https://analytics.google.com/)
   - Tambahkan tracking code ke `index.html`

---

## 🎨 Tips Optimization

### 1. Compress Images

Sebelum upload, compress gambar untuk loading lebih cepat:
- Gunakan [TinyPNG](https://tinypng.com/)
- Atau [Squoosh](https://squoosh.app/)

### 2. Enable HTTPS

GitHub Pages otomatis menyediakan HTTPS:
1. Buka **Settings > Pages**
2. Centang **Enforce HTTPS**

### 3. SEO Optimization

Pastikan meta tags di `index.html` sudah lengkap:
- ✅ Title tag
- ✅ Description
- ✅ Keywords
- ✅ Open Graph tags

---

## 📱 Test di Mobile

### Online Tools:

1. **Responsive Design Checker**
   - https://responsivedesignchecker.com/

2. **Google Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

3. **BrowserStack** (Gratis untuk public sites)
   - https://www.browserstack.com/

---

## 🚀 Advanced Features

### 1. Add Google Analytics

```html
<!-- Tambahkan sebelum </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### 2. Add Contact Form

Gunakan service gratis seperti:
- [Formspree](https://formspree.io/)
- [Form-Data](https://form-data.com/)
- [GetForm](https://getform.io/)

### 3. Add Live Chat

- [Tawk.to](https://www.tawk.to/) - Gratis
- [Crisp](https://crisp.chat/) - Gratis untuk basic

---

## 📝 Checklist Deployment

Sebelum launch, pastikan:

- [ ] README.md informatif
- [ ] Contact info sudah benar
- [ ] LinkedIn & GitHub links aktif
- [ ] All images loading
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] SEO meta tags lengkap
- [ ] Social media preview OK
- [ ] No broken links
- [ ] Fast loading time

---

## 💡 Tips Professional

1. **Update Regularly**
   - Tambahkan project baru
   - Update skills
   - Refresh content

2. **Share di Social Media**
   - LinkedIn post
   - Twitter/X
   - Facebook
   - Instagram bio link

3. **Add to Resume**
   - Cantumkan link portfolio di CV
   - Gunakan sebagai bukti kemampuan

4. **Collect Feedback**
   - Minta review dari teman/kolega
   - Iterate dan improve

---

## 🆘 Butuh Bantuan?

- 📧 **Email**: muhamadmuslih720@gmail.com
- 💬 **GitHub Issues**: [Buat issue](https://github.com/papermintx/papermintx/issues)
- 📖 **GitHub Docs**: [GitHub Pages Documentation](https://docs.github.com/pages)

---

## 🎉 Selamat!

Portfolio website Anda sekarang sudah online dan bisa diakses dari mana saja! 🚀

### Next Steps:

1. ✅ Share link ke social media
2. ✅ Tambahkan ke LinkedIn profile
3. ✅ Update CV dengan link portfolio
4. ✅ Submit ke job applications
5. ✅ Share dengan network Anda

---

<div align="center">

### 🌟 Portfolio Anda Sudah Live! 🌟

**URL**: https://papermintx.github.io/papermintx

**Made with ❤️ by Muhamad Muslih**

</div>
