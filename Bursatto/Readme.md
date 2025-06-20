# Google Takvim Etkinliklerini Google Sheets'e Aktaran Script

Bu Google Apps Script projesi, belirli bir Google Takvim'den son 30 gün içindeki etkinlikleri alarak bir Google Sheets dosyasına otomatik olarak kaydeder. Etkinlik bilgileri, başlık, tarih, açıklama, konum ve katılımcılar gibi alanları içerir.

## Özellikler

- Belirtilen takvimden etkinlikleri çeker
- Etkinlik bilgilerini satır satır bir Google Sheets dosyasına yazar
- Aynı etkinliği tekrar yazmaz (isteğe bağlı olarak geliştirilebilir)
- Katılımcı e-postalarını liste halinde gösterir

## Kullanım

1. Google Sheets üzerinde yeni bir çalışma dosyası oluşturun.
2. Üst menüden `Uzantılar > Apps Script` yolunu izleyin.
3. Script editörüne bu repo içindeki `Code.gs` dosyasındaki kodu yapıştırın.
4. Takvim ID'sini ve Sheet ID'sini kendi bilgilerinizle değiştirin.
5. Script'i çalıştırmak için `takvimdenExcelYaz()` fonksiyonunu çağırın.
6. İlk çalıştırmada Google yetkilendirmesi istenecektir, izin verin.

## Gereksinimler

- Google hesabı
- Google Calendar erişimi
- Google Sheets erişimi
- Apps Script ortamı (https://script.google.com)

## Dikkat Edilmesi Gerekenler

- Bu script, yalnızca Google Apps Script ortamında çalışır. Node.js veya tarayıcıda çalışmaz.
- Takvim ID'si ve Sheet ID'si gibi hassas bilgileri herkese açık hale getirmeyin.

## Geliştirme Önerileri

- Etkinliklerin tekrar eklenmesini önlemek için kontrol mekanizması eklenebilir.
- Belirli etiketlere veya katılımcılara göre filtreleme yapılabilir.
- Otomatik günlük/haftalık tetikleme için zamanlayıcı (`Trigger`) eklenebilir.
