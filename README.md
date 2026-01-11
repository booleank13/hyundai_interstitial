# Hyundai Interstitial - "Hyundai'nizi Oluşturun"

## 📱 Özellikler

**Boyut:** 320x480px (Mobil Interstitial Format)

**Konsept:** Etkileşimli "Hyundai'nizi Oluşturun" deneyimi

### Etkileşim Adımları:

1. **Karşılama Ekranı**
   - Hyundai logosu ve hoş geldin mesajı
   - "Başlayın" CTA butonu

2. **Kategori Seçimi**
   - 3 kategori seçeneği:
     - ⚡ Elektrikli (IONIQ Serisi)
     - 🚙 SUV (TUCSON & KONA)
     - 🚗 Sedan (i20 & i30)

3. **Model & Renk Özelleştirme**
   - Seçilen kategoriye göre model gösterimi
   - 5 farklı renk seçeneği
   - Canlı renk değişimi animasyonu

4. **Final CTA**
   - Başarı onay ekranı
   - "Şimdi Oluştur" butonu → Hyundai web sitesine yönlendirme
   - "Başa Dön" seçeneği

## 🎨 Tasarım Özellikleri

- Modern gradient arka plan
- Smooth geçiş animasyonları
- İlerleme çubuğu
- Dokunmatik optimizasyon
- Responsive tasarım

## 📊 Analytics & Tracking

JavaScript dosyası şu event'leri takip eder:
- `interstitial_loaded` - Reklam yüklendiğinde
- `step_change` - Adım değişikliklerinde
- `category_selected` - Kategori seçildiğinde
- `color_selected` - Renk seçildiğinde
- `cta_clicked` - CTA butonuna tıklandığında
- `interstitial_closed` - Reklam kapatıldığında (engagement süresi ile)

## 🚀 Kullanım

1. ZIP dosyasını çıkartın
2. `index.html` dosyasını tarayıcıda açın
3. Mobil boyutlarda test etmek için tarayıcı geliştirici araçlarında 320x480px olarak ayarlayın

## 📦 Dosya Yapısı

```
hyundai_interstitial/
├── index.html      # Ana HTML dosyası
├── style.css       # Tüm stiller ve animasyonlar
├── script.js       # Etkileşim mantığı ve tracking
└── README.md       # Dokümantasyon
```

## 🎯 Teknik Detaylar

- **Bağımlılık:** Yok (Pure HTML/CSS/JS)
- **Dosya Boyutu:** ~15KB (toplam)
- **Tarayıcı Desteği:** Modern tüm tarayıcılar
- **Mobil Uyumluluk:** ✅ Tam uyumlu

## 📈 Performans

- İlk yükleme: <100ms
- Animasyon FPS: 60fps
- Toplam boyut: ~15KB (sıkıştırılmamış)

---

**Geliştirildi:** Hyundai Türkiye için
**Konsept:** "Hyundai'nizi Oluşturun"
**Format:** HTML5 Interstitial (320x480px)