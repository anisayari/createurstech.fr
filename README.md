# createurstech.fr
Un site internet pour référencer les créateurs de contenus Tech Francophones.

Le site est en construction et disponible ici : https://createurstech.fr 

![Les créateurs tech](https://github.com/anisayari/createurstech.fr/blob/main/banner.png?raw=true)

### Ajouter un créateur
Tout le monde peut être ajouté à la liste des créateurs. Cependant, un processus automatique vérifiera les conditions suivantes pour afficher les créateurs sur le site web. N'hésitez donc pas à ajouter TOUS les créateurs afin d'être automatiquement ajouté sur le site.
Un créateur doit respecter les conditions suivantes pour être présent sur le site :
 - Avoir une chaîne active sur Youtube ou Twitch.
 - Être de langue française
 - Pour Youtube : un minimum de 10k abonnés
 - Pour Twitch : être Partner
 
Pour ajouter un créateur, vous devez faire une Pull Request. Votre Pull Request doit modifier UNIQUEMENT le fichier : `_data/creators-short.json` et ajouter TOUS les champs suivants à l'heure actuelle pour le créateur pour lequel vous soumettez une proposition.

```
{
  "#SPECIFY USERNAME OF THE CREATOR": {
    "youtube_channel_id": #SPECIFY THE CHANNEL ID , YOU CAN FIND IT IN youtube.com/channel/CHANNEL_ID_HERE OR IF youtube.com/user/CHANNEL_USERNAME_HERE PLEASE CHECK youtube_channel_username AND LEAVE THIS ONE = '',
    "youtube_channel_username": #SPECIFY THE CHANNEL USERNAME , YOU CAN FIND IT IN youtube.com/user/CHANNEL_USERNAME OR IF youtube.com/channel/CHANNEL_ID_HERE PLEASE CHECK youtube_channel_id AND LEAVE THIS ONE = '',
    "categories": #SPECIFY CATEGORIES (2MAX, separated by blank space) between dev_web, ia_&_machine_learning, cybersécurité, design_ui/ux,réseaux,admin_&_system,devops,actu_tech, blockchain, dev_mobile, makers 
    "twitch_channel_name": #SPECIFY THE CHANNEL NAME, YOU CAN FIND IT IN TWITCH.TV/CHANNEL_NAME_HERE,
    "twitter_screen_name": #SPECIFY THE CHANNEL NAME, YOU CAN FIND IT IN twitter.com/TWITTER_USERNAME,
  }
```

### Comment contribuer au projet :

- Tout d'abord, vous devez [Installer Jekyll gem](https://jekyllrb.com/docs/installation/)
- Bifurquer, fork le projet
- Clonez le projet
- Exécutez 'bundle install' dans le répertoire racine
- Lancez 'bundle exec jekyll serve' dans le répertoire racine.
- Vous pouvez accéder au site web à l'adresse `http://localhost:4000`.
- Vous pouvez accéder au panneau d'administration avec une belle interface pour modifier le code à `http://localhost:4000/admin`
- Modifier le code
- Faites une Pull Request dans ce repo sur la branche test


### Contribution
Vous pouvez contribuer en forkant le projet et en faisant une pull request sur la branche test (faite un message de commit et de pull request clair svp. Pour chaque modification graphique il faut joindre une image avant/aprés au message)
### Todo
- [x] Initialiser le projet sur Jekyll
- [x] Configuration du domaine personnalisé
- [x] Ajout de la complétion des données (front)
- [x] Ajouter des sélections multiples sur l'écran d'accueil
- [x] Concevoir des cartes de créateurs
- [x] Design des boutons
- [x] Design du site global
- [x] Adaptation responsive(mobile, tablette, pc)
- [x] Créer un flux de données à partir de Twitch / Youtube / Twitter
- [x] Amélioration du fichier README
- [x] Logo créateurs tech
- [x] Ajouter un bouton aléatoire pour afficher un créateur aléatoire
- [x] Add shuffle order for each refresh
- [x] Add Readmore on card instead of scroll
