# 🚀 Guide de Déploiement - AFLORA Photo

## Prérequis

1. Avoir un compte sur la plateforme choisie (Vercel, Netlify, etc.)
2. Avoir le code sur GitHub/GitLab/Bitbucket
3. Avoir exécuté `npm install` et testé `npm run build` localement

---

## 📦 Déploiement sur Vercel (Recommandé)

### Option 1 : Via l'interface Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Cliquez sur "Add New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Vite :
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (automatique)
   - **Output Directory**: `dist` (automatique)
   - **Install Command**: `npm install` (automatique)
5. Cliquez sur "Deploy"
6. Votre site sera disponible en quelques secondes !

### Option 2 : Via CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Configuration

Le fichier `vercel.json` est déjà configuré pour :
- ✅ Rediriger toutes les routes vers `index.html` (SPA routing)
- ✅ Ajouter des headers de sécurité

### Variables d'environnement

Si vous avez besoin de variables d'environnement, ajoutez-les dans les paramètres du projet sur Vercel.

---

## 🌐 Déploiement sur Netlify

### Option 1 : Via l'interface Netlify

1. Allez sur [netlify.com](https://netlify.com) et connectez-vous
2. Cliquez sur "Add new site" > "Import an existing project"
3. Connectez votre repository
4. Configurez le build :
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Cliquez sur "Deploy site"

### Option 2 : Via CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Configuration

Le fichier `public/_redirects` est déjà configuré pour le routing SPA.

---

## 📄 Déploiement sur GitHub Pages

### Installation

```bash
npm install --save-dev gh-pages
```

### Configuration package.json

Ajoutez dans `package.json` :

```json
{
  "homepage": "https://votreusername.github.io/aflora-photo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Déploiement

```bash
npm run deploy
```

### Configuration GitHub

1. Allez dans Settings > Pages de votre repository
2. Source: `gh-pages` branch
3. Folder: `/ (root)`

---

## 🔧 Autres Plateformes

### Surge.sh

```bash
npm install -g surge
npm run build
cd dist
surge
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## ✅ Vérifications Post-Déploiement

1. **Tester toutes les routes** :
   - `/` (Accueil)
   - `/a-propos`
   - `/services`
   - `/contact`
   - `/mentions-legales`
   - `/politique-confidentialite`

2. **Vérifier les fonctionnalités** :
   - ✅ Formulaire de contact
   - ✅ Liens WhatsApp
   - ✅ Navigation
   - ✅ Images
   - ✅ Animations

3. **Tester sur mobile** :
   - Ouvrir le site sur un téléphone
   - Vérifier le responsive design

4. **Performance** :
   - Tester sur [PageSpeed Insights](https://pagespeed.web.dev/)
   - Objectif : Score > 80

5. **SEO** :
   - Vérifier les métadonnées avec [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Vérifier avec [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 🔄 Mises à jour Futures

Pour mettre à jour le site après déploiement :

1. Faites vos modifications
2. Committez et pushez sur GitHub
3. La plateforme redéploiera automatiquement (si configuré)
4. Ou déployez manuellement avec la commande appropriée

---

## 🐛 Problèmes Courants

### Les routes ne fonctionnent pas après déploiement

**Solution** : Vérifiez que :
- `vercel.json` est présent (pour Vercel)
- `public/_redirects` est présent (pour Netlify)
- Les fichiers sont bien dans le dossier `dist` après build

### Les images ne s'affichent pas

**Solution** : Vérifiez que :
- Les chemins des images sont relatifs (`/image.png` et non `./image.png`)
- Les images sont bien dans le dossier `public/` ou `src/images/`

### Le build échoue

**Solution** : 
- Vérifiez les erreurs dans les logs
- Testez `npm run build` localement
- Vérifiez que toutes les dépendances sont dans `package.json`

---

## 📞 Support

En cas de problème, vérifiez :
1. Les logs de déploiement sur votre plateforme
2. La console du navigateur (F12)
3. Les fichiers de configuration (`vercel.json`, `_redirects`, etc.)

