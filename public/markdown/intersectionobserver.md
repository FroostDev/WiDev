## Intersection Observer API

L'API **IntersectionObserver** permet de surveiller un élément cible quand il sera visible dans le viewport de l'utilisateur (il est possible de changer ce paramètre pour qu'il soit détecter à d'autres endroits). On peux utiliser ça au lieu de vérifier a chaque évènement de scroll, ce qui économise des performances.

---

### Concepts Clés

| Terme | Définition |
| :--- | :--- |
| **Root** | L'élément utilisé comme zone de référence (par défaut : le `viewport`). |
| **Target** | L'élément HTML que l'on souhaite surveiller. |
| **Threshold** | Un nombre (ou tableau) entre `0.0` et `1.0` indiquant le pourcentage de visibilité nécessaire pour déclencher l'alerte. |

---

### Schéma d'explication du treshold

![Image d'explication du paramètre Treshold](../wiki_img/treshold.avif)

---

### Mise en œuvre (JavaScript)

Voici la structure type pour initialiser un observateur :

```javascript
// Configuration
const options = {
  root: null,         // null = le viewport | Il est possible de ne pas donner se paramètre, le viewport sera selectionné par défaut
  rootMargin: '0px',  // marge autour du root si on veut créer un décalage
  threshold: 0.1      // déclenchement à 10% de visibilité de l'élement
};

// Traitement
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("L'élément est visible !");
      // Action à effectuer (ex: charger une image, lancer une animation)
      
      // Optionnel : arrêter d'observer après la première fois
      // observer.unobserve(entry.target);
    }
    else {
        console.log("L'élément n'est plus visible...");
        // Ce "else est optionnel" il permet quand l'élément disparait de l'écran
        //de le faire revenir à son état original, comme ça l'animation peut se refaire
    }
  });
};

// 3. Initialisation et exécution
const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('.mon-element');
observer.observe(target);