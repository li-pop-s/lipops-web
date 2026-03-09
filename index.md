---
title: Initiative LIPOPS
layout: main.njk
date: Last Modified
heading: Mise à jour vers Windows 11 impossible ?
subheading: Ce n'est pas votre ordinateur qu'il faut jeter… mais plutôt Windows !
intro: "Ne rachetez pas un ordinateur, venez à un atelier pour y
  installer Linux et continuer à vous servir de votre matériel avec des logiciels libres."
list_intro: "Prochains ateliers :"
workshop_list:
  - date: jeudi 2 avril 2026 à 19h
    title: "*Adieu Windows* par La Fabrique"
    url: https://la-fabrique.tibillet.coop/event/adieu-windows-260402-1900-35ad9f8d/
    adresse: parc Grüber, 91 route des romains, Strasbourg

  - date: samedi 11 avril 2026 à 14h
    title: "*Café HOP!* par ARN à la La Plage Digitale"
    url: https://hoplagenda.fr/events/93290ebd-0595-43c7-a5d8-71df7be254ec
    adresse: 13 Rue Jacques Peirotes, Strasbourg

  - date: jeudi 7 mai 2026 à 19h
    title: "*Adieu Windows* par La Fabrique"
    url: https://la-fabrique.tibillet.coop/event/adieu-windows-260507-1900-3c8f87db/
    adresse: parc Grüber, 91 route des romains, Strasbourg

  - date: samedi 9 mai 2026 à 14h
    title: "*Café HOP!* par ARN à la Médiathèque Simone Veil"
    url: https://hoplagenda.fr/events/7480ec5b-71f0-40e1-b612-3c21d8ee258d
    adresse: Allée François Mitterrand, Illkirch-Graffenstaden
---

# {{heading}}

{{subheading}} {.b_lede}

{{intro}}

<strong>{{list_intro}}</strong>

{% for event in workshop_list %}
- [{{event.date}}]({{event.url}}) - {{event.title}}
  - {{event.adresse}}
{% endfor %}

Ateliers sur inscription, voir le site web de l'association concernée.

Et [chaque vendredi 19h](https://hackstub.eu/home/fr/schedule) à <em>La Stammtisch</em> de la Hackstub
- bâtiment «La Moquetterie», 8 rue Thomas Mann, Strasbourg
- inscription : email  <code>bureau [at] hackstub [point] eu</code>


