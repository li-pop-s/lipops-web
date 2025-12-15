---
title: Initiative LIPOPS
layout: main.njk
date: 2025-12-01
heading: Mise à jour vers Windows 11 impossible ?
subheading: Ce n'est pas votre ordinateur qu'il faut jeter… mais plutot Windows !
intro: "Ne rachetez pas un ordinateur, venez plutôt à un atelier pour y
  installer Linux et continuer à vous en servir avec des logiciels : surs, à
  jour et respectueux de votre vie privée."
list_intro: "Prochains ateliers autour de Strasbourg :"
workshop_list:
  - date: 13 décembre 2025 à 14h
    title: "*Café HOP!* par ARN à la Médiathèque du Neudorf"
    url: https://hoplagenda.fr/events/1c0cad2d-e0a2-4940-adc6-736a1c94a027
    adresse: 1 Place du Marché-Neudorf, Strasbourg
  - date: 8 janvier 2026 à 18h
    title: "*Adieu Windows* par La Fabrique"
    url: https://la-fabrique.tibillet.coop/event/adieu-windows-260108-1800-84152606
    adresse: parc Grüber (en bas, coté voie ferrée), 91 route des romains, Strasbourg
  - date: 17 janvier 2026 à 14h
    title: "*Café HOP!* par ARN à La Plage Digitale"
    url: https://hoplagenda.fr/events/358c7cf1-0f07-40fc-ae0a-8f4cf0a59921
    adresse: 13 Rue Jacques Peirotes, Strasbourg
  - date: 5 février 2026 à 18h
    title: "*Adieu Windows* par La Fabrique"
    url: https://la-fabrique.tibillet.coop/event/adieu-windows-260205-1800-7e74d335
    adresse: parc Grüber (en bas, coté voie ferrée), 91 route des romains, Strasbourg
  - date: 14 février 2026 à 14h
    title: "*Café HOP!* par ARN à la Médiathèque Simone Veil"
    url: https://hoplagenda.fr/events/fd0157c3-b7aa-40d7-b266-e61a13bdafc1
    adresse: Allée François Mitterrand, Illkirch-Graffenstaden
extro: |-
  Repartez avec un ordinateur plus rapide, plus sécurisé et libéré !
  Stop au gaspillage, stop à l’obsolescence programmée.
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

<blockquote>
{{extro}}
</blockquote>
