# 🍍 Pinia – Interactive Live Demo

**State Management mit Vue.js und Pinia**

Dieses Repository enthält eine interaktive Live-Demo, die im Rahmen meiner Präsentation über **Pinia** im Modul *Komponentenbasierte Entwicklung* an der HTW Berlin (Wintersemester 2026/27) entstanden ist.

Anhand einer kleinen Film-Watchlist namens **Pick My Movie** wird demonstriert, wie mehrere Vue-Komponenten mithilfe von Pinia auf einen gemeinsamen Anwendungszustand zugreifen und auf Änderungen reagieren.

**Entwickelt von:** Reem Abdelmagid

## 🎯 Ziel des Projekts

Die Anwendung veranschaulicht die drei Kernkonzepte von Pinia:

- **State:** Speichert gemeinsam genutzte Daten, beispielsweise die Watchlist.
- **Getters:** Berechnen Werte aus dem State, beispielsweise die Anzahl gespeicherter Filme.
- **Actions:** Enthalten Methoden, die den State verändern oder asynchrone Vorgänge ausführen.

Zusätzlich werden Vue-Reaktivität, `storeToRefs()`, `$reset()` und asynchrone Actions demonstriert.

## 🚀 Live-Demo lokal starten

### Voraussetzungen

- [Node.js](https://nodejs.org/) und npm
- Git
- Ein Browser

### 1. Repository klonen

Öffne ein Terminal und führe folgende Befehle aus:

```bash
git clone https://github.com/ReemxA/pinia-presentation.git
cd pinia-presentation
```

Alternativ kannst du das Repository über **Code → Download ZIP** auf GitHub herunterladen und entpacken.

### 2. Abhängigkeiten installieren

```bash
npm install
```

Dieser Befehl installiert die benötigten Pakete, darunter Vue.js, Pinia und Slidev.

### 3. Entwicklungsserver starten

```bash
npm run dev
```

Slidev startet den lokalen Entwicklungsserver und öffnet normalerweise automatisch den Browser.

Falls nicht, öffne:

**http://localhost:3030/**

### 4. Zur interaktiven Demo navigieren

Die Slidev-Präsentation enthält zwei Folien:

1. **Live Demo:** Titelfolie mit animierter Pinia-Ananas.
2. **Pinia Store in Aktion:** Interaktive Film-Watchlist mit Store-Inspector.

Mit der rechten Pfeiltaste gelangst du zur eigentlichen Anwendung.

Beende den Entwicklungsserver im Terminal mit `Strg + C`.

## 📁 Projektstruktur

```text
pinia-presentation/
│
├── components/
│   ├── PiniaIcon.vue
│   ├── MovieList.vue
│   ├── Watchlist.vue
│   ├── WatchlistCounter.vue
│   └── WatchlistDemo.vue
│
├── stores/
│   └── watchlist.js
│
├── setup/
│   └── main.ts
│
├── slides.md
├── style.css
├── package.json
└── README.md
```

### Erklärung der wichtigsten Dateien

| Datei | Aufgabe |
|---|---|
| `stores/watchlist.js` | Zentraler Pinia-Store mit State, Getter und Actions |
| `MovieList.vue` | Zeigt Filme an und ermöglicht das Hinzufügen zur Watchlist |
| `Watchlist.vue` | Zeigt gespeicherte Filme an und ermöglicht deren Entfernung |
| `WatchlistCounter.vue` | Zeigt die Anzahl gespeicherter Filme über einen Getter |
| `WatchlistDemo.vue` | Verbindet die Komponenten und enthält den Store-Inspector und weitere Aktionen |
| `PiniaIcon.vue` | Animierte Ananas auf der Titelfolie |
| `setup/main.ts` | Registriert Pinia in der Slidev-Anwendung |
| `slides.md` | Definiert die beiden Präsentationsfolien |
| `style.css` | Enthält das globale Design der Präsentation |
| `package.json` | Enthält Abhängigkeiten und npm-Skripte |

Das Repository enthält außerdem ergänzende Slidev- und Konfigurationsdateien.

## 🧠 Wie funktioniert die Anwendung?

### 1. Der zentrale Pinia-Store

In `stores/watchlist.js` wird der Store mit `defineStore()` definiert.

Der State enthält:

```javascript
state: () => ({
  movies: [],
  loading: false
})
```

- `movies` speichert die Filme der Watchlist.
- `loading` zeigt an, ob gerade eine Empfehlung geladen wird.

Der Getter `movieCount` berechnet die Anzahl gespeicherter Filme:

```javascript
getters: {
  movieCount: (state) => state.movies.length
}
```

Die Actions übernehmen unter anderem das Hinzufügen und Entfernen von Filmen.

### 2. Gemeinsamer State über mehrere Komponenten

Alle beteiligten Komponenten greifen auf denselben Store zu:

```javascript
import { useWatchlistStore } from '../stores/watchlist'

const store = useWatchlistStore()
```

Der grundlegende Ablauf:

```text
MovieList.vue
     |
     | addMovie(movie)
     v
Pinia Store (watchlist.js)
     |
     | State wird verändert
     |
     +---> Watchlist.vue
     |
     +---> WatchlistCounter.vue
     |
     +---> Store-Inspector
```

Wird ein Film hinzugefügt, aktualisieren sich die abhängigen Komponenten automatisch durch das Reaktivitätssystem von Vue.

### 3. Integrierter Store-Inspector

In `WatchlistDemo.vue` ist ein eigener Store-Inspector implementiert.

Er zeigt:

- den aktuellen State als JSON (`store.$state`)
- den Getter `movieCount`
- den aktuellen Loading-Status

Dadurch lassen sich Zustandsänderungen direkt während der Benutzung beobachten.

**Hinweis:** Der integrierte Inspector ist eine eigene Visualisierung und nicht identisch mit den offiziellen Vue Devtools.

### 4. Asynchrone Actions

Über den Button **„Filmempfehlung laden“** wird `loadRecommendation()` ausgeführt.

Die Action:

1. setzt `loading` auf `true`,
2. wartet mit `async`/`await` auf eine simulierte Antwort,
3. fügt den Film *The Matrix* zur Watchlist hinzu,
4. setzt `loading` anschließend wieder auf `false`.

Die Wartezeit beträgt ungefähr 1,5 Sekunden.

**Es wird keine echte API aufgerufen.** Die Daten sind lokal definiert, damit die Demo ohne Backend und ohne externen Filmservice funktioniert.

### 5. State zurücksetzen

Der Button **„Watchlist zurücksetzen“** verwendet:

```javascript
store.$reset()
```

Da hier ein Pinia Option Store verwendet wird, setzt diese Methode den State auf seine Anfangswerte zurück.

## 🧪 Funktionen selbst ausprobieren

Nach dem Start der Demo kannst du:

- Filme zur Watchlist hinzufügen
- Filme aus der Watchlist entfernen
- den reaktiven Filmzähler beobachten
- Änderungen im Store-Inspector verfolgen
- die gesamte Watchlist zurücksetzen
- eine Filmempfehlung asynchron laden

**Tipp:** Füge zunächst mehrere Filme hinzu und beobachte, wie sich `movies` und `movieCount` im Inspector verändern. Setze anschließend die Watchlist zurück und teste die asynchrone Action.

## 🛠️ Verwendete Technologien

- **Vue.js 3** – Komponenten und reaktive Benutzeroberfläche
- **Pinia** – Zentrales State Management
- **Slidev** – Interaktive Präsentationsumgebung
- **JavaScript / TypeScript** – Anwendungslogik
- **HTML / CSS** – Struktur und Design

## ℹ️ Hinweise

Dieses Projekt ist eine **Lehr- und Demonstrationsanwendung**, keine vollständige Filmplattform.

Die Filmdaten sind lokal hinterlegt. Eine Datenbank, ein Backend und eine dauerhafte Speicherung der Watchlist sind nicht implementiert. Nach einem Neuladen beginnt die Watchlist daher wieder mit ihrem initialen Zustand.

Der Schwerpunkt liegt auf dem Verständnis von Pinia und der Kommunikation zwischen Vue-Komponenten.

## 📚 Weiterführende Dokumentation

- [Pinia](https://pinia.vuejs.org/)
- [Vue.js](https://vuejs.org/)
- [Slidev](https://sli.dev/)

---

**Reem Abdelmagid**  
HTW Berlin · Wirtschaftsinformatik  
Modul: Komponentenbasierte Entwicklung · WiSe 2026/27
