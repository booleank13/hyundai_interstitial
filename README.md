# Hyundai Elektrikli Araçlar - Interstitial Reklam Sayfası

Modern, etkileşimli bir HTML5 interstitial (araya giren) reklam sayfası. Hyundai'nin elektrikli araç modellerini (IONIQ 5, IONIQ 6, KONA Electric) tanıtan, mobil uyumlu ve kullanıcı dostu bir tasarım.

## 🚗 Özellikler

### Elektrikli Araç Modelleri
- **IONIQ 5** - İkonik tasarım ve güçlü performans
- **IONIQ 6** - Aerodinamik mükemmellik
- **KONA Electric** - Kompakt şehir SUV'u

### Teknik Özellikler
- ⚡ Responsive (duyarlı) tasarım - tüm cihazlarda mükemmel görünüm
- 🎨 Modern, elektrikli araçlara özel tema (mavi/cyan gradyanlar)
- ✨ Animasyonlar ve geçiş efektleri
- 🖱️ Etkileşimli kartlar ve butonlar
- 📱 Mobil-öncelikli tasarım
- ♿ Erişilebilirlik desteği
- 🔒 SEO optimizasyonu

## 📁 Proje Yapısı

```
hyundai_interstitial/
├── index.html                  # Ana HTML dosyası
├── assets/
│   ├── css/
│   │   └── styles.css         # Stil dosyası
│   ├── js/
│   │   └── script.js          # JavaScript fonksiyonları
│   └── images/
│       └── hyundai-logo.png   # Hyundai logosu (eklenecek)
└── README.md                   # Bu dosya
```

## 🚀 Kurulum

### 1. Hyundai Logosunu Ekleyin

Projenin çalışması için Hyundai logosunu eklemeniz gerekmektedir:

1. Hyundai logo dosyanızı indirin (PNG formatında, şeffaf arka plan önerilir)
2. Dosyayı `assets/images/` klasörüne `hyundai-logo.png` adıyla kaydedin
3. Önerilen logo boyutları: 400x200px veya benzer oran

### 2. Projeyi Çalıştırın

Projeyi yerel olarak çalıştırmak için:

**Basit HTTP Sunucusu (Python):**
```bash
# Python 3 ile
python -m http.server 8000

# Tarayıcıda açın:
# http://localhost:8000
```

**Node.js ile:**
```bash
npx serve
```

**VS Code Live Server:**
1. VS Code'da projeyi açın
2. Live Server eklentisini yükleyin
3. index.html'e sağ tıklayıp "Open with Live Server" seçin

### 3. Tarayıcıda Görüntüleyin

index.html dosyasını doğrudan tarayıcınızda açabilirsiniz:
- Dosyaya çift tıklayın, veya
- Tarayıcınıza sürükleyip bırakın

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Hyundai Mavi**: #002c5f (ana marka rengi)
- **Açık Mavi**: #0066cc
- **Elektrik Cyan**: #00d4ff (vurgu rengi)
- **Elektrik Yeşil**: #00ff88 (aksan)
- **Koyu Arka Plan**: #0a0e27

### Yazı Tipleri
- Sistem yazı tipleri kullanılmıştır (San Francisco, Segoe UI, Roboto)
- Hızlı yüklenme ve mükemmel okunabilirlik

### Animasyonlar
- Fade-in giriş animasyonu
- Kart hover efektleri
- Buton ripple efektleri
- Scroll animasyonları
- Logo pulse efekti

## ⚙️ Özelleştirme

### CTA (Call-to-Action) Butonlarını Özelleştirin

`assets/js/script.js` dosyasında buton yönlendirmelerini güncelleyin:

```javascript
function handleCTAClick(href) {
    if (href === '#explore') {
        window.location.href = 'https://www.hyundai.com/tr/models/electric';
    } else if (href === '#test-drive') {
        window.location.href = 'https://www.hyundai.com/tr/test-drive';
    }
}
```

### Kapatma Davranışını Ayarlayın

```javascript
function closeInterstitial() {
    // Örnek yönlendirme:
    window.location.href = 'https://www.hyundai.com/tr';

    // Veya pencereyi kapat (popup için):
    // window.close();
}
```

### Araç Modellerini Güncelleyin

`index.html` dosyasında araç kartlarını düzenleyin:

```html
<div class="ev-card" data-model="yeni-model">
    <div class="ev-card-content">
        <h2 class="ev-name">YENİ MODEL</h2>
        <p class="ev-tagline">Model açıklaması</p>
        <ul class="ev-specs">
            <li>Özellik 1</li>
            <li>Özellik 2</li>
            <li>Özellik 3</li>
        </ul>
    </div>
</div>
```

## 📊 Analytics Desteği

Proje Google Analytics desteği içermektedir. GA4 kodunuzu eklemek için `index.html` dosyasının `<head>` bölümüne şunu ekleyin:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

JavaScript dosyası otomatik olarak şu olayları takip eder:
- Araç model kartı tıklamaları
- CTA buton tıklamaları
- Sayfada geçirilen süre
- Scroll derinliği

## 📱 Mobil Uyumluluk

Proje tüm cihazlarda mükemmel çalışır:
- 📱 Mobil telefonlar (320px+)
- 📱 Tabletler (768px+)
- 💻 Dizüstü bilgisayarlar (1024px+)
- 🖥️ Masaüstü bilgisayarlar (1440px+)

## 🌐 Tarayıcı Desteği

- ✅ Chrome/Edge (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Opera (son 2 versiyon)

## 🔧 Geliştirme

### Dosya Değişikliklerini İzleme

Geliştirme sırasında değişiklikleri otomatik yüklemek için:

```bash
npx browser-sync start --server --files "*.html, assets/**/*"
```

### CSS Minify

Production için CSS'i küçültün:

```bash
npx clean-css-cli -o assets/css/styles.min.css assets/css/styles.css
```

### JavaScript Minify

Production için JavaScript'i küçültün:

```bash
npx terser assets/js/script.js -o assets/js/script.min.js -c -m
```

## 📄 Lisans

© 2026 Hyundai Motor Company. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

Bu proje Hyundai elektrikli araç tanıtımı için oluşturulmuştur. Önerileriniz için lütfen iletişime geçin.

## 📞 İletişim

Daha fazla bilgi için: https://www.hyundai.com/tr

---

**Not:** Bu sayfa interstitial (araya giren) reklam formatındadır. Kullanıcı deneyimini korumak için:
- Maksimum 5 saniye sonra kapatma seçeneği sunulur
- ESC tuşu ile kapatılabilir
- Sağ üst köşede belirgin kapatma butonu vardır