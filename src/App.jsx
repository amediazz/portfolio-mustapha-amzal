
import BackToTopButton from './components/BackToTopButton'
import aiMecanic from './assets/aiMecanic.svg'
import headerSkills from '/header-skills.png'

import p1img1 from '/p1/p1-img-1.png'
import p1img2 from '/p1/p1-img-2.png'
import p1img3 from '/p1/p1-img-3.png'
import p1img4 from '/p1/p1-img-4.png'

import p2img1 from '/p2/p2-img-1.png'
import p2img2 from '/p2/p2-img-2.png'
import p2img3 from '/p2/p2-img-3.png'
import p2img4 from '/p2/p2-img-4.png'

import p3img1 from '/p3/p3-img-1.png'
import p3img2 from '/p3/p3-img-2.png'
import p3img3 from '/p3/p3-img-3.png'
import p3img4 from '/p3/p3-img-4.png'

import p4img1 from '/p4/p4-img-1.png'
import p4img2 from '/p4/p4-img-2.png'
import p4img3 from '/p4/p4-img-3.png'
import p4img4 from '/p4/p4-img-4.png'

import p5img1 from '/p5/p5-img-1.png'
import p5img2 from '/p5/p5-img-2.png'

import p6img1 from '/p6/p6-img-1.png'
import p6img2 from '/p6/p6-img-2.png'
import p6img3 from '/p6/p6-img-3.png'
import p6img4 from '/p6/p6-img-4.png'
import p6img5 from '/p6/p6-img-5.png'

import p7img1 from '/p7/p7-img-1.png'
import p7img2 from '/p7/p7-img-2.png'
import p7img3 from '/p7/p7-img-3.png'

import p8img1 from '/p8/p8-img-1.png'
import p8img2 from '/p8/p8-img-2.png'
import p8img3 from '/p8/p8-img-3.png'

import p9img1 from '/p9/p9-img-1.png'
import p9img2 from '/p9/p9-img-2.png'
import p9img3 from '/p9/p9-img-3.png'
import p9img4 from '/p9/p9-img-4.png'
import p9img5 from '/p9/p9-img-5.png'
import p9img6 from '/p9/p9-img-6.png'



import p10img1 from '/p10/p10-img-1.png'
import p10img2 from '/p10/p10-img-2.png'
import p10img3 from '/p10/p10-img-3.png'
import p10img4 from '/p10/p10-img-4.png'

import p11img1 from '/p11/p11-img-1.png'
import p11img2 from '/p11/p11-img-2.png'
import p11img3 from '/p11/p11-img-3.png'
import p11img4 from '/p11/p11-img-4.png'
import p11img5 from '/p11/p11-img-5.png'

import p12img1 from '/p12/p12-img-1.png'
import p12img2 from '/p12/p12-img-2.png'
import p12img3 from '/p12/p12-img-3.png'
import './App.css'


