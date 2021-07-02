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
 
 To add a creator you have to ask for a Pull Request. Your pull Request have to modify ONLY the file : `_data/creators.yml` and add ALL the followings fiels at the current time for the creator you are asking for proposal

```

- categories: #SPECIFY THE CATEGORIES (2 MAX)
  global_name: #SPECIFY USERNAME OF THE CREATOR
  plateforms: ''
  twitch_broadcaster_type: 
  twitch_channel_name: #SPECIFY THE CHANNEL NAME, YOU CAN FIND IT IN TWITCH.TV/CHANNEL_NAME_HERE
  twitch_description: ''
  twitch_followers: ''
  twitch_id: ''
  twitch_number_of_view: ''
  twitch_profil_image_url: ''
  twitter_description: ''
  twitter_followers: ''
  twitter_id: ''
  twitter_name: ''
  twitter_profile_picture: ''
  twitter_screen_name: ''
  youtube_channel_id:  #SPECIFY THE CHANNEL ID , YOU CAN FIND IT IN youtube.com/channel/CHANNEL_ID_HERE OR IF youtube.com/user/CHANNEL_USERNAME_HERE PLEASE CHECK youtube_channel_username AND LEAVE THIS ONE = ''
  youtube_channel_name: ''
  youtube_channel_username: #SPECIFY THE CHANNEL USERNAME , YOU CAN FIND IT IN youtube.com/user/CHANNEL_USERNAME OR IF youtube.com/channel/CHANNEL_ID_HERE PLEASE CHECK youtube_channel_id AND LEAVE THIS ONE = ''
  youtube_custom_url: ''
  youtube_description: ''
  youtube_hidden_subscriber_count: ''
  youtube_profil_image_url: ''
  youtube_subscriber_count: ''
  youtube_video_count: ''
  youtube_view_count: ''

```

### How to contribute to the projects :

-First of all you have to [Install gem](https://jekyllrb.com/docs/installation/)
-Fork the project
-Clone the project
- run 'bundle install' on the root directory
- run 'bundle exec jekyll serve' on the root directory
- You can access the website from `http://localhost:4000`
- You can access admin panel with a nice-looking interface to modify code to `http://localhost:4000/admin`
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
