function takvimdenExcelYaz() {
  const takvim = CalendarApp.getCalendarById('');   // Takvim ID yazılacak

  const sheet = SpreadsheetApp.openById('').getSheetByName('Sayfa1');
   //ID yazılacak
  const bugun = new Date();
  const oncekiTarih = new Date();
  oncekiTarih.setDate(bugun.getDate() - 30);

  const etkinlikler = takvim.getEvents(oncekiTarih, bugun);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Başlık", "Başlangıç", "Bitiş", "Açıklama", "Konum", "Oluşturulma Tarihi", "Katılımcılar"]);
  }

  etkinlikler.forEach(function (e) {
    const misafirler = e.getGuestList().map(g => g.getEmail()).join(", ");
    sheet.appendRow([
      e.getTitle(),
      e.getStartTime(),
      e.getEndTime(),
      e.getDescription(),
      e.getLocation(),
      new Date(),
      misafirler
    ]);
  });

  Logger.log("Toplam etkinlik yazıldı: " + etkinlikler.length);
}