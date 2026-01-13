<script setup>

</script>

<template>
    <section class="zone">
        <div class="contenu-centre">
            <h2>Bienvenue sur WiDev.</h2>
            <h3>Explorez les catégories.</h3>
            <div class="categorie-list">
                <RouterLink to="/categorie/Programmation" class="categorie">Langage de programmation</RouterLink>
                <RouterLink to="/categorie/Frameworks" class="categorie">Frameworks</RouterLink>
                <RouterLink to="/categorie/Outils" class="categorie">Outils</RouterLink>
                <RouterLink to="/categorie/Divers" class="categorie">Divers</RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .zone {
        display: flex;
        overflow-y: auto;
        padding: 32px;
    }

    .contenu-centre {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        width: 100%;
    }

    h2 {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }

    h3 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
    }

    .categorie-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 24px;
    }

    .categorie {
        width: 256px;
        min-height: 196px;
        background: var(--background);
        border: 2px var(--bordercolor) solid;
        border-radius: 8px;
        box-shadow: 0px 20px 25px var(--shadowcolor);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .4s ease-in-out;
    }

    .categorie:hover {
        transform: translateY(-16px) scale(1.05);
    }
</style>