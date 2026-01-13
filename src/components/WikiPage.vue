<script setup>

</script>

<template>
    <section class="zone">
        <div class="contenu-centre">
            <h2>Bienvenue dans la documentation Javascript.</h2>
            <h3>Cliquez sur une notion de la liste pour apprendre de nouvelles choses.</h3>
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