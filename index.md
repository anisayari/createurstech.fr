<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>

  <div class='filters'>
    <h2> Plateforme </h2>
    <div class="button-group filter-button-group" data-filter-group='plateform'>
        {% for plateform in site.data.plateforms %}
        <button class='button button_tags' data-filter=".{{plateform}}">{{plateform}}</button>
        {%endfor%}
        <button class='button button_tags button_plateform is-checked'  data-filter="">Tout</button>
    </div>

    <h2> Sujet </h2>
    <div class="button-group filter-button-group" data-filter-group='categories' >
        {% for categorie in site.data.categories %}
        <button class='button button_tags' data-filter=".{{categorie}}">{{categorie}}</button>
        {%endfor%}
        <button class='button button_tags button_categorie is-checked'  data-filter="*">Tout</button>
    </div>

  </div>

  <div>
    <label for="search">Recherche</label>
  </div>

  <div class="search">
    <img class="search-icon" src="assets/images/followers.svg" aria-hidden="true"/>
    <input type="search" class="quicksearch" placeholder="Créateurs, créatrices, mot-clé.." name="search" id='search' />
    <button class='button button_tags' onclick="shuffleCard()" >Aléatoire</button>
  </div>



<section class="Grid">
<h2 class="ReaderOnly">Les créateurs répondants correspondants aux critères sélectionnés</h2>
  <div class="Grid__sizer"></div>
        {% for creators in site.data.creators %}
				{% if creators.condition_card %}
            <article class="Card {{creators.categories}} {{creators.plateforms}}">
                <h3 class='Card__title'>
                    {% if creators.youtube_profil_image_url != '' %}
                    <img src='{{creators.youtube_profil_image_url}}'  class="Card__profileImage" alt=""/>
                    {% else %}
                    <img src='{{creators.twitch_profil_image_url}}'  class="Card__profileImage" alt=""/>
                    {% endif %}
                    <span class="Card__name {{ creators.global_name }} ">
<span aria-hidden="true">@</span>{{ creators.global_name }}
</span>
                </h3>
                <!--div class="categories">
                  <p class="category">
                    #Python
                  </p>
                  <p class="category">
                    #IA
                  </p>
                </div-->
                <p class="Card__description">
                    {% if creators.youtube_description != '' %}
                        {{ creators.youtube_description | newline_to_br}}
                    {% else %}
                        {{ creators.twitch_description |  newline_to_br}}
                    {% endif %}
                </p>
                <footer class="SocialNetworks">
                  {% if  creators.twitter_account_name   != '' and creators.twitter_followers != '' %}
                  <a class="CallToAction Network Network--twitter" rel="noopener" href='https://twitter.com/@{{ creators.twitter_screen_name| markdownify | strip_html}}' target="_blank">
                    <i class="fab fa-twitter"></i>
                    <span class="ReaderOnly">twitter</span>
                    <span class="follower-counter" aria-hidden="true">{{ creators.twitter_followers }}</span>
                  </a>
                  {% endif %}
                  {% if creators.youtube_channel_name  != ''  and	creators.condition_youtube	%}
                  <a class='CallToAction Network Network--youtube' rel="noopener" href='https://youtube.com/channel/{{ creators.youtube_channel_id | markdownify | strip_html }}' target="_blank">
                    <img src="assets/images/youtube.svg" aria-hidden="true"/>
                    <span class="ReaderOnly">youtube</span>
                    <span class="follower-counter" aria-hidden="true">{{ creators.youtube_subscriber_count}}</span>
                  </a>
                  {% endif %}     
                  {%  if   creators.twitch_channel_name  != '' and creators.condition_twitch  %}
                  <a class='CallToAction Network Network--twitch' rel="noopener" href='https://twitch.com/{{ creators.twitch_channel_name | markdownify | strip_html }}' target="_blank">
                    <i class="fab fa-twitch"></i>
                    <span class="ReaderOnly">twitch</span>
                    <span class="follower-counter" aria-hidden="true">{{ creators.twitch_followers}}</span>
                  </a>
                  {% endif  %}
                </footer>
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
        </article>
				{% endif %}
        {% endfor %}
</section>
<div id="display-card-container" hidden></div>
<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>
<script src="/assets/js/script.js"></script>
<script src='/assets/js/filterAndSearch.js'></script>