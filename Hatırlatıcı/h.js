function etkinlikHatirlatmaMailiGonder() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const veriler = sheet.getDataRange().getValues();
  
  // Başlık satırını atlıyoruz, 2. satırdan başlıyoruz
  for (let i = 1; i < veriler.length; i++) {
    const adSoyad = veriler[i][0]; // A sütunu
    const mail = veriler[i][1];    // B sütunu

    if (mail && adSoyad) {
      const konu = "Etkinlik Hatırlatması";
      const mesaj = `
Merhaba ${adSoyad},

Yaklaşan etkinliğimizi hatırlatmak istiyoruz!

Tarih: 25 Haziran 2025
Saat: 14:00
Yer: Bursa Teknik Üniversitesi, Konferans Salonu

Katılımınızı dört gözle bekliyoruz.

Sevgiler,
Etkinlik Ekibi
`;

      // Mail gönderme
      MailApp.sendEmail(mail, konu, mesaj);
    }
  }
}
