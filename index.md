---
title: Initiative LIPOPS
layout: main.njk
date: Last Modified
heading: Mise à jour vers Windows 11 impossible ?
subheading: Ce n'est pas votre ordinateur qu'il faut jeter… mais plutot Windows !
intro: "Ne rachetez pas un ordinateur, venez plutôt à un atelier pour y
  installer Linux et continuer à vous en servir avec des logiciels libres."
list_intro: "Prochains ateliers :"
workshop_list:
  - date: 5 février 2026 à 18h
    title: "*Adieu Windows* par La Fabrique"
    url: https://la-fabrique.tibillet.coop/event/adieu-windows-260205-1800-7e74d335
    adresse: parc Grüber, 91 route des romains, Strasbourg
  - date: 14 février 2026 à 14h
    title: "*Café HOP!* par ARN à la Médiathèque Simone Veil"
    url: https://hoplagenda.fr/events/fd0157c3-b7aa-40d7-b266-e61a13bdafc1
    adresse: Allée François Mitterrand, Illkirch-Graffenstaden
  - date: 5 mars 2026 à 18h
    title: "*Adieu Windows* par La Fabrique"
    url: https://la-fabrique.tibillet.coop/event/adieu-windows-260305-1800-6140fb37
    adresse: parc Grüber, 91 route des romains, Strasbourg
  - date: 14 mars 2026 à 14h
    title: "*Café HOP!* par ARN à la Médiathèque du Neudorf"
    url: https://hoplagenda.fr/events/ad89b85e-fb04-41e7-86c2-e26f23852b41
    adresse: 1 Place du Marché-Neudorf, Strasbourg
---
<h1>{{heading}}</h1>

<p class="b_lede">{{subheading}}</p>

{{intro}}

<strong>{{list_intro}}</strong>

<ul>
{% for event in workshop_list %}
    <li>
    <a href="{{event.url}}">{{event.date}}</a> - {{event.title}} 
    <ul><li>{{event.adresse}}</li></ul>
    </li>
{% endfor %}
</ul>
