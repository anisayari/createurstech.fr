---
title: Le site qui référence les créateurs de contenus tech francophone.
---

<link rel="stylesheet" href="/assets/css/styles.css">
<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>

<div class='filters'>
	<h2> Plateforme </h2>
<div class="button-group filter-button-group" data-filter-group='plateforme'>

    {% for plateforme in site.data.plateformes %}
    <button class='button button_tags' data-filter=".{{plateforme}}">>{{plateforme}}</button >
    {%endfor%}
    <button  class='button button_tags button_plateforme'  data-filter="">Tout</button >
</div>

<h2> Sujet </h2>
<div class="button-group filter-button-group"  data-filter-group='categories'>
    {% for categories in site.data.categories %}

    <button  class='button button_tags' data-filter=".{{categories}}">>{{categories}}</button >
    {%endfor%}
    <button  class='button button_tags button_categories'  data-filter="*">Tout</button >
</div>
	</div>

<div class="grid ">
        {% for creators in site.data.creators %}
            <div class="card {{creators.categories}}  {{creators.plateformes}}">
                <div class='title'>
                    <div class="image-cropper">
                        <img src='{{creators.profil_picture}}' width="50" height="50" class="rounded" />
                    </div>
                    <h2>  {{ creators.global_name}} </h2>
                    <a href='https://twitter.com/@{{ creators.twitter_account }}' target="_blank"><i class="fab fa-twitter"></i></a>
                    {{ creators.followers_twitter }}
                    <a class='button-youtube' href='https://youtube.com/c/{{ creators.youtube_channel}}' target="_blank"><i class="fab fa-youtube"></i></a>
                    {{ creators.followers_youtube }} followers, {{ creators.number_of_youtube_videos}} videos
                    {% if  creator.twitch_channel%}
                    <a class='button-twitch' href='https://twitch.com/{{ creators.twitch_channel}}' target="_blank"><i class="fab fa-twitch"></i></a> {{ creators.followers_twitch}} followers
                    {%endif%}
                </div>

                <p>
                    {{ creators.description}}
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
	console.log($button.attr('data-filter'))
	
  filters[ filterGroup ] = $button.attr('data-filter').replaceAll(" ","_").toLowerCase().replace(/[!"#$%&'()+,\/:;<=>?@[\\\]^`{|}~]/g, "\\\$&");
	console.log(filters)
  var filterValue = concatValues( filters) ;
	filterValue = filterValue;
	
	console.log( typeof filterValue);
	console.log( filterValue);
	
  $grid.isotope({ filter: filterValue});
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
  return value.replaceAll('  ',"_").toLowerCase();
}
	
</script>
