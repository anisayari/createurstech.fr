
<link rel="stylesheet" href="/assets/css/styles.css">
<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>
<header>
  <img src="banner.png">
</header>
  <div class='filters'>
    <h2> Plateforme </h2>
    <div class="button-group filter-button-group" data-filter-group='plateform'>
        {% for plateform in site.data.plateforms %}
        <button class='button button_tags' data-filter=".{{plateform}}">{{plateform}}</button>
        {%endfor%}
        <button class='button button_tags button_plateform'  data-filter="">Tout</button>
    </div>

    <h2> Sujet </h2>
    <div class="button-group filter-button-group" data-filter-group='categories' >
        {% for categorie in site.data.categories %}
        <button class='button button_tags' data-filter=".{{categorie}}">{{categorie}}</button>
        {%endfor%}
        <button class='button button_tags button_categorie'  data-filter="*">Tout</button>
    </div>
  </div>

  <h2> Recherche </h2>

  <div class="search">
    <img class="search-icon" src="assets/images/followers.svg"/>
    
    <input type="search" class="quicksearch" placeholder="Créateurs-trices" name="search" id='search' />
    <button class='button button_tags' onclick="shuffleCard()" >Aléatoire</button>

  </div>



<div class="grid ">
  <div class="grid-sizer"></div>
        {% for creators in site.data.creators %}
				{% if creators.condition_card %}
            <div class="card {{creators.categories}} {{creators.plateforms}}">
                <div class="upper-right">
                  <p>{{ creators.youtube_subscriber_count_abbreviation}} </p>
                </div>
                <div class='title'>
                    {% if creators.youtube_profil_image_url != '' %}
                    <img src='{{creators.youtube_profil_image_url}}'  class="rounded profil-image" />
                    {% else %}
                    <img src='{{creators.twitch_profil_image_url}}'  class="rounded profil-image" />
                    {% endif %}
                    <p class="global_name {{ creators.global_name }} ">  @{{ creators.global_name }} </p>
                    <span></span>
                </div>
                <!--div class="categories">
                  <p class="category">
                    #Python
                  </p>
                  <p class="category">
                    #IA
                  </p>
                </div-->
                <p class="description ">
									{% if creators.youtube_description != '' %}
                    {{ creators.youtube_description | newline_to_br}}
									{% else %}
									  {{ creators.twitch_description |  newline_to_br}}
									{% endif %}
                </p>
                <div class="social-networks">
                  {% if  creators.twitter_account_name   != '' and creators.twitter_followers != '' %}
                  <a class="button-twitter info" href='https://twitter.com/@{{ creators.screen_name| markdownify | strip_html}}' target="_blank">
                    <i class="fab fa-twitter"></i>
                    <p class="follower-counter">{{ creators.twitter_followers }}</p>
                    <img src="assets/images/followers.svg"/>
                  </a>
                  {% endif %}
                  {% if creators.youtube_channel_name  != ''  and	creators.condition_youtube	%}
                  <a class='button-youtube info' href='https://youtube.com/channel/{{ creators.youtube_channel_id | markdownify | strip_html }}' target="_blank">
                      <img src="assets/images/youtube.svg"/>
                      <p class="follower-counter" >{{ creators.youtube_subscriber_count}}</p>
                      <img src="assets/images/followers.svg"/>
                  </a>
                  {% endif %}     
                  {%  if   creators.twitch_channel_name  != '' and creators.condition_twitch  %}
                  <a class='button-twitch info' href='https://twitch.com/{{ creators.twitch_channel_name | markdownify | strip_html }}' target="_blank">
                    <i class="fab fa-twitch"></i>
                    <p class="follower-counter"> {{ creators.twitch_followers}}</p>
                    <img src="assets/images/followers.svg"/>
                  </a>
                  {% endif  %}
                </div>
                <!--div class="votes-container">
                  <p class="votes-count">345 votes</p>
                  <div>
                    <span class="thumb" vote="true">
                      <img src="assets/images/thumb.svg"/>
                    </span>
                    <span class="thumb" vote="false">
                      <img class="down" src="assets/images/thumb.svg"/>
                    </span>
                  </div>
                </div-->         
        </div>
				{% endif %}
        {% endfor %}
</div>
<div id="display-card-container" hidden>
 
</div>
<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>
<script src="/assets/js/script.js"></script>
<script src='/assets/js/filterAndSearch.js'></script>
