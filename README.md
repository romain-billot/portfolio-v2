# Portfolio v2 — Romain Billot

Portfolio personnel de [Romain Billot](https://romain.billot.xyz), développeur Full Stack basé à Montréal.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**

## Structure

```
src/
├── cv.json          # Source de données unique (infos, projets, expériences, compétences)
├── sections/        # Sections de la page (hero, projects, experience, skills, education, contact)
├── ui/              # Composants réutilisables
├── hooks/           # Hooks custom
└── lib/             # Utilitaires
```

## Lancer en local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Données

Tout le contenu vient de `src/cv.json` (format [JSON Resume](https://jsonresume.org/)). Modifier ce fichier pour mettre à jour les infos, projets, expériences et compétences.