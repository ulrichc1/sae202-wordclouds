SAE 2.02 - Exploration algorithmique d'un problème
BUT INFORMATIQUE
GROUPE B2:
COUDIN Ulrich - LAMARQUE Noé - MOLINIER Hugo


/**** INSTALLER IMPÉRATIVEMENT CES MODULES AVANT D'UTILISER LE LOGICIEL *****/
- pandas | version 2.0.1
- matplotlib | version 3.7.1
- scikit-learn | version 1.2.2
- spacy | version 3.5.2
- numpy | version 1.24.3
- wordcloud | version 1.9.1.1
- Pillow | version 9.5.0
- pypdf2 | version 3.0.1
- Django | version 4.2.1

Les modules sont à installer via la commande 'pip install <nom_du_module>' dans le terminal de votre IDE (PyCharm, VSCode, etc...).
Les modules à installer sont également présents dans le fichier 'requirements.txt' situé à la racine du projet.

/*****************************************************************************/

WARNING : LE FICHIER 'france.png' EST IMPÉRATIF POUR QUE LE PROGRAMME PRINCIPAL FONCTIONNE CORRECTEMENT (génération des nuages de mots à partir d'un masque).
IL DOIT ÊTRE STOCKÉ DANS LE RÉPERTOIRE './wordclouds'.

/*****************************************************************************

Afin de pouvoir utiliser le logiciel sans interface Web (programme principal en console)) :

Il vous suffit d'ouvrir le fichier " main.py " dans le dossier './src' et exécuter le programme (pensez à bien lire les commentaires et instructions dans la console).

Afin de pouvoir utiliser le logiciel avec interface web (Django):

  Tout d'abord, rendez-vous à la racine du dossier './site' puis :
        Il vous suffit d'exécuter dans le terminal de votre IDE (PyCharm, VSCode, etc...) les commandes suivantes :
                - python manage.py makemigrations (si nécessaire)
                - python manage.py migrate (si nécessaire)
                - python manage.py runserver (obligatoire)
Le site web est accessible à l'adresse suivante : http://localhost:8000/

LE SITE WEB EST HÉBERGÉ SUR L'ADRESSE SUIVANTE : https://wordclouds.ulrichcoudin.com (si vous souhaitez directement accéder au site web)
/*****************************************************************************/

Veuillez noter qu'il est impératif que les nuages de mots soient générés et stockés dans le dossier './site/sae202-react/ sinon ils n'apparaitront pas sur le site et risquent même de générer une erreur.

/*****************************************************************************/

Le répertoire '/site' contient le site web du projet (en portage React hébergé par un serveur Django).
Afin d'accéder aux fichiers sources (codes, modules...) du logiciel il vous suffit de vous rendre dans le répertoire './src'.
Les fichiers correspondant au site web (en .html), au style (.css) et au script Javascript (.js) de la page web sont dans le répertoire './site/sae202-react/src'.

ATTENTION : L'option 'affichage dynamique' sur le site web ne fonctionne pas correctement (les nuages de mots ne s'affichent pas correctement).
Préférez l'option 'affichage statique' pour visualiser les nuages de mots.

/*****************************************************************************/

PROGRAMME PRINCIPAL (en console) 

    Répertoire './src' :
                - main.py : programme principal (en console) permettant de générer les nuages de mots et les fichiers .csv contenant les données brutes des occurences de mots dans les allocutions.
                - cleaning.py : programme permettant le nettoyage des corpus de textes (allocutions).
                - tfidf.py : programme permettant de générer les graphiques de comparaisons entre les différents mandats.
                - pdf_treatment.py : programme permettant de lire, fusionner et convertir les allocutions au format .pdf en .txt (pour le nettoyage des corpus de textes).
                - occurences.py : programme permettant de créer les dictionnnaires d'occurences de chaque mots dans le corpus de texte et de générer les fichiers .csv contenant les données brutes des occurences de mots dans les allocutions.
                - wordclouds.py : programme permettant de générer les nuages de mots à partir des dictionnaires d'occurences de mots dans les allocutions.
                - tests.py : programme testant le nettoyage des corpus de textes (allocutions).

/*****************************************************************************/

Le répertoire '/build' contient une interface utilisateur (site web) permettant de consulter la documentation du projet (dossier '/src')
Afin d'accéder à la documentation du projet il vous suffit de vous rendre dans le répertoire './build' et d'ouvrir le fichier 'index.html' dans votre navigateur web.

/*****************************************************************************/

Le répertoire './csv' contient les fichiers .csv générés par le programme principal (données brutes des occurences de mots dans les allocutions).
Le répertoire './wordclouds' contient les images des nuages de mots générés par le programme principal.

/*****************************************************************************/

Les images de nuage de mots étant déjà générées, les allocutions nommées par mandats (les plus importantes) sont les suivantes :

- all : toutes les allocutions de 1974 à 2022
- giscard : allocutions de Valéry Giscard d'Estaing (1974-1980)
- mitterand : allocutions de François Mitterand - 1er mandat (1981-1987)
- mitterand2 : allocutions de François Mitterand - 2ᵉ mandat (1988-1994)
- chirac : allocutions de Jacques Chirac - 1er mandat (1995-2001)
- chirac2 : allocutions de Jacques Chirac - 2ᵉ mandat (2002-2006)
- sarkozy : allocutions de Nicolas Sarkozy (2007-2011)
- hollande : allocutions de François Hollande (2012-2016)
- macron : allocutions d'Emmanuel Macron - 1er mandat (2017-2021)
- macron2 : allocutions d'Emmanuel Macron - 2ᵉ mandat (année 2022)

/*****************************************************************************/

RÉSUMÉ : 
  - Le répertoire './src' contient les fichiers sources du programme principal (en console).
  - Le répertoire './site' contient les fichiers sources du site web (en React hébergé par un serveur Django).
  - Le répertoire './build' contient la documentation du projet.
  - Le répertoire './csv' contient les fichiers .csv générés par le programme principal (données brutes des occurences de mots dans les allocutions).
  - Le répertoire './wordclouds' contient les images des nuages de mots générés par le programme principal.
  - Le répertoire './analysis' contient les images des graphiques de comparaisons entre les différents mandats (généré par le programme tfidf.py dans le répertoire './src').
  - Le répertoire './doc' contient la documentation du projet à compiler (grâce au module Sphinx).
  - Le répertoire './pdf' contient la totalité des allocutions présidentielles du Nouvel An depuis 1974 en format .pdf (téléchargées depuis le site de l'Élysée).

/*****************************************************************************/

ps : Ne vous occupez pas trop des fichiers .rst, car ils sont auto-générés par le module Sphinx (documentation du projet).

si react et node.js sont déjà installés sur votre système, situez vous à la racine du site web react '/site/sae202-react/ et exécutez juste : 'npm run start' vous devriez avoir accès au site via les adresses suivantes : 'localhost:3000' ou '127.0.0.1:3000'.