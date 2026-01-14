## Les Promesses en JavaScript

Les promesses sont un concept un peu compliqué à comprendre au début.
Une **Promesse** est un objet qui représente le résultat d'une opération asynchrone. C'est un engagement de la part de JavaScript à renvoyer une valeur (ou une erreur) plus tard, sans bloquer l'exécution du reste du code.

---

### Exemple : L'Analogie du Restaurant

Pour bien comprendre, imaginons qu'on commande un burger :
1.  **La commande** : On paie et on nous donne un **Bipeur**. Ce bipeur est une **Promesse**.
2.  **L'attente** : On va s'asseoir. Le burger n'est pas prêt, mais on a la "promesse" qu'il arrivera. On peut continuer à discuter ou regarder nos téléphones (le code n'est pas bloqué).
3.  **Le résultat** : 
    * **Succès** : Le bipeur vibre, on récupère le burger. (La promesse est **tenue** / *fulfilled*).
    * **Échec** : Le serveur nous dit qu'il n'y a plus de viande. (La promesse est **rompue** / *rejected*).

---

### Les 3 États d'une Promesse

Une promesse est toujours dans l'un de ces trois états :

| État | Description |
| :--- | :--- |
| **Pending** | État initial, l'opération est en cours (on attend). |
| **Fulfilled** | L'opération a réussi. |
| **Rejected** | L'opération a échoué. |

---

### Utilisation

C'est ce que tu fais quand tu utilises `fetch`. On utilise les méthodes `.then()` pour le succès et `.catch()` pour l'erreur, ou `async` et `await`.

```javascript
// Imaginons que cette fonction retourne une promesse
// Nous traiterons les données ainsi :
maFonctionAsynchrone()
  .then(donnees => {
    // S'exécute si la promesse est "Fulfilled"
    console.log("On a reçu :", donnees);
  })
  .catch(erreur => {
    // S'exécute si la promesse est "Rejected"
    console.error("Erreur :", erreur);
  })
  .finally(() => {
    // S'exécute TOUJOURS
    console.log("Terminé !");
  });