function App() {
 
  
  return (
    <>
      <div className="header">
          <h1>PORTFOLIO</h1>
          <h2>Ingenieurie mecanique</h2>
          <img id="star" src={aiMecanic} alt="ai-mecanic"/>
      </div>
      <div className="header-contact">
          <p>Mustapha AMZAL</p>
          <p>amzalmustapha7@gmail.com</p>
          <p>+213 5 53 24 06 70</p>
      </div>  
      <div className="header-skills">
          <img src={headerSkills} alt="header-skills"/>
      </div>
    
      <div className="a-propos container">
        <h2>A propos de moi ?</h2>
        <p>Depuis mon début de carrière en 2014 j’ai occupé des postes au tour de l’ingénierie des systèmes mécanique. De la conception et fabrication d’équipements industrielle à la
           gestion des projets d’installations complexes avec une bonne expérience dans la reconstruction As-Built à base de scan 3D.
        </p>
      </div>
      <div className="portfolio container">
        <h2>A propos de mon portfolio</h2>
        <p> Ce portfolio contient un certain nombre de projets que j’ai réalisé ou dans lesquels j’ai participé à la réalisation.
            On y trouve des projets que j’ai pris entièrement en charge Des projets avec des taches techniques Des projets avec uniquement des taches de gestion 
            Des projets ou j’ai participé aux taches technique tout en étant le chef de projet</p>
      </div>
      <div className="list-des-projets container">
        <h2>List des projets</h2>
        <div className="projets-complexes container">
        
        <ul>
          <h3 id="left">Projets complexes</h3>
          <li>Ingénierie de base et de détails pour le déplacement d’une station de traitement d’eau de mer.</li>
          <li>Etude de réalisation d’une ligne de convoyage matière fine (GYPSE).</li>
          <li>Etude d’intégration d’une ligne de dosage Bauxite dans une usine de ciment.</li>
          <li>Expertise et ingénierie de détail pour la sécurisation d’une passerelle en charpente métallique.</li>
        </ul>
        <ul>
          <h3 id="left">Réalisation d’équipements divers</h3>
          <li>Banc de test injecteurs carburant Avions.</li>        
          <li>Banc de test équipement Hydraulique Avion.</li>        
          <li>Semi-remorque 30 tonnes.</li>        
          <li>Maison pliable sur semi-remorque.</li>        
          <li>Autoclave de traitement des déchets médicaux.</li>        
          <li>Pivot d’irrigation.</li>        
          <li>Pont roulant 5 tonnes.</li>        
          <li>Equipements de nettoyage urbain.</li>        
        </ul>
        <ul>
          <h3 id="left">Scan 3D, Traitement et reconstruction As-Built</h3>
          <li>As-Built centrales nucléaire.</li>       
          <li>Scan 3D Electrofiltre cimenterie.</li>       
          <li>Scan 3D et analyse géométrique silos en béton de stockage Ciment.</li>       
          <li>Scan 3D et As-Built Barge flottante.</li>       
          <li>Scan 3D et analyse géométrique Bac de stockage Pétrole.</li>       
        </ul>
        </div>
      </div>
      {/* *******************project list****************** */}
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Réalisation d’une ligne de convoyage de GYPSE</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
            Intégration d’une ligne d’évacuation des rejets de GYPSE issus d’un process de fabrication de plâtre. Installation d’un 
            ensemble de convoyeurs à bande tout en respectant les 
            installations existante.
            La ligne comporte un élevateur à godets, trois convoyeurs à bandes, un stacker et 
            une structure porteuse en charpente métallique.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Gestion du projet,</li>
              <li>Coordination entre les concepteurs d’équipements en interne,</li>
              <li>Coordination avec les sous-traitants en charpente métallique, génie civil, électricité et instrumentation</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Scan 3D sur site, traitement du nuage de points et reconstruction As-Built,</li>
              <li>Flowsheet de l’installation,</li>
              <li>Notes de calcul des convoyeurs à bande,</li>
              <li>Conception mécanique des convoyeurs</li>
              <li>Rédaction des cahiers des charges et des spécifications technique encadrant les travaux.</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p1img1}alt=""/>
          <img src={p1img2}alt=""/>
          <img src={p1img3}alt=""/>
          <img src={p1img4}alt=""/>
        </div>
        </div>
      </div>   
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Déplacement des stations de traitement d’eau de mer .</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
           Ingénierie de base et de détails pour établir une procédure
           de déplacements des stations de distillation et de
           déminéralisation d’eau de mer en commençant par la mise
           au points de leur état de dégradation, le démontage, la
           manutention le transport et le montage dans le nouveau site
           d’accueil.
           Remplacer le support en béton de station par un support en
           charpente métallique.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Gestion du projet,</li>
              <li>Coordination avec les sous-traitants en charpente métallique, génie civil, électricité et instrumentation.</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Scan 3D sur site, traitement du nuage de points et reconstruction As-Built,</li>
              <li>Analyse de l’encombrement au niveau du site d’accueil,</li>
              <li>Plans isométriques de tuyauterie</li>
              <li>Inspection des équipements et détermination de leurs états de dégradation et leurs récupérabilité,</li>
              <li>Rédaction des cahiers des charges et spécifications techniques encadrant la réalisation des travaux</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p2img1}alt=""/>
          <img src={p2img2}alt=""/>
          <img src={p2img3}alt=""/>
          <img src={p2img4}alt=""/>
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Intégration d’une ligne de dosage Bauxite dans une usine de ciment</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
             Le rajout d’un ingrédient à la fabrication du ciment a nécessité
             la modification de la ligne d’alimentation en matière première
             et la création d’une ligne de convoyage à bande à partir de la
             ligne principale par la mise en place d’un déviateur de matière,
             un silo de stockage, un doseur toute en modifiant et rajoutant
             des supports en charpente métallique.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Gestion du projet,</li>
              <li>Superviser l’équipe technique,</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Scan 3D sur site, traitement du nuage de points et reconstruction As-Built,</li>
              <li>Conception du convoyeur à bande et trémies de déversement,</li>
              <li>Valider les solutions techniques proposées et assurer la synergie entre les différents équipements,</li>
              <li>Rédaction des procédures de déplacement et modification des équipements existants,</li>
              <li>Rédaction des gammes de montage et d’installation des nouveaux équipements.</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p3img1}alt=""/>
          <img src={p3img2}alt=""/>
          <img src={p3img3}alt=""/>
          <img src={p3img4}alt=""/>
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Sécurisation d’une passerelle en charpente métallique</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
            Une passerelle en charpente métallique située à une hauteur
            de 60m représente des non-conformités par rapport aux plans
            d’exécution ainsi que des vibrations inquiétant l’exploitant.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Assurer la collaboration avec le client</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Scan 3D sur site, Traitement du nuage de points et reconstruction As-Built,</li>
              <li>Inspection sur site et détection des non-conformités,</li>
              <li>Rédaction d’un rapport des degrés de non-conformité et la probabilité à la rupture suivant la méthode DSCQP (Design Structural Control Quality Plan)</li>
              <li>Elaborer les plans de sécurisation de la passerelle droite,</li>
              <li>Conception d’une nouvelle passerelle circulaire.</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p4img1}alt=""/>
          <img src={p4img2}alt=""/>
          <img src={p4img3}alt=""/>
          <img src={p4img4}alt=""/>
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Banc de test injecteurs carburant Avions</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
            Selon les recommandations constructeur. Fabriquer un banc
            de test permettant de vérifier les performances et réaliser le
            control périodiques des injecteurs carburant avion.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Assurer la coordination entre les équipes interne du projet (Mécanique, Electrique,instrumentation et informatique),</li>
              <li>Assurer la coordination avec les sous-traitants,</li>
              <li>Assurer l’interface technique vis-à-vis leclient,</li>
              <li>Préparer et participer avec le client aux jalons du projets dans sa phase étude CDR (critical design review), PDR (preliminary design review),</li>
              <li>Superviser la fabrication en France</li>
              <li>Préparer et assurer la réception de l’équipement par le client FAT (factory acceptances tests) et la SAT (site acceptance tests)</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Assurer le service après vente,</li>
              <li>Etalonnage périodique de l’instrumentation Banc (Pression, Débit, Température),</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p5img1}alt=""/>
          <img src={p5img2}alt=""/>
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Maison pliable sur semi-remorque</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
            l s’agit de réaliser une maison mobile avec une superficie
            importante qui peut être exploitées comme une clinique,
            bureau de poste, poste de commandement …
            La nécessité du projet a impliqué la conception d’une semi-
            remorque sur mesure avec une suspension pneumatique
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Rédaction des rapports</li>
              <li>Assurer la coordination avec les fournisseurs,</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>La conception et le dossier de fabrication de la maison pliable,</li>
              <li>Définir plusieurs aménagements possibles,</li>
              <li>Le dessin 3D et dossier de fabrication de la semi-remorque selon les orientations d’un consultant expert,</li>
              <li>Superviser les équipes de fabrication et montage</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p6img1}alt=""/>
          <img src={p6img2}alt=""/>
          <img src={p6img3}alt=""/>
          <img src={p6img4}alt=""/>
          <img src={p6img5}alt=""/>
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Autoclave de traitement des déchets médicaux</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
          Etude de réalisation d’un autoclave permettant le broyage et la stérilisation des déchets médicaux à une pression et une température données.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Assurer la coordination avec le client</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Note de calcul (appareil sous pression) selon le CODAP</li>
              <li>Conception et mises en plans de toutes les partie de l’équipement ( Virole, broyeur à disque double arbres, lève bacs …)</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p7img1}alt=""/>
          <img src={p7img2}alt=""/>
          <img src={p7img3}alt=""/>
          
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Pivot d’irrigation</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
          Réaliser une étude pour un client qui voulait se lancer dans le domaine des équipements agricole et intégrer dans sa gamme de produit la fabrication des pivots d’irrigation.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>La coordination entre les différentes parties du projet (Mécanique, Electrique, Hydraulique et Agriculture)</li>
              <li>Préparer et présider les réunions d’avancement,</li>
              <li>Superviser l’équipe de conception mécanique,</li>
            </ul>
          
        </div>
        <div className="description-right">
          <img src={p8img1}alt=""/>
          <img src={p8img2}alt=""/>
          <img src={p8img3}alt=""/>
          
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Equipements de nettoyage et entretien urbain</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
          Fabrication d’équipements d’usage urbain en petite série ou sur mesure.
          <ul>
            <li>Bennes tasseuses</li>
            <li>Nacelles articulées tractables</li>
            <li>Nacelles articulées sur camion</li>
            <li>Balayeuses tractables</li>
            <li>Hydrocureurs</li>
            <li>Citernes</li>
            <li>Amplirolls</li>
          </ul>
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Conception mécanique d’ensemble ou sous-ensembles des équipements,</li>
              <li>Modifier la conception de base selon les demandes clients et les pièces de commerces disponible,</li>
              <li>Mise en plans et dossier de fabrication,</li>
              <li>Superviser les équipes de fabrication et montage,</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p9img1}alt=""/>
          <img src={p9img2}alt=""/>
          <img src={p9img3}alt=""/>
          <img src={p9img4}alt=""/>
          <img src={p9img5}alt=""/>
          <img src={p9img6}alt=""/>
          
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>As-Built centrales nucléaire de production d’électricité</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
          Vue l`âge et l’évolution au fil du temps, les plans des centrales nucléaire sont devenus obsolète ce qui a nécessité leurs mise à jour,
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Traitement du nuage de points issu du scan 3D</li>
              <li>Reconstruction As-Built, et Création des maquettes CAO 3D</li>
              <li>Réalisation des plans GC</li>
              <li>Réalisation des plans isométriques de tuyauterie</li>
              <li>Réalisation des plans ALC (Aide logistique au colisage)</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p10img1}alt=""/>
          <img src={p10img2}alt=""/>
          <img src={p10img3}alt=""/>
          <img src={p10img4}alt=""/>
          
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Analyse géométrique silos de stockage ciment</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
           Vérifier la verticalité des silos de stockage ciment suite à la déformation en flexion des passerelles qui relient entre eux,          
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Gestion du projet et coordination avec le client</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Scan 3D sur site,</li>
              <li>Traitement du nuage de points,</li>
              <li>Analyse géométrique des silos,</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p11img1}alt=""/>
          <img src={p11img2}alt=""/>
          <img src={p11img3}alt=""/>
          <img src={p11img5}alt=""/>
          <img src={p11img4}alt=""/>
          
        </div>
        </div>
      </div>
      <div className="section-projet">
        <header className="titre-projet">
        <h3>Scan 3D et As-Built Barge flottante</h3>
        </header>
        <div className="description container">
        <div className="description-left ">
        <h3 id="left">Description du projet:</h3>
          <p>
          L’exploitant a voulu constituer le dossier technique d’une barge flottante de pompage d’eau et pour laquelle il ne disposait pas de plans d’origine de fabrication.
          </p>
          <h3 id="left">Mon rôle dans le projet:</h3>
          <h4 id="left">Tâches Organisationnelles:</h4>
            <ul>
              <li>Gestion du projet et coordination avec le client</li>
            </ul>
          <h4 id="left">Tâches Techniques:</h4>
            <ul>
              <li>Scan 3D sur site,</li>
              <li>Reconstruction As-Built, et Création de maquette CAO 3D</li>
              <li>Réalisation des plans de la barge</li>
            </ul>
        </div>
        <div className="description-right">
          <img src={p12img1}alt=""/>
          <img src={p12img2}alt=""/>
          <img src={p12img3}alt=""/>
         
          
        </div>
        </div>
      </div>
      <div>
    
       <BackToTopButton/>
      
    
      </div>
      {/* ************************************************* */}
    </>
  )
}

export default App
