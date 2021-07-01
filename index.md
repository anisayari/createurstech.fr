---
title: Le site qui référence les créateurs de contenus tech francophone.
---

<link rel="stylesheet" href="/assets/css/styles.css">
<script src="https://kit.fontawesome.com/72c07d4b2a.js" crossorigin="anonymous"></script>

<h2> Plateforme </h2>
<div class="button-group-group-plateforme filter-button-group-plateforme">

    {% for plateforme in site.data.plateformes %}
    <a class='button button_tags' data-filter-plateforme=".{{plateforme}}">>{{plateforme}}</a>
    {%endfor%}
    <a class='button button_tags'  data-filter-plateforme="">Tout</a>
</div>

<h2> Sujet </h2>
<div class="button-group filter-button-group">
    {% for categories in site.data.categories %}

    <a class='button button_tags' data-filter=".{{categories}}">>{{categories}}</a>
    {%endfor%}
    <a class='button button_tags'  data-filter="*">Tout</a>
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
                    {{ creators.followers_youtube}} followers, {{ creators.number_of_youtube_videos}} videos
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

<script src="http://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>
<script>
  console.log('bj')
  var $grid = $('.grid').isotope({
    itemSelector: '.card',
  });
	 
var filterValuePlateforme = ' youtube twitch'
var filterValue = ''
	
  $('.filter-button-group').on( 'click', 'a', function() {
    filterValue = $(this).attr('data-filter').replace(/ /g,"_").toLowerCase();
    console.log(filterValue )
    $grid.isotope({ filter: filterValue});
  });


  $('.filter-button-group-plateforme').on( 'click', 'a', function() {
    filterValuePlateforme = $(this).attr('data-filter-plateforme').replace(/ /g,"_").toLowerCase();
     $grid.isotope({ filter: filterValuePlateforme  });
	    console.log(filterValuePlateforme)
  });

  $('.button-group-plateforme a.button').on('click', function(){
    $('.button-group-plateforme a.button').removeClass('active');
    $(this).addClass('active');
  });
</script>
