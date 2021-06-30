---
title: Le site qui référence les créateurs de contenus tech français.
---

<link rel="stylesheet" href="/assets/css/styles.css">
{% for creators in site.data.creators %}
<div class="current">
		Twitter : {{ creators.twitter }}
		Follower Twitter : {{ creators.followers_ twitter }}
		Twitter : {{ creators.youtube_channel}}
		Youtube channel : {{ creators.youtube_channel}}
		Follower Youtube : {{ creators.followers_youtube}}
		Follower Youtube : {{ creators.number_of_youtube_video}}
	</div>
{% endfor %}
