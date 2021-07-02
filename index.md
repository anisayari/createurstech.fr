---
title: Le site qui référence les créateurs de contenus tech francophone.
---

<link rel="stylesheet" href="/assets/css/styles.css">
<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>

<div class='filters'>
	<h2> Plateforme </h2>
  <div class="button-group filter-button-group" data-filter-group='plateforme'>

      {% for plateforme in site.data.plateformes %}
      <button class='button button_tags' data-filter=".{{plateforme}}">{{plateforme}}</button>
      {%endfor%}
      <button class='button button_tags button_plateforme'  data-filter="">Tout</button>
  </div>

  <h2> Sujet </h2>
  <div class="button-group filter-button-group"  data-filter-group='categories'>
      {% for categories in site.data.categories %}

      <button class='button button_tags' data-filter=".{{categories}}">{{categories}}</button>
      {%endfor%}
      <button class='button button_tags button_categories'  data-filter="*">Tout</button>
  </div>
</div>

<div class="grid ">
        {% for creators in site.data.creators %}
            <div class="card {{creators.categories}}  {{creators.plateformes}}">
                <div class='title'>
                    <div class="image-cropper">
											{% if creators.youtube_profil_image_url != '' %}
                        <img src='{{creators.youtube_profil_image_url}}' width="50" height="50" class="rounded" />
											{% else %}
											                        <img src='{{creators.twitch_profil_image_url}}' width="50" height="50" class="rounded" />
											{% endif %}
                    </div>
                    <h4>  {{ creators.global_name }} </h4>

									  {% if  creators.twitter_account_name   != '' %}
                    <a href='https://twitter.com/@{{ creators.twitter_account_name| markdownify | strip_html}}' target="_blank"><i class="fab fa-twitter"></i></a>
                    <p>{{ creators.followers_twitter }}</p>
										{% endif %}

									  {% if creators.youtube_channel_name  != '' %}
                      {% if creators.youtube_custom_url != null %}
                        <a class='button-youtube' href='https://youtube.com/c/{{ creators.youtube_custom_url | markdownify | strip_html }}' target="_blank"><i class="fab fa-youtube"></i></a>
                        {% elsif creators.youtube_channel_id != null %}
                        <a class='button-youtube' href='https://youtube.com/channel/{{ creators.youtube_channel_id | markdownify | strip_html }}' target="_blank"><i class="fab fa-youtube"></i></a>
                        {% else %}
                        <a class='button-youtube' href='https://youtube.com/c/{{ creators.youtube_channel_name | markdownify | strip_html }}' target="_blank"><i class="fab fa-youtube"></i></a>
                      {% endif %}

                    <p>{{ creators.youtube_subscriber_count}} followers, {{ creators.youtube_video_count}} videos</p>
									  {% endif %}
									
                    {%  if   creators.twitch_channel_name  != '' %}
                    <a class='button-twitch' href='https://twitch.com/{{ creators.twitch_channel_name | markdownify | strip_html }}' target="_blank"><i class="fab fa-twitch"></i></a>
                    <p> {{ creators.twitch_followers}} followers</p>

                    {% endif  %}
                </div>

                <p>
									{% if creators.youtube_description != '' %}
                    {{ creators.youtube_description}}
									{% else %}
									  {{ creators.twitch_description}}
									{% endif %}
                </p>

        </div>
        {% endfor %}
</div>

<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>
<script>
  console.log('bj')
	
var $grid = $('.grid').isotope({
  itemSelector: '.card'
});

var filters = {};

$('.filters').on( 'click', '.button', function( event ) {
   var $button = $( event.currentTarget );
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
	console.log(filterGroup )
  filters[ filterGroup ] = $button.attr('data-filter').replace(/ /g,"_").toLowerCase();
  var filterValue = concatValues( filters );
  $grid.isotope({ filter: filterValue });
});
	
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
		console.log('test')
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
	
</script>
