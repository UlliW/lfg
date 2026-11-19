# LFG-Tools

## Vorschau und Veröffentlichung

ZIP entpacken und `index.html` im Browser öffnen. Für GitHub Pages den **Inhalt**
des Pakets einschließlich des Ordners `tools` und der Datei `.nojekyll` in
die gewählte Veröffentlichungsquelle des neuen Repositorys legen. Die Startdatei
`index.html` liegt dort auf der obersten Ebene. Alle internen Links funktionieren
auch unter einem Repository-Pfad wie `/lfg-tools/`.

Vor dem öffentlichen Betrieb die schulischen Angaben zu Impressum und Datenschutz
abstimmen und auf der Startseite verlinken. Der mitgelieferte Gradnetz-Simulator lädt
seine Weltkarte von Wikimedia Commons und benötigt dafür eine Internetverbindung.

## Neue Kachel ergänzen

1. Für eine HTML-Datei einen Ordner unter `tools/` anlegen, z. B. `tools/timer/`.
   Die Startdatei als `index.html` ablegen. Bei einer ZIP alle benötigten Dateien
   mit derselben Ordnerstruktur übernehmen.
2. In `tools.js` vor der letzten Zeile `];` einen Eintrag ergänzen.

   ```js
   {
     title: "Unterrichtstimer",
     description: "Countdown einstellen · Restzeit anzeigen",
     url: "tools/timer/index.html",
   },
   ```

   Für eine externe Seite die vollständige HTTPS-Adresse unter `url` eintragen.
   Die Reihenfolge der Einträge bestimmt die Reihenfolge der Kacheln.
3. Startseite neu laden, auf die neue Kachel klicken und das Tool ausprobieren.
   Bei Updates den Ordnernamen beibehalten, damit bestehende Links weiter funktionieren.
