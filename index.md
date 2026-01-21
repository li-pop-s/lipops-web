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


