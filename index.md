---
---

<link rel="stylesheet" href="/assets/css/styles.css">
<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>


<img src="banner.png">
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
      {% for categories in site.data.categories %}
      <button class='button button_tags' data-filter=".{{categories}}">{{categories}}</button>
      {%endfor%}
      <button class='button button_tags button_categories'  data-filter="*">Tout</button>
  </div>
</div>

<h2> Recherche </h2>
<p><input type="text" class="quicksearch" placeholder="Search" /></p>


<div class="grid ">
        {% for creators in site.data.creators %}
				{% if creators.condition_card' %}
            <div class="card {{creators.categories}}  {{creators.plateforms}}">
                <div class='title'>
                    <div class="image-cropper">
											{% if creators.youtube_profil_image_url != '' %}
                        <img src='{{creators.youtube_profil_image_url}}' width="50" height="50" class="rounded" />
											{% else %}
											                        <img src='{{creators.twitch_profil_image_url}}' width="50" height="50" class="rounded" />
											{% endif %}
                    </div>
                    <p class='global_name {{ creators.global_name }} '>  {{ creators.global_name }} </p>

									  {% if  creators.twitter_account_name   != '' %}
                    <a href='https://twitter.com/@{{ creators.screen_name| markdownify | strip_html}}' target="_blank"><i class="fab fa-twitter"></i></a>
                    <p>{{ creators.followers_twitter }}</p>
										{% endif %}

									{% if creators.youtube_channel_name  != ''  and	creators.condition_youtube	%}
                    <a class='button-youtube' href='https://youtube.com/channel/{{ creators.youtube_channel_id | markdownify | strip_html }}' target="_blank"><i class="fab fa-youtube"></i></a>
                    <p>{{ creators.youtube_subscriber_count}} followers, {{ creators.youtube_video_count}} videos</p>
									{% endif %}
									
                    {%  if   creators.twitch_channel_name  != '' and creators.condition_twitch  %}
																			                    <a class='button-twitch' href='https://twitch.com/{{ creators.twitch_channel_name | markdownify | strip_html }}' target="_blank"><i class="fab fa-twitch"></i></a>
                    <p> {{ creators.twitch_followers}} followers</p>

                    {% endif  %}
                </div>
                <p>
									{% if creators.youtube_description != '' %}
                    {{ creators.youtube_description | newline_to_br}}
									{% else %}
									  {{ creators.twitch_description |  newline_to_br}}
									{% endif %}
                </p>
        </div>
				{% endif %}
        {% endfor %}
</div>

<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>
<script src='/assets/js/filterAndSearch.js'></script>