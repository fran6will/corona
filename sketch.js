let verbe = [
    
    'Faire',
             'Trier',
             'Chanter',
             'Manger',
             'Détruire',
             'Cuisiner',
             'Jouer avec',
             'Dessiner',
             'Peindre',
             'Toucher',
             'Boire',
             'Réparer',
             'Cuire',
             'Sécher',
             'Ranger',
             'Nettoyer',
             'Désinfecter',
             'Déplacer',
             'Prendre',
             'Fabriquer',
            'S&apos;inventer',
             'Partager',
             'Apprendre',
             'Visionner',
             'Binge watcher',
 
           
             
            ]
let action = ['un bricolage',
              'de l&apos;espoir',
              'des messages positifs',
              'des choses utiles',
              'un cours en ligne',
              'une télé-réalité',
              'des vieux chandails',
              'un bain',
              'un livre',
              'une bande-dessinée',
              'un verre de vino',
              'un masque d&apos;argile',
              'les fenêtres',
              'une chanson',
              'ses vêtements',
              'une douche',
              'un vieux meuble',
              'une nouvelle playlist',
              'un projet DIY',
              'son horaire du mois passé',
              'des souvenirs de janvier 2020',
              'son sexe',
              'du pâté chinois',
              'une sauce à spagat',
              'du Purell',
              'ses mains',
              'du vin',
              'un corps nu',
              'des fleurs',
              'ses plantes',
              'ses impôts',
              'des tartelettes portugaises',
              'le 	&quot;touchant Horacio Arruda&quot;',
              'la face de Justin Trudeau',
              'un ami imaginaire',
              'quelqu&apos;un à un mètre de distance',
              'une recette de désinfectant DIY',
              'des vidéos Youtube',
              'une série Netflix',
              'des boîtes',
              'du ménage',
              'une moppe',
              'des muffins',
              'du papier de toilette',
              'un statut facebook',
              'un appel vidéo',
              'la semaine des 4 Julie',
              'District 31',
              
           
              
             
             
             ]
let contrainte = ['debout', 'assis',
                  'en restant À LA MAISON',
                 'en bobette',
                 'caché',
                 'en petite boule',
                  'au sol',
                  'sur une jambe',
                  'en se pinçant le nez',
                  'les yeux fermés',
                  'en télétravaillant',
                  'en live sur Facebook',
                  'en live sur Instagram',
                  'en dançant',
                  'en sous-vêtements',
                  'en ayant les cheveux gras',
                  'complètement paqueté',
                  'saoul à 13:00',
                  'en parlant fort',
                  's&apos;imaginant être',
                  'en riant très fort',
                  'en se forçant un sourire',
                  'un doigt dans l&apos;péteux',
                  'en retenant ses larmes',
                  'en gougounes',
                  'en portant les vêtements de quelqu&apos;un d&apos;autre',
                  'en restant positif',
                  'en tapant du pied',
                  'en se masturbant',
                  'en frenchant',
                  'en toussant sans son coude',
                  'en gardant un mètre de distance',
                 
                  'en se lavant les mains',
                  'en s&apos;hydratant la peau',
                  'en culbutant',
                  'en position du Cobra',
                  'en parlant à l&apos;envers',
                  'en jouant à ni oui ni non',
                  'en pyjama vieux de trois jours',
                  'en portant les mêmes sous-vêtements depuis six jours',
                  'en appelant le 811',
                  'en quarantaine',
                  'en faisant une blague sur le papier de toilette',
                  'en pensant aux bains de foules',
                  'en fixant le vide',
                  'en regardant des lives sur instagram',
                  'en contemplant le vide',
                  'en se tournant les pouces',
                  'en fourrant',
                  'en voulant frencher',
                  'en criss',
                  'en étant à boutte',
                  'en anglais',
                  'en se disant que tout ira bien',
                  'en respectant les mesures d&apos;hygiène',
                  
                  
                
                 
                 
                 ]
let endroit = ['dans le salon', 
               'sur le blacon',
              'dans la cuisine',
              'dans la salle de bain',
               'dans le bain',
               'sur la toilette',
               'dans son lit',
               'au Costco',
               'à l&apos;épicerie',
                'à coté de la tank à eau chaude',
               'su&apos;le sofa',
               'devant la photo de son ex',
               'devant le miroir',
               'devant le vide existentiel',
               'face à l&apos;absurdité de la vie',
               'sans angoisser',
               'sans penser au cash',
               'dans le noir',
               'devant sa fenêtre',
               'au parc',
               'dehors',
               'au parc',
               'au dépanneur',
               'dans son char',
               'dans un garde-robe',
               'dans une armoire de cuisine',
               'dans un endroit sombre de la maison',
               'dans cinq minutes',
               'dans l&angoisse totale',
               'sous les couvertures',
               'avec une lingette désinfectante',
               'd&apos;une façon hygiénique',
               'certainement pas proche de quelqu&apos;',
               
               
              
               
              
               
              
              
              
              
              ]

function setup() {
    noCanvas();
  phrase(); 
  var button = select('#generate');
  button.mousePressed(resetsketch);
}



function phrase(){
  let rS = 
      random(verbe) +
      ' ' +
      random(action) +
      ' ' +
      random(contrainte) +
      ' ' +
      random(endroit) +
      '.';
  
    var par = createP(rS);
    par.parent('madlib');
    par.class('text')
    
  
    
    
 }

function resetsketch(){
    
    phrase();
    
    
}



