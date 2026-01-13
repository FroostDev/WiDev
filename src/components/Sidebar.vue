<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed, ref } from 'vue'
import { categorieData, subcategorieData } from '../data/categorie'

const route = useRoute()

const titre_categorie = computed(() => {
    if(route.name == 'categorie' || route.name == 'accueil') {
        return route.params.categorie || 'Accueil'
    } else if(route.name == 'wiki-subcat' || route.name == 'wiki-notion') {
        const subSlug = route.params.subcat;
        return String(subSlug).charAt(0).toUpperCase() + String(subSlug).slice(1)
    }
})

const lientest = computed(() => {
    if(route.name == 'categorie' || route.name == 'accueil') {
        return categorieData[route.params.categorie]?.links || [];
    } else if(route.name == 'wiki-subcat' || route.name == 'wiki-notion') {
        const subSlug = route.params.subcat;
        return subcategorieData[subSlug]?.subcat || [];
    }
});
</script>

<template>
    <header>
        <nav>
           <div class="logo-links">
            <router-link to="/"><svg width="48" height="25" viewBox="0 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.57143 0L0 5L18.2857 25L22.8571 20L4.57143 0Z" fill="var(--textcolor)"/>
<path d="M43.4286 0L48 5L29.7143 25L25.1429 20L43.4286 0Z" fill="var(--textcolor)"/>
<path d="M16 10.1563L20.5714 15.1563L24 11.4063L27.4286 15.1563L32 10.1563L24 1.40625L16 10.1563Z" fill="var(--textcolor)"/>
</svg>
</router-link>
            <ul>
                <li><router-link to="/"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.55558 17H1.00003L17 1L33 17H29.4445M4.55558 17V29.4444C4.55558 30.3874 4.93019 31.2918 5.59698 31.9586C6.26378 32.6254 7.16815 33 8.11114 33H25.8889C26.8319 33 27.7363 32.6254 28.4031 31.9586C29.0699 31.2918 29.4445 30.3874 29.4445 29.4444V17" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 33V22.3333C11.6667 21.3903 12.0413 20.486 12.7081 19.8192C13.3749 19.1524 14.2793 18.7778 15.2223 18.7778H18.7778C19.7208 18.7778 20.6252 19.1524 21.292 19.8192C21.9588 20.486 22.3334 21.3903 22.3334 22.3333V33" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</router-link></li>
                <li><router-link to="/categorie/Programmation"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4444 20.5556L9.88889 17L13.4444 13.4444M20.5556 13.4444L24.1111 17L20.5556 20.5556" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 17C1 19.1012 1.41385 21.1817 2.21793 23.1229C3.022 25.0641 4.20055 26.828 5.68629 28.3137C7.17203 29.7994 8.93586 30.978 10.8771 31.7821C12.8183 32.5861 14.8989 33 17 33C19.1012 33 21.1817 32.5861 23.1229 31.7821C25.0641 30.978 26.828 29.7994 28.3137 28.3137C29.7994 26.828 30.978 25.0641 31.7821 23.1229C32.5861 21.1817 33 19.1012 33 17C33 14.8989 32.5861 12.8183 31.7821 10.8771C30.978 8.93586 29.7994 7.17203 28.3137 5.68629C26.828 4.20055 25.0641 3.022 23.1229 2.21793C21.1817 1.41385 19.1012 1 17 1C14.8989 1 12.8183 1.41385 10.8771 2.21793C8.93586 3.022 7.17203 4.20055 5.68629 5.68629C4.20055 7.17203 3.022 8.93586 2.21793 10.8771C1.41385 12.8183 1 14.8989 1 17Z" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</router-link></li>
                <li><router-link to="/categorie/Frameworks" href=""><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 17H22.3333M17 10.1429V23.8571M6.33333 33C5.39034 33 4.48597 32.5184 3.81918 31.6611C3.15238 30.8038 2.77778 29.641 2.77778 28.4286V19.2857L1 17L2.77778 14.7143V5.57143C2.77778 4.35901 3.15238 3.19625 3.81918 2.33894C4.48597 1.48163 5.39034 1 6.33333 1M27.6667 33C28.6097 33 29.514 32.5184 30.1808 31.6611C30.8476 30.8038 31.2222 29.641 31.2222 28.4286V19.2857L33 17L31.2222 14.7143V5.57143C31.2222 4.35901 30.8476 3.19625 30.1808 2.33894C29.514 1.48163 28.6097 1 27.6667 1" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</router-link></li>
                <li><router-link to="/categorie/Outils"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.181 13.4537H13.4537V8.181L7.30223 2.02956C9.27004 1.08975 11.4808 0.783114 13.6301 1.15188C15.7794 1.52064 17.7616 2.54666 19.3036 4.08866C20.8456 5.63066 21.8716 7.61279 22.2404 9.7621C22.6091 11.9114 22.3025 14.1222 21.3627 16.09L31.908 26.6353C32.6072 27.3345 33 28.2828 33 29.2717C33 30.2605 32.6072 31.2088 31.908 31.908C31.2088 32.6072 30.2605 33 29.2717 33C28.2828 33 27.3345 32.6072 26.6353 31.908L16.09 21.3627C14.1222 22.3025 11.9114 22.6091 9.7621 22.2404C7.61279 21.8716 5.63066 20.8456 4.08866 19.3036C2.54666 17.7616 1.52064 15.7794 1.15188 13.6301C0.783114 11.4808 1.08975 9.27004 2.02956 7.30223L8.181 13.4537Z" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</router-link></li>
                <li><router-link to="/categorie/Divers"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88889 17V17.0178M17 17V17.0178M24.1111 17V17.0178M1 17C1 19.1012 1.41385 21.1817 2.21793 23.1229C3.022 25.0641 4.20055 26.828 5.68629 28.3137C7.17203 29.7994 8.93586 30.978 10.8771 31.7821C12.8183 32.5861 14.8989 33 17 33C19.1012 33 21.1817 32.5861 23.1229 31.7821C25.0641 30.978 26.828 29.7994 28.3137 28.3137C29.7994 26.828 30.978 25.0641 31.7821 23.1229C32.5861 21.1817 33 19.1012 33 17C33 14.8989 32.5861 12.8183 31.7821 10.8771C30.978 8.93586 29.7994 7.17203 28.3137 5.68629C26.828 4.20055 25.0641 3.022 23.1229 2.21793C21.1817 1.41385 19.1012 1 17 1C14.8989 1 12.8183 1.41385 10.8771 2.21793C8.93586 3.022 7.17203 4.20055 5.68629 5.68629C4.20055 7.17203 3.022 8.93586 2.21793 10.8771C1.41385 12.8183 1 14.8989 1 17Z" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</router-link></li>
            </ul>
           </div>
            <label>
                <input type="checkbox" class="light-dark"></input>
