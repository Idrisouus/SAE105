# Lien du SiteWeb : `traore.projetsmmichamps.fr`
# Lien du Opquast : `https://docs.google.com/spreadsheets/d/1ZpxsvFbG7n9AgW8Gy6F0IEYynhEeDi63Wpwhe0_rbJs/edit?usp=sharing`



# Installation des fichiers sur un serveur local XAMPP via FileZilla

## 1. Préparer votre environnement

- **Installez XAMPP** sur votre ordinateur local.
- **Téléchargez et installez FileZilla** pour gérer la connexion FTP à votre serveur.
- **Organisez vos fichiers dans un dossier structuré** :
  - Un fichier html nommé **`index.html`** (obligatoire pour afficher la page par défaut).
  - Un dossier **`images`** pour toutes vos images.
  - Un dossier **`sons`** pour les fichiers audio.
  - Fichier **`.js`** (data et script).

---

## 2. Configurer FileZilla

1. Ouvrez **FileZilla** et accédez à **Fichier > Gestionnaire de Sites**.
2. Cliquez sur **Nouveau site** et configurez les paramètres suivants :
   - **Hôte** : `ftp.traore.projetsmmichamps.fr`
   - **Port** : laissez vide ou entrez `21` (par défaut pour FTP).
   - **Chiffrement** : sélectionnez **Connexion FTP explicite sur TLS si disponible**.
   - **Type d'authentification** : choisissez **Demander le mot de passe**.
   - **Utilisateur** : `traore`
   - **Mot de passe** : entrez le mot de passe fourni par votre professeur d’hébergement.
3. Cliquez sur **Connexion** pour établir une session sécurisée.

---

## 3. Transférer les fichiers vers le serveur

1. Une fois connecté, accédez au dossier **`public_html`** sur le serveur :
   - Si ce dossier n'existe pas, demandez confirmation à votre professeur ou à l'hébergeur.
2. Glissez-déposez les fichiers et dossiers suivants dans **`public_html`** :
   - **Le fichier principal** : `index.html`.
   - **Le dossier `images`** : contenant toutes vos images.
   - **Le dossier `sons`** : contenant vos fichiers audio.
   - **Les fichiers `js`** : contenant vos data et scripts.
3. Vérifiez que tous les fichiers ont bien été transférés dans le répertoire.

---

## 4. Tester votre site

- Ouvrez un navigateur web.
- Entrez l’URL suivante : `http://traore.projetsmmichamps.fr`.
- Si tout est correctement configuré :
  - Votre page d'accueil (le fichier `index.html`) s'affichera.
  - Les images et sons seront fonctionnels grâce à leur organisation dans les dossiers dédiés.

---

