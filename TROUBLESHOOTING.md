# 🚨 TROUBLESHOOTING: GitHub Actions Gagal Deploy

## ❌ Error yang Anda Alami:

```
Get Pages site failed. Please verify that the repository has Pages enabled 
and configured to build using GitHub Actions, or consider exploring the 
`enablement` parameter for this action.
```

---

## ✅ SOLUSI LENGKAP (100% WORK!)

### 🎯 **PENYEBAB:**
GitHub Pages belum diaktifkan di repository, jadi GitHub Actions tidak bisa deploy.

### 🔧 **LANGKAH PERBAIKAN:**

---

## **STEP 1: Aktifkan GitHub Pages Secara Manual**

### Cara Cepat (Klik Link Ini):
👉 **https://github.com/papermintx/papermintx/settings/pages**

### Atau Manual:

1. Buka https://github.com/papermintx/papermintx

2. Klik tab **Settings** (pojok kanan atas)

3. Di sidebar kiri, scroll ke bawah, cari **Pages** (bagian Code and automation)

4. Di halaman Pages:
   - **Build and deployment** section
   - **Source:** Klik dropdown
   - Pilih: **"GitHub Actions"** 
   - Jangan pilih "Deploy from a branch"!

5. **JANGAN TUTUP TAB INI DULU!**

---

## **STEP 2: Set Repository Permissions**

Masih di Settings:

1. Di sidebar kiri, klik **Actions** → **General**

2. Scroll ke bawah ke bagian **"Workflow permissions"**

3. Pastikan yang dipilih adalah:
   ```
   ☑ Read and write permissions
   ```
   BUKAN "Read repository contents permission"

4. Centang juga:
   ```
   ☑ Allow GitHub Actions to create and approve pull requests
   ```

5. Klik tombol **Save** di bagian bawah

**Screenshot lokasi:**
```
Settings
└── Actions
    └── General
        └── Workflow permissions (paling bawah)
            └── ☑ Read and write permissions 👈 PILIH INI
            └── [Save]
```

---

## **STEP 3: Trigger Deployment Ulang**

Sekarang kembali ke folder project Anda dan jalankan:

```powershell
cd "C:\Users\Muhamad Muslih\OneDrive\Desktop\papermintx"

# Commit perubahan workflow yang sudah diperbaiki
git add .
git commit -m "Fix: Update workflow with enablement parameter"
git push origin main
```

**ATAU** trigger manual dari GitHub:

1. Buka: https://github.com/papermintx/papermintx/actions
2. Klik workflow "Deploy to GitHub Pages"
3. Klik tombol "Run workflow" (dropdown)
4. Klik "Run workflow" (hijau)

---

## **STEP 4: Monitor Deployment**

1. Buka tab **Actions**: https://github.com/papermintx/papermintx/actions

2. Tunggu workflow selesai (1-3 menit):
   - ⏳ Kuning = Sedang berjalan
   - ✅ Hijau = BERHASIL!
   - ❌ Merah = Gagal (baca error log)

3. Jika HIJAU ✅:
   - Kembali ke Settings > Pages
   - Akan muncul link: **"Your site is live at..."**
   - Klik link atau buka: https://papermintx.github.io/papermintx/

---

## 🔍 **Cek Apakah Pages Sudah Aktif**

Buka: https://github.com/papermintx/papermintx/settings/pages

**HARUS TERLIHAT:**
```
✅ Your site is live at https://papermintx.github.io/papermintx/

Build and deployment
├── Source: GitHub Actions
└── Your site is published from the main branch
```

---

## 🚨 **JIKA MASIH GAGAL - Troubleshooting Lanjutan**

### Error 1: "Repository must have Pages enabled"

**Solusi:**
1. Pastikan repository adalah **PUBLIC** (bukan private)
2. Atau upgrade ke GitHub Pro untuk private repo Pages

**Cek visibility:**
```
Settings > General > Danger Zone
└── Change repository visibility
    └── Harus: Public
```

---

### Error 2: "Resource not accessible by integration"

**Solusi:**
Permissions belum di-set dengan benar.

