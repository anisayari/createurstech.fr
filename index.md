<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>

<section class="FormSection Stack">
    <h2 class="ReaderOnly">Filtres des créateurs affichés</h2>

    <form class="FilterForm Stack">
        <fieldset class="FilterForm__fieldset">
            <legend class="FilterForm__label">Plateforme</legend>
            <div>
                <input type="radio" name="platform" value="" id="all_platforms" checked class="ReaderOnly">
                <label for="all_platforms" class="CallToAction">Tout</label>
            </div>
            {% for plateform in site.data.plateforms %}
                <div>
                    <input type="radio" name="platform" value="{{ plateform }}" id="{{ plateform }}" class="ReaderOnly">
                    <label for="{{ plateform }}" class="CallToAction">{{ plateform }}</label>
                </div>
            {% endfor %}
        </fieldset>
    
        <fieldset class="FilterForm__fieldset">
            <legend class="FilterForm__label">Sujet</legend>
            <div>
                <input type="radio" name="category" value="" id="all_categories" checked class="ReaderOnly">
                <label for="all_categories" class="CallToAction">Tout</label>
            </div>
            {% for category in site.data.categories %}
                <div>
                    <input type="radio" name="category" value="{{ category }}" id="{{ category }}" class="ReaderOnly">
                    <label for="{{ category }}" class="CallToAction">{{ category }}</label>
                </div>
            {% endfor %}
        </fieldset>
    
        <div class="FilterForm__search Stack">
            <label for="search_input" class="FilterForm__label">Rechercher un créateur</label>
            <input type="search" class="quicksearch" oninput="updateParams()"
                   placeholder="Créateurs, créatrices, mot-clé.." name="creator_name"
                   id='search_input'/>
        </div>
    </form>
    <button type="button" class='CallToAction' onclick="shuffleCard()" >Aléatoire</button>

</section>

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
<span aria-hidden="true">@</span><span class="CreatorName">{{ creators.global_name }}</span>
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
                  <a class="CallToAction Network Network--twitter" rel="noopener" href='https://twitter.com/@{{ creators.screen_name| markdownify | strip_html}}' target="_blank">
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