<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 16.99H1.01999M16.99 1V1.01999M32.98 16.99H33M16.99 32.98V33M5.61711 5.61711L5.59713 5.59713M28.4029 5.61711L28.3829 5.59713M28.3829 28.3829L28.4029 28.4029M5.59713 28.3829L5.61711 28.4029M8.995 16.99C8.995 19.1104 9.83733 21.144 11.3367 22.6433C12.836 24.1427 14.8696 24.985 16.99 24.985C19.1104 24.985 21.144 24.1427 22.6433 22.6433C24.1427 21.144 24.985 19.1104 24.985 16.99C24.985 14.8696 24.1427 12.836 22.6433 11.3367C21.144 9.83733 19.1104 8.995 16.99 8.995C14.8696 8.995 12.836 9.83733 11.3367 11.3367C9.83733 12.836 8.995 14.8696 8.995 16.99Z" stroke="var(--textcolor)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </label>
        </nav>
        <div class="subcategories">
            <h1>{{ titre_categorie }}</h1>
            <div class="subcategories-links">
                <router-link v-for="lien in lientest" :to="route.name === 'wiki-subcat' || route.name === 'wiki-notion' ? '/wiki/'+route.params.subcat+'/'+lien[1] : '/wiki/'+lien[1]" class="subcategories-link" :key="lien[1]">
                    {{ lien[0] }}
                </router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        display: grid;
        grid-template-columns: auto auto;
        /* position: fixed;
        top: 0;
        bottom: 0; */
        background: var(--menubackground);

        nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 32px 8px;
            border-right: 2px var(--bordercolor) solid;

            .logo-links {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 64px;

                ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 32px;
                padding: 0;
                li {
                    list-style: none;
                }
                }
            }
        }

        .subcategories {
            display: flex;
            flex-direction: column;
            gap: 32px;
            border-right: 2px var(--bordercolor) solid;
            min-width: 325px;
            padding: 32px;
            background-image: 
            linear-gradient(transparent 63px, var(--backgroundpattern) 63px 64px),
            linear-gradient(90deg, transparent 63px, var(--backgroundpattern) 63px 64px);
            background-size: 64px 64px;
            background-position: center center;

            .subcategories-links {
                display: flex;
                flex-direction: column;
                gap: 16px;

                .subcategories-link {
                    background: var(--gray);
                    padding: 16px;
                    border-radius: 8px;
                    transition: .2s ease-in-out;
                }

                .subcategories-link:hover {
                    transform: translateX(10px);
                    box-shadow: -10px 0px 20px var(--shadowcolor);
                }
            }
        }
        input {
            display: none;
        }
        label {
            cursor: pointer;
        }
    }
</style>