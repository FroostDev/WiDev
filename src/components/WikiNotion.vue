<script setup>
    import { ref, watch, onMounted, nextTick } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import markdownit from 'markdown-it';
    import Prism from 'prismjs';

    import 'prismjs/themes/prism-tomorrow.css'; 


    import 'prismjs/components/prism-markup-templating';

    // Importer les langage dont j'ai besoin
    import 'prismjs/components/prism-javascript';
    import 'prismjs/components/prism-css';
    import 'prismjs/components/prism-php';

    const route = useRoute();
    const router = useRouter();
    const md = new markdownit();
    const content = ref('');

    const loadMarkdown = async () => {
        const fileName = route.params.notion;

        try {
            console.log(`/markdown/${route.params.notion}.md`)
            const response = await fetch(`/markdown/${route.params.notion}.md`);

            if(response.ok) {
                let rawText = await response.text();
                content.value = md.render(rawText);

                await nextTick();
                Prism.highlightAll();
            } else {
                content.value = "Erreur 404 : Fiche introuvable.";
            }
        } catch (e) {
            content.value = "Erreur lors du chargement du contenu.";
            console.error(e);
        }
    }

    onMounted(loadMarkdown);

    watch(() => route.params.notion, loadMarkdown);


    // Dans ton composant qui affiche le Markdown
    const handleClicks = (e) => {
        const { target } = e;
        // On vérifie si c'est un lien et s'il est interne
        if (target && target.tagName === 'A' && target.getAttribute('href').startsWith('/')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            router.push(href); // On navigue avec Vue Router
        }
    };
</script>

<template>
    <div class="wiki-container">
        <article v-html="content" class="markdown-body" @click="handleClicks"></article>
    </div>
</template>

<style scoped>
    .wiki-container {
        padding: 32px;
        overflow-y: auto;
    }
 
.markdown-body :deep(h3) {
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.markdown-body :deep(h2) {
    margin-bottom: 2rem;
    padding-bottom: 4px;
    border-bottom: 5px var(--bordercolor) solid;
}

.markdown-body :deep(p),
.markdown-body :deep(table) {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.markdown-body :deep(table) {
    border-collapse: collapse;
    th {
        background-color: var(--backgroundpattern);
    }
    td, th {
        padding: 8px;
        border: 2px var(--bordercolor) solid;
    }
}

.markdown-body :deep(pre) {
    width: fit-content;
    padding: 32px 16px;
    border-radius: 4px;
    margin-bottom: 2rem;
}

.markdown-body :deep(ol),
.markdown-body :deep(Ul) {
    margin-bottom: 2rem;
}

.markdown-body :deep(a) {
    color: var(--acolor);
    font-weight: bold;
    transition: .2s;

    &:hover {
        filter: drop-shadow(var(--acolor) 0px 0px 10px);
    }
}
</style>