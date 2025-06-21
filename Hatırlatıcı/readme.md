# 📧 Google Sheets Tabanlı Otomatik Etkinlik Hatırlatma Maili Gönderici

Bu proje, Google Sheets üzerinde bulunan katılımcı bilgilerine dayanarak her katılımcıya ad-soyad bilgisiyle kişiselleştirilmiş hatırlatma e-postaları gönderen bir Google Apps Script çözümüdür.

---

## 🧩 Özellikler

- Google Sheets'teki "ad ve soyad" ve "mail" sütunlarını kullanır.
- Her kişiye özel, adını içeren hatırlatma e-postası gönderir.
- Gmail ile tam entegre çalışır.
- Kod içinde etkinlik detaylarını kolayca değiştirebilirsiniz.

---

## 📁 Dosya Yapısı

| Dosya       | Açıklama                                         |
| ----------- | ------------------------------------------------ |
| `Code.gs`   | Google Apps Script ana dosyası                   |
| `README.md` | Bu proje hakkında açıklamaların yer aldığı dosya |

---

## 🚀 Kurulum ve Kullanım

1. Google Sheets'te aşağıdaki gibi bir tablo oluşturun:

| ad ve soyad  | mail              |
| ------------ | ----------------- |
| Ahmet Yılmaz | ahmet@example.com |
| Ayşe Demir   | ayse@example.com  |

2. Google Sheets üst menüsünden `Eklentiler (Extensions)` → `Apps Script` sekmesine tıklayın.
3. Açılan pencerede kodu yapıştırın:
