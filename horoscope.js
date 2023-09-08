let dogdugunuzGun = Number(prompt("Lütfen Dogdugunuz Günü Giriniz (29, etc.)"));
let dogdugunuzAy = prompt(
  "Lutfen dogdugunuz ayi kucuk harflerle yaziniz(december,march...etc)"
);

if (
  (dogdugunuzGun >= 21 && dogdugunuzAy == "mart") ||
  (dogdugunuzGun <= 20 && dogdugunuzAy == "nisan")
) {
  console.log("Burcunuz: Koc");
} else if (
  (dogdugunuzGun >= 21 && dogdugunuzAy == "nisan") ||
  (dogdugunuzGun <= 20 && dogdugunuzAy == "mayis")
) {
  console.log("Burcunuz: Boga");
} else if (
  (dogdugunuzGun >= 21 && dogdugunuzAy == "mayis") ||
  (dogdugunuzGun <= 21 && dogdugunuzAy == "haziran")
)
  console.log("Burcunuz :Ikizler");
else if (
  (dogdugunuzGun >= 22 && dogdugunuzAy == "haziran") ||
  (dogdugunuzGun <= 22 && dogdugunuzAy == "temmuz")
)
  console.log("Burcunuz :Yengec");
else if (
  (dogdugunuzGun >= 23 && dogdugunuzAy == "temmuz") ||
  (dogdugunuzGun <= 23 && dogdugunuzAy == "agustos")
)
  console.log("Burcunuz :Aslan");
else if (
  (dogdugunuzGun >= 24 && dogdugunuzAy == "agustos") ||
  (dogdugunuzGun <= 23 && dogdugunuzAy == "eylül")
)
  console.log("Burcunuz :Basak");
else if (
  (dogdugunuzGun >= 24 && dogdugunuzAy == "eylül") ||
  (dogdugunuzGun <= 23 && dogdugunuzAy == "ekim")
)
  console.log("Burcunuz :Terazi");
else if (
  (dogdugunuzGun >= 24 && dogdugunuzAy == "ekim") ||
  (dogdugunuzGun <= 22 && dogdugunuzAy == "kasim")
)
  console.log("Burcunuz :Akrep");
else if (
  (dogdugunuzGun >= 23 && dogdugunuzAy == "kasim") ||
  (dogdugunuzGun <= 21 && dogdugunuzAy == "aralik")
)
  console.log("Burcunuz :Yay");
else if (
  (dogdugunuzGun >= 22 && dogdugunuzAy == "aralik") ||
  (dogdugunuzGun <= 20 && dogdugunuzAy == "ocak")
)
  console.log("Burcunuz :Oglak");
else if (
  (dogdugunuzGun >= 21 && dogdugunuzAy == "ocak") ||
  (dogdugunuzGun <= 19 && dogdugunuzAy == "subat")
)
  console.log("Burcunuz :Kova");
else if (
  (dogdugunuzGun >= 20 && dogdugunuzAy == "subat") ||
  (dogdugunuzGun <= 20 && dogdugunuzAy == "mart")
)
  console.log("Burcunuz :Balik");
