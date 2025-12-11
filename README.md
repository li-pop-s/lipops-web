
# Page web pour communication inter-asso

## Dépendances

Fait avec [Eleventy](https://www.11ty.dev/), un générateur de site statique en [Node.js](https://nodejs.org).

Pour Node.js : une manière de l'installer (sous Linux) est [Node Version Manager](https://github.com/nvm-sh/nvm) :

~~~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
nvm install --lts
~~~

## Préparation du dépot

Après récupération du dépot, installation de Eleventy avec

~~~
npm install
~~~


## Développement

Le serveur de développement est disponible avec

~~~
npm run dev
~~~


## Structure du dépot

La page web principale est `index.md`.

La mise en page html est dans les template nunjuck dans le répertoire `_includes`.

Le CSS est dans les fichiers dans `styles`. Les différents fichier css sont combinés
grâce au fichier nunjuck `bundle_style.njk`.

Les images et logo sont dans le dossier `public` dont le contenu est copié directement.

> Have Fun.