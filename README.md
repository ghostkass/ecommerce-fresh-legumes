# E‑commerce — Fresh Produce (Vite + React)

Front-end d’e‑commerce, construit avec **Vite 6 + React 18** et une UI moderne (Radix UI, utilitaires CSS). Ce dépôt est prêt pour une **démo locale rapide**, un **build de production**, et un **déploiement statique** (Vercel, Netlify, GitHub Pages, etc.).

---

## 🚀 Démarrage rapide

### Prérequis
- **Node.js ≥ 18** (recommandé : LTS 20)  
  Vérifier : `node -v` et `npm -v`

### Installation & exécution
```bash
# 1) Installer les dépendances
npm install

# 2) Lancer en développement (HMR)
npm run dev
# ➜ ouvre http://localhost:3000 (ou le port affiché)

# 3) Build de production + aperçu local
npm run build
npx vite preview --port 3000
# ➜ http://localhost:3000
```
> Si le port 3000 est occupé : `npm run dev -- --port 4000` ou `npx vite preview --port 4000`.

---

## 📜 Scripts NPM

| Script     | Commande        | Description |
|-----------|------------------|-------------|
| `dev`     | `vite`           | Démarre le serveur de développement (HMR). |
| `build`   | `vite build`     | Build de production (sortie : `dist/` par défaut). |
| `preview` | `vite preview`   | Sert le build localement (ajoute ce script si absent). |

> Ajouter `preview` si besoin :
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## 🧱 Stack technique

- **Vite 6** + **React 18**
- **Radix UI** : `@radix-ui/react-*` (accordion, dialog, menu, popover, select, tabs, tooltip, etc.)
- **Utilitaires UI** : `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`
- **Composants/UX** : `embla-carousel-react` (carrousel), `react-day-picker` (date picker), `react-hook-form` (formulaires), `sonner` (toasts), `react-resizable-panels`, `cmdk` (command palette), `vaul` (sheets/drawers)
- **Graphiques** : `recharts`
- **Thème** : `next-themes` (optionnel) pour dark/light mode

---

## 🗂️ Structure du projet (type Vite)
```
.
├─ index.html
├─ package.json
├─ vite.config.ts (ou .js)
├─ /src
│  ├─ main.tsx / main.jsx      # point d’entrée React
│  ├─ App.tsx / App.jsx
│  ├─ /components              # composants UI
│  ├─ /pages (optionnel)       # pages/écrans
│  ├─ /lib /utils (optionnel)  # utilitaires
│  └─ styles.css / index.css   # styles globaux
└─ /public                     # assets statiques
```

---

## ⚙️ Configuration

- **Port par défaut** : `3000`. Pour changer : `npm run dev -- --port 4000`.
- **Aperçu build** : `vite preview` sert le dossier `dist/` (par défaut).  
  Si `build.outDir` a été personnalisé dans `vite.config`, utilise :  
  `npx vite preview --outDir <dossier>`.

---

## 🧩 Dépannage (FAQ)

### 1) Erreur **EINVALIDPACKAGENAME** liée à `jsr:`
Si tu vois :
```
Invalid package name "jsr:" of package "jsr:@^supabase"
```
c’est qu’une dépendance a été déclarée avec le **préfixe `jsr:`** (format JSR/Deno, non supporté par npm).  
**Solution manuelle** : dans `package.json`, renomme les **clés** `jsr:@scope/package` en `@scope/package`.  
Ex. : `"jsr:@supabase/supabase-js": "^2"` → `"@supabase/supabase-js": "^2"`.

> Évite aussi les clés de type `npm:hono`. Si tu utilises Hono, déclare simplement : `"hono": "^4"`.

### 2) Windows — exécution de scripts npm.ps1 désactivée
Erreur :
```
npm : Impossible de charger ... npm.ps1, l’exécution de scripts est désactivée
```
Ouvre **PowerShell** (mode utilisateur) et exécute :
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```
Relance le terminal.

### 3) Conflits de dépendances / installation qui casse
- Supprime `node_modules/` et `package-lock.json` (et `yarn.lock`/`pnpm-lock.yaml` si présents).
- Relance `npm install`.
- Si besoin : `npm install --legacy-peer-deps`.

### 4) Port déjà utilisé
- Utilise un autre port : `npm run dev -- --port 4000` ou `npx vite preview --port 4000`.

### 5) Registre npm
- Assure-toi d’utiliser le registre officiel : `npm config set registry https://registry.npmjs.org/`  
- Vérifie `.npmrc` (à la racine) et supprime toute redirection exotique de scopes si nécessaire.

---

## 🚢 Déploiement (exemples)

### Vercel / Netlify
- **Build command** : `npm run build`
- **Output directory** : `dist`
- **Install command** : `npm ci` (ou `npm install`)

### GitHub Pages (Vite)
1. Si ton repo n’est pas à la racine (ex. `/mon-repo/`), renseigne `base` dans `vite.config`.
2. Déploie le dossier `dist/` (action GitHub ou `gh-pages`).

---

## 🧪 Bonnes pratiques (recommandé)
- Évite les versions `"*"` : utilise des versions stables (`^`/`~`).
- `.gitignore` minimal :
  ```
  node_modules
  dist
  build
  .env
  ```
- Envisage ESLint/Prettier pour lint/format auto.

---

## 📄 Licence
Ajoute une licence (ex. MIT) et mets à jour :
```
© 2025 Votre Nom. Tous droits réservés.
```

---

## 💬 Support
Ouvre une **issue** avec :
- versions Node & npm (`node -v`, `npm -v`)
- extrait d’erreur principal
- ce que tu as déjà essayé

Bon build & bonne démo ! 🎉
