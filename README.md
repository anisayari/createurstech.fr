# createurstech.fr
Un site internet pour référencer les créateurs de contenus Tech Francophones.

Le site est en construction et disponible ici : https://createurstech.fr 

![Les créateurs tech](https://github.com/anisayari/createurstech.fr/blob/main/banner.png?raw=true)

### Add a creator
A creator has to respect the following requirements:
 - To have a Youtube or Twitch active channel
 - French language
 - For Youtube: a minimum of 1,000 subscribers
 - For Twitch: a minimum of 1,000 followers
 
To add a creator, you need to make a Pull Request. Your Pull Request has to modify ONLY the file: `_data/creators-short.json` and add ALL the followings fields at the current time for the creator you are submitting a proposal for.

```
{
  "#SPECIFY USERNAME OF THE CREATOR": {
    "youtube_channel_id": #SPECIFY THE CHANNEL ID , YOU CAN FIND IT IN youtube.com/channel/CHANNEL_ID_HERE OR IF youtube.com/user/CHANNEL_USERNAME_HERE PLEASE CHECK youtube_channel_username AND LEAVE THIS ONE = '',
    "youtube_channel_username": #SPECIFY THE CHANNEL USERNAME , YOU CAN FIND IT IN youtube.com/user/CHANNEL_USERNAME OR IF youtube.com/channel/CHANNEL_ID_HERE PLEASE CHECK youtube_channel_id AND LEAVE THIS ONE = '',
    "categories": #SPECIFY CATEGORIES (2MAX, separated by blank space) between dev_web, ia_&_machine_learning, cybersécurité, design_ui/ux,réseaux,admin_&_system,devops,actu_tech, blockchain, dev_mobile
    "twitch_channel_name": #SPECIFY THE CHANNEL NAME, YOU CAN FIND IT IN TWITCH.TV/CHANNEL_NAME_HERE,
    "twitter_screen_name": #SPECIFY THE CHANNEL NAME, YOU CAN FIND IT IN twitter.com/TWITTER_USERNAME,
  }
```

### How to contribute to the project:

- First of all you have to [Install Jekyll gem](https://jekyllrb.com/docs/installation/)
- Fork the project
- Clone the project
- Run 'bundle install' in the root directory
- Run 'bundle exec jekyll serve' in the root directory
- You can access the website at `http://localhost:4000`
- You can access the admin panel with a nice-looking interface to modify code at `http://localhost:4000/admin`
- Modify the code
- Make a Pull Request to this repo


### Contribution
You can contribute by forking the project and making a Pull Request (please respect commit messages and Pull Request comments)
### Todo
- [x] Init project on Jekyll
- [x] Setup custom domain
- [x] Add data completion on the front
- [x] Add multiple selections on the home screen
- [ ] Design cards of creators
- [ ] Design buttons
- [ ] Design global website
- [ ] Responsive adaptation
- [x] Create Data flow from Twitch  / Youtube / Twitter
- [x] Enhancement on README
- [x] Logo createurs tech
- [ ] Add random button to show up a random creator
- [x] Add shuffle order for each refresh
- [x] Add Readmore on card instead of scroll
