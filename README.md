# Klima Sistemi — Next.js

Sajt koristi Next.js App Router, React i Tailwind CSS 4 (PostCSS integracija). Rasporedi koriste Tailwind utility klase, a komponente Tailwind @apply pravila i prilagođene animacije. Zadržan je postojeći identitet firme, uz animacije pri skrolanju, interaktivnu demonstraciju temperature, animirana česta pitanja i prilagodljiv mobilni meni. Animacije poštuju postavku smanjenog kretanja na uređaju.

## Pokretanje

Potreban je Node.js 22 ili noviji.

```powershell
npm install
npm run dev
```

Otvorite http://127.0.0.1:3000.

## Produkcija

```powershell
npm run build
npm start
```

Za Vercel izaberite direktorij `klima-sistemi` i framework Next.js. Output Directory ostavite na podrazumijevanoj vrijednosti. Nisu potrebne varijable okruženja.

## Datoteke

- `src/app/page.jsx`: stranica i interakcije.
- `src/app/layout.jsx`: jezik, SEO i metapodaci.
- `src/app/globals.css`: dizajn, mobilni prikaz i animacije.
- `public/logo-mark.svg`: postojeći logo.

Područje rada: Sarajevo i okolina. Telefon i e-mail još nisu dodani. Obrazac priprema tekstualnu datoteku lokalno i ne šalje poruke. Kontrole temperature su demonstracija, nisu povezane s klima uređajem. Fotografije se učitavaju s Unsplasha, a fontovi s Google Fonts servisa.