1. Settings > Actions > General
2. Workflow permissions
3. Pilih: **Read and write permissions**
4. Save

---

### Error 3: "No uploaded artifact found"

**Solusi:**
File `index.html` harus ada di root directory.

**Cek:**
```powershell
cd "C:\Users\Muhamad Muslih\OneDrive\Desktop\papermintx"
dir index.html
```

Jika tidak ada, file mungkin tidak ter-commit.

```powershell
git add index.html
git commit -m "Add index.html"
git push origin main
```

---

### Error 4: "404 - Page Not Found" setelah deploy

**Penyebab:** Website sudah deploy tapi path salah.

**Solusi:**
1. Tunggu 5-10 menit untuk propagasi
2. Hard refresh: **Ctrl + Shift + R**
3. Coba incognito mode
4. Cek URL benar: https://papermintx.github.io/papermintx/

---

## 🎯 **ALTERNATIVE: Deploy Manual (Jika Actions Tetap Gagal)**

Jika GitHub Actions tetap bermasalah, gunakan metode deploy dari branch:

### Langkah:

1. **Settings > Pages**

2. **Source:** Pilih **"Deploy from a branch"**

3. **Branch:** 
   - Pilih: **main**
   - Folder: **/ (root)**

4. Klik **Save**

5. Tunggu 1-2 menit

6. Refresh halaman, akan muncul link website

**Kelemahan metode ini:**
- Harus manual deploy setiap update
- Tidak otomatis seperti GitHub Actions

---

## 📝 **Checklist Lengkap**

Pastikan SEMUA ini sudah benar:

- [ ] Repository adalah PUBLIC
- [ ] File `index.html` ada di root
- [ ] GitHub Pages sudah diaktifkan di Settings > Pages
- [ ] Source di-set ke "GitHub Actions"
- [ ] Workflow permissions = "Read and write permissions"
- [ ] File `.github/workflows/deploy.yml` ada dan benar
- [ ] Sudah push semua changes ke GitHub
- [ ] Workflow di Actions sudah berjalan dan HIJAU ✅

---

## 🆘 **MASIH BELUM BISA?**

### Coba Metode Paling Simple:

1. **DELETE file `.github/workflows/deploy.yml`**

2. **Commit & Push:**
   ```powershell
   git rm .github/workflows/deploy.yml
   git commit -m "Remove workflow temporarily"
   git push origin main
   ```

3. **Settings > Pages:**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Save

4. **Tunggu 2 menit**

5. **Website LIVE:** https://papermintx.github.io/papermintx/

Setelah ini work, baru nanti bisa setup GitHub Actions lagi.

---

## 📞 **Kirim Screenshot Error**

Jika masih error, ambil screenshot dari:

1. **Actions page:** https://github.com/papermintx/papermintx/actions
   - Klik workflow yang merah ❌
   - Screenshot error message

2. **Settings > Pages:** 
   - Screenshot full page

3. **Settings > Actions > General:**
   - Screenshot Workflow permissions section

---

## ✅ **VERIFIKASI AKHIR**

Setelah semua selesai, website Anda harus:

1. ✅ Bisa diakses di: https://papermintx.github.io/papermintx/
2. ✅ Particles background muncul
3. ✅ Typing animation jalan
4. ✅ Navigation bekerja
5. ✅ Responsive di mobile

---

## 🎉 **SUKSES!**

Jika sudah berhasil:

1. Share ke LinkedIn
2. Update CV
3. Tambahkan ke email signature
4. Submit ke job applications!

---

<div align="center">

### 💪 You Got This! 💪

**Website Portfolio Keren Menanti!**

</div>

---

## 📌 **Quick Commands Cheat Sheet**

```powershell
# Cek status
cd "C:\Users\Muhamad Muslih\OneDrive\Desktop\papermintx"
git status

# Update dan push
git add .
git commit -m "Your message here"
git push origin main

# Empty commit (trigger deployment)
git commit --allow-empty -m "Trigger deployment"
git push origin main

# Cek remote
git remote -v

# Cek branch
git branch
```

---

**Last Updated:** October 6, 2025  
**Status:** Ready to Deploy! 🚀
