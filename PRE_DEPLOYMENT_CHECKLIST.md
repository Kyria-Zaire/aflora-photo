# ✅ Checklist Pré-Déploiement - AFLORA Photo

## 🔴 PRIORITÉ HAUTE (À faire avant déploiement)

### 1. **Métadonnées SEO et Open Graph**
- [ ] Ajouter les métadonnées Open Graph pour le partage sur les réseaux sociaux
- [ ] Ajouter les métadonnées Twitter Card
- [ ] Ajouter un favicon
- [ ] Créer un fichier `robots.txt`
- [ ] Créer un `sitemap.xml` (optionnel mais recommandé)

### 2. **Liens Réseaux Sociaux**
- [ ] Mettre à jour les liens Facebook, Instagram, Twitter, LinkedIn dans `Footer.jsx` (actuellement `#`)
- [ ] Vérifier que tous les liens externes fonctionnent

### 3. **Configuration SPA Routing**
- [ ] Créer `public/_redirects` pour Netlify
- [ ] Créer `public/vercel.json` pour Vercel (ou `vercel.json` à la racine)
- [ ] Tester que toutes les routes fonctionnent après build

### 4. **Performance et Optimisation**
- [ ] Vérifier que toutes les images ont un attribut `alt` descriptif
- [ ] Optimiser les images locales si nécessaire
- [ ] Vérifier le lazy loading des images

---

## 🟡 PRIORITÉ MOYENNE (Recommandé)

### 5. **Console et Debug**
- [ ] Supprimer ou commenter `console.warn` dans `DomeGallery.jsx` (ligne 39)
- [ ] Vérifier qu'il n'y a pas d'autres `console.log` en production

### 6. **Accessibilité**
- [ ] Vérifier les contrastes de couleurs (WCAG AA minimum)
- [ ] Tester la navigation au clavier
- [ ] Vérifier les labels ARIA si nécessaire

### 7. **Analytics et Tracking** (optionnel)
- [ ] Ajouter Google Analytics si souhaité
- [ ] Ajouter Facebook Pixel si souhaité

### 8. **Sécurité**
- [ ] Vérifier les headers de sécurité (CSP, etc.) - généralement géré par l'hébergeur
- [ ] S'assurer qu'aucune information sensible n'est dans le code

---

## 🟢 PRIORITÉ BASSE (Améliorations futures)

### 9. **PWA (Progressive Web App)**
- [ ] Créer un manifest.json
- [ ] Ajouter un service worker
- [ ] Créer des icônes pour différentes tailles

### 10. **Internationalisation**
- [ ] Si besoin, préparer la structure pour plusieurs langues

### 11. **Tests**
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Tester sur différents appareils (mobile, tablette, desktop)
- [ ] Tester la vitesse de chargement (PageSpeed Insights)

---

## 📝 Notes Importantes

### Configuration Email
- L'email `contact@aflora-photo.com` est utilisé partout - vérifier qu'il est valide ou le remplacer

### Images Unsplash
- Les images utilisent des URLs Unsplash - elles sont fiables mais dépendent d'un service externe
- Pour une solution plus robuste, considérer héberger les images localement ou sur un CDN

### Build de Production
```bash
npm run build
```
Le dossier `dist/` contiendra les fichiers statiques à déployer.

---

## 🚀 Plateformes de Déploiement Recommandées

### Vercel (Recommandé pour React)
1. Connecter le repository GitHub
2. Build command: `npm run build`
3. Output directory: `dist`
4. Framework preset: Vite

### Netlify
1. Connecter le repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Ajouter `public/_redirects` avec `/* /index.html 200`

### GitHub Pages
1. Installer `gh-pages`: `npm install --save-dev gh-pages`
2. Ajouter dans `package.json`:
   ```json
   "homepage": "https://votreusername.github.io/aflora-photo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

