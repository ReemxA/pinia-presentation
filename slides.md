---
theme: seriph
title: Pinia – Live Demo
transition: fade
duration: 5min
colorSchema: light
layout: default
class: pinia-cover-slide
background: '#FFF8A7'
---

<div class="pinia-kicker">06 / PRAXIS · PINIA</div>

# LIVE DEMO

<div class="pinia-cover-pill">PICK MY MOVIE · WATCHLIST</div>

<div class="pinia-cover-description">State, Getters und Actions in einer reaktiven Vue-Anwendung.</div>

<div class="pinia-yellow-circle"></div>

<PiniaIcon class="pinia-character" />

<div class="pinia-cover-footer">WEITER → ZUR INTERAKTIVEN DEMO</div>

<!--
EINSTIEG · ca. 10–15 Sekunden
„Jetzt kommen wir zur Live-Demo. An unserer kleinen Film-Anwendung
Pick My Movie zeige ich, wie Pinia State, Getters und Actions verbindet
und wie die Vue-Komponenten auf Änderungen reagieren.“
-->

---
layout: default
class: pinia-watchlist-slide
background: '#FFF8A7'
transition: none
---

<div class="pinia-demo-kicker">PICK MY MOVIE / LIVE-ANWENDUNG</div>

# PINIA STORE IN AKTION

<div class="pinia-demo-badge">● LIVE-DEMO</div>

<div class="pinia-demo-info">Filme hinzufügen · State beobachten · zurücksetzen · Empfehlung laden</div>

<WatchlistDemo />

<!--
LIVE-DEMO · ca. 5 Minuten
0:00–1:00: Film hinzufügen: @click ruft store.addMovie(movie) auf.
1:00–2:00: Watchlist und Getter movieCount reagieren automatisch.
2:00–3:00: Im Store-Inspector movies und loading beobachten.
3:00–4:00: $reset() setzt den Option Store zurück.
4:00–5:00: Empfehlung laden: loading true → await → Film speichern → false.
Danach zurück nach Canva wechseln.
-->
