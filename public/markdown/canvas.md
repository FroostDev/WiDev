# Canvas API

L'élément HTML `<canvas>` est utilisé pour dessiner via JavaScript. Il peut être utilisé pour réaliser des animations, des graphiques de données, des manipulations de photos ou même du rendu de jeux vidéo.

## 1. Configuration de base

Pour utiliser un canvas, il faut d'abord l'ajouter dans le HTML, puis le récupérer en JavaScript pour obtenir son **contexte de rendu**.

### HTML
```html
<canvas id="monCanvas" width="800" height="600"></canvas>
```

### JavaScript
```javascript
const canvas = document.querySelector('#monCanvas');
const ctx = canvas.getContext('2d'); // On définit le contexte en 2D ici
```

*Note : Il est préférable de définir la taille du canvas via les attributs `width` et `height` plutôt qu'en CSS pour éviter les déformations d'image.*

---

### Rendu des formes

Nous verrons par la suite que certaines fonctions nécessite d'utiliser les fonctions de rendu car elle permette de tracé un chemin invisible et non pas une forme pleine directement :

| Fonction | Description |
| :--- | :--- |
| `fill()` | Remplit l'intérieur du chemin (utilise fillStyle). |
| `stroke()` | Dessine le contour du chemin actuel (utilise strokeStyle). |
| `clip()` | Transforme le chemin actuel en masque de découpe pour les futurs dessins. |

---

### Style des formes

Que la forme soit une forme pleine ou pas, il existe des fonctions pour la styliser :
| Fonction | Description |
| :--- | :--- |
| `fillStyle` | Style de remplissage |
| `strokeStyle` | Style de contour |

---

### Dessiner des formes simple

Le Canvas propose des méthodes directes pour dessiner des rectangles :

| Fonction | Description |
| :--- | :--- |
| `fillRect(x, y, width, height)` | Dessine un rectangle plein |
| `strokeRect(x, y, width, height)` | Dessine le contour d'un rectangle |
| `clearRect(x, y, width, height)` | Efface une zone rectangulaire (rend la zone transparente) |

```javascript
ctx.fillStyle = "blue";
// Créer un rectangle plein de couleur bleu a x=50px et y=50px
// Et de largeur=150px et hauteur=100px
ctx.fillRect(50, 50, 150, 100);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
// Créer un rectangle avec des contours rouge d'epaisseur 5px
// Il commence à x=250px et y=50px et fait 150px de large pour 100px de haut
ctx.strokeRect(250, 50, 150, 100);
```

---

### Les chemins (Paths)

Pour créer des formes complexes (lignes, cercles, triangles), on utilise des chemins :

| Fonction | Description |
| :--- | :--- |
| `beginPath()` | Vide la liste des chemins actuels et commence un nouveau tracé. |
| `closePath()` | Ajoute une ligne droite entre le point actuel et le point de départ. |
| `moveTo(x, y)` | Déplace le "stylo" à (x,y) sans rien tracer. |
| `lineTo(x, y)` | Ajoute un segment de droite du point actuel vers (x,y). |
| `arc(x, y, r, angleDepart, angleFin)` | Trace un arc de cercle (angles en radians, de 0 à 2π). |
| `rect(x, y, w, h)` | Ajoute un rectangle au chemin actuel. |
| `quadraticCurveTo(cp1x, cp1y, x, y)` | Trace une courbe de Bézier avec 1 point de contrôle. |
| `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)` | Trace une courbe de Bézier avec 2 points de contrôle. |

#### Dessiner une ligne

```javascript
ctx.beginPath(); // Début du chemin (on pose le stylo)
ctx.moveTo(50, 200); // Point de départ (on leve le stylo et on le pose autre part)
ctx.lineTo(200, 250); // On déplace le stylo de 200px sur x eet de 250px sur y
ctx.strokeStyle = "green";
ctx.stroke(); //Desine réelement le contour
```

### Dessiner un cercle

```javascript
ctx.beginPath(); //On pose le stylo
ctx.arc(400, 300, 50, 0, Math.PI*2);
ctx.fillStyle = "orange";
ctx.fill(); // Remplit la forme
ctx.stroke();
```

Voilà un expliquant comment utiliser les cercles avec les angles en radiant :

![Schéma de trigonométrie](/wiki_img/canvas-arc.jpg)

### Dessiner un demi cercle

```javascript
ctx.beginPath();
// De 0 (3h) à Math.PI (9h)
ctx.arc(100, 100, 50, 0, Math.PI);  // Ici, c'est seulement Math.PI et pas Math.PI*2
ctx.stroke();
```

---

### Afficher du texte

Le canvas permet aussi d'écrire du texte avec différentes polices :

| Fonction | Description |
| :--- | :--- |
| `font` | Permet de choisir la taille du texte et la police d'écriture |
| `fillText("Texte", x, y)` | Créer un texte plein |
| `strokeText("Texte", x, y)` | Créer un texte en contour |

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello MMI !", 50, 400); // Texte plein
ctx.strokeText("Hello MMI !", 50, 450); // Contour du texte
```

---

### Utiliser des images

Il est possible d'imprimer des images externes dans le canvas :

| Fonction | Description |
| :--- | :--- |
| `drawImage(image, x, y, largeur, hauteur)` | Permet "d'imprimer" l'image sur le canvas |

```javascript
const img = new Image();
img.src = 'chemin/vers/image.png';

// Quand l'image est chargé, on imprime
img.onload = () => {
    ctx.drawImage(img, 10, 10, 100, 100);
};
```

---

### Animation de base

Pour créer une animation, on utilise généralement une fonction qui s'appelle en boucle avec `requestAnimationFrame` :

```javascript
// On déclare les variables qui vont influencer l'animation
// Ici par exemple, ou va faire un carré qui se déplace sur l'axe x
let x = 0;

function animate() {
    // On efface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // On dessine la forme à la nouvelle position
    ctx.fillRect(x, 100, 50, 50);

    // On modifie la variable pour le prochain tour
    x += 2;

    // On rappelle la fonction
    requestAnimationFrame(animate);
}

// On appelle la fonction
animate();
```

---

### Au final, le canvas sert à quoi ?

Le canvas peux être très utile pour styliser votre site de manière optimiser.

Imaginons, que vous vouliez faire un système de particules, créer une `<div>` pour chaque particule avec chacune une animation décalée (par exemple), c'est possible, mais les performances vont prendre un coup ! Alors qu'avec un canvas, on peut imaginer un array d'objets, chaque objet a les attributs : x, y, vitessex, vitessy et que dans notre fonction d'animation on parcourt chaque objet on dessine la particule et on met à jour ses coordonnées.