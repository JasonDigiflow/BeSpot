# BeSpot - Guide Digital CHR

BeSpot est un guide digital CHR (Cafés, Hôtels, Restaurants, Loisirs) qui référence gratuitement tous les établissements et met en avant les partenaires BeHype avec une fiche premium et un badge.

## 🚀 Technologies utilisées

- **Next.js 14** (App Router)
- **React 18** 
- **JavaScript (JSX)** - Pas de TypeScript
- **Tailwind CSS** - Pour le styling
- **CSS Animations** - Animations natives (pas de librairies tierces)

## 📦 Installation

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Étapes d'installation

1. Cloner le repository :
```bash
git clone https://github.com/JasonDigiflow/BeSpot.git
cd BeSpot
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📜 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Lance l'analyse du code

## 🏗️ Structure du projet

```
BeSpot/
├── app/                      # Pages et routes (App Router)
│   ├── layout.jsx           # Layout principal
│   ├── page.jsx             # Page d'accueil
│   ├── etablissements/      # Liste et détail des établissements
│   ├── a-propos/            # Page À propos
│   ├── contact/             # Page Contact
│   └── api/                 # Routes API
│       └── contact/         # API pour le formulaire de contact
├── components/              # Composants React réutilisables
│   ├── NavBar.jsx          # Barre de navigation
│   ├── Footer.jsx          # Pied de page
│   ├── BadgePartner.jsx    # Badge partenaire BeHype
│   ├── CardPlace.jsx       # Carte d'établissement
│   ├── Filters.jsx         # Filtres de recherche
│   ├── Pagination.jsx      # Pagination
│   ├── RatingStars.jsx     # Étoiles de notation
│   ├── HeroGradient.jsx    # Hero avec dégradé animé
│   └── Toast.jsx           # Notifications toast
├── data/                    # Données mockées
│   └── etablissements.json # Liste des établissements
├── styles/                  # Styles globaux
│   └── globals.css         # CSS global et Tailwind
├── public/                  # Assets statiques
└── package.json            # Dépendances et scripts
```

## 🎨 Fonctionnalités

### Pages principales

1. **Homepage** (`/`)
   - Hero avec animations CSS (dégradé animé)
   - Section "Pourquoi BeSpot"
   - Établissements partenaires mis en avant
   - CTA pour les propriétaires

2. **Liste des établissements** (`/etablissements`)
   - Grille responsive d'établissements
   - Filtres : recherche, catégorie, ville
   - Tri : partenaires d'abord, note, alphabétique
   - Pagination client-side

3. **Fiche établissement** (`/etablissements/[slug]`)
   - Galerie d'images
   - Informations détaillées
   - Badge partenaire si applicable
   - Avis mockés
   - Carte Google Maps embed

4. **À propos** (`/a-propos`)
   - Mission et valeurs
   - Modèle économique
   - Informations sur le partenariat

5. **Contact** (`/contact`)
   - Formulaire de contact fonctionnel
   - Informations de contact
   - Toast de confirmation

## 🔧 Personnalisation

### Ajouter un établissement

Pour ajouter un nouvel établissement, modifiez le fichier `data/etablissements.json` :

```json
{
  "id": 21,
  "slug": "mon-restaurant-paris",
  "name": "Mon Restaurant",
  "category": "restaurant",
  "city": "Paris",
  "country": "France",
  "rating": 4.5,
  "isPartner": false,
  "images": ["url-image-1", "url-image-2"],
  "description": "Description de l'établissement",
  "tags": ["Tag1", "Tag2"],
  "address": "Adresse complète",
  "hours": "Horaires d'ouverture",
  "lat": 48.8566,
  "lng": 2.3522
}
```

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'bespot-blue': '#4A90E2',
  'bespot-orange': '#FF8C42',
  'bespot-dark': '#2C3E50',
  'bespot-light': '#F8F9FA',
}
```

## 🚀 Déploiement sur Vercel

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Cliquer sur "Import Project"
4. Sélectionner le repository BeSpot
5. Les paramètres par défaut fonctionnent parfaitement
6. Cliquer sur "Deploy"

Votre site sera accessible à l'adresse : `https://bespot.vercel.app`

## 📱 Responsive Design

L'application est entièrement responsive et optimisée pour :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)

## ⚡ Performance

- Images optimisées avec `next/image`
- CSS animations natives (pas de JS)
- Lazy loading des images
- Code splitting automatique par Next.js

## 🔒 Sécurité

- Validation des formulaires côté client et serveur
- Protection contre les injections XSS
- Headers de sécurité configurés par Next.js

## 📄 License

Ce projet est sous license MIT.

## 🤝 Contact

Pour toute question ou suggestion :
- Email : contact@bespot.fr
- Site : [BeSpot](https://bespot.fr)
- Propulsé par [BeHype](https://behype.fr)

---

Développé avec ❤️ par l'équipe BeSpot