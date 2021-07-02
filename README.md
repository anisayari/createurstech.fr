# createurstech.fr
Un site internet pour référencer les créateurs de contenus Tech Francophones.

Le site est en construction est disponible ici : https://createurstech.fr 

![LEs créateurs tech](https://github.com/anisayari/createurstech.fr/blob/main/logo_v0.jpg?raw=true)

### Add a creator
A creator have to respect the following requirements :
 - Have a Youtube or Twitch active channels
 - French language
 - For Youtube : minimum og 1000 subscribers
 - For Twitch : minimum of 500 followers
 
 To add a creator you have to ask for a Pull Request. Your pull Request have to modify ONLY the file : '''_data/creators.yml''' and add ALL the followings fiels at the current time for the creator you are asking for proposal

'''
global_name : #
twitter_account: #
followers_twitter: #
youtube_channel: #
followers_youtube: #
number_of_youtube_videos: #
profil_picture : #
description: #
twitch_channel : #
categories: #
followers_twitch: #
plateformes : #
data structuring in progress
'''

### How to contribute to the projects :

-First of all you have to [Install gem](https://jekyllrb.com/docs/installation/)
-Fork the project
-Clone the project
- run 'bundle install' on the root directory
- run 'bundle exec jekyll serve' on the root directory
- You can access the website from 'http://localhost:4000'
- You can access admin panel with a nice-looking interface to modify code to 'http://localhost:4000/admin'
-Modify code
-As for a Pull Request on this repo


### Contribution
You can contribute by forking the project and asking for a pull request (please respect commit messages and pull request comments)
###Todo
- [x] Init project on jekyll
- [x] Setup custom domain
- [x] Add data completion on the front
- [x] Add multiple selection on the home screen
- [ ] Design cards of creators
- [ ] Design buttons
- [ ] Design global website
- [ ] Responsive adaptation
- [ ] Create Data flow from Twitch  / Youtube / Twitter @anisayari
- [ ] Enhancement on README
- [ ] Logo createurs tech
- [ ] Others task are coming..stay tuned
