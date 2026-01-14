## Fetch API

L'API **fetch** est l'outil standard en JavaScript pour envoyer ou recevoir des données depuis un serveur sans avoir à recharger la page. L'API ne sert pas qu'à discuter avec des serveurs lointains. Elle peut aussi être utilisée pour charger les données d'un fichier local (par exemple un fichier JSON), ce qui permet de séparer les données de la logique du code. Ce système utilise un système de [promesse](/wiki/javascript/promise) pour nous renvoyer les données.

---

### Concepts Clés 

| Terme        | Définition                                                                                    |
| :----------- | :-------------------------------------------------------------------------------------------- |
| **Requête**  | L'action d'envoyer une demande à une URL précise (par exemple: "Donne-moi les articles").     |
| **Réponse**  | Ce que l'API nous renvoie (contenu, code de statut, etc...)                                   |
| **JSON**     | Un des formats de donnée le plus utilisé                                                      |
| **Promesse** | Un objet représentant une action, la promesse finira TOUJOURS soit pas réussir ou par échouer |

---

### Étape de fonctionnement du fetch

Le `fetch` fonctionne en deux étapes : d'abord on envoie la requête, puis on traite le contenu de la réponse (la prommesse).
Pour traiter le contenu de la réponse, nous utiliserons les fonctions **then** et **catch**, ou la nouvelle méthode avec **async** et **await**.

---

### Mise en oeuvre avec **then** et **catch**

Ici, nous verrons un exemple de comment utiliser fetch avec les fonction then et catch pour afficher une super blague sur Chuck Norris :

```javascript
// On appelle l'URL dans l'API fetch
fetch('https://api.chucknorris.io/jokes/random')
    .then(reponse => {
        // On vérifie si le serveur à répondu
        if(!reponse.ok) {
            // La promesse a un paramètre "ok" qui nous dis si la requête a réussie ou échouée (true / false)
            throw new Error("Erreur réseau ou page non trouvée");
        }

        // On convertit la réponse brute en format JSON lisible
        return reponse.json();
    })
    .then(data => {
        //Puis on utilise les données reçues (ici on affiche toute les données de la réponse 
        // mais si je voulais afficher que la blague il faut aller dans la doc de l'API pour 
        // trouvé la clé a rajouter derrière "data" par exemple data.value
        console.log(data);
    })
    .catch(erreur => {
        // Si il y a eu une erreur, le throw d'avant renvoie directement le message d'erreur au catch
        console.error("Erreur : ", erreur);
    })
```

---

### Mise en oeuvre avec **async** et **await**

Ici, nous verrons un exemple de comment utiliser fetch avec les fonction async et await pour afficher les données d'un fichier JSON :

```javascript
// On décalre une fonction asynchrone
async function getData() {
    // Ici le try catch remplace le .catch d'avant
    try {
        //On appelle le fichier avec le await pour attendre jusqu'à ce que la réponse soit terminée
        const reponse = await fetch('../data/mes_data.json');

        // Vérifie si la requête s'est bien passée
        if(!reponse.ok) {
            throw new Error("Erreur de récupération des données");
        }

        // Conversion en JSON lisible
        const data = await reponse.json();

        console.log(data);
    }
    catch (erreur) {
        console.error("Erreur : ", erreur);
    };
};

getData();