<template>
    <nav>
        <div class="logo">
            <h2 class="logoText">{{ heading }}</h2>
        </div>
        <ul class="menu">
            <li v-for="link in menuLinks" :key="link" class="linksList">
                <router-link :to="link.path" class="link">
                    <button class="linkButton">
                        <span class="btnText">{{ link.text }}</span>
                    </button>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>

import { links, heading } from '../helpers/NavbarLinks';

export default {
    data() {
        return {
            menuLinks: links,
            heading,
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';

nav {
    max-width: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: $color-white-smoke-nav-modal;
    padding: 20px;
    margin-top: 100px;
    border-radius: 20px;
    border: 2px solid lightgrey;

    .logoText {
        font-weight: 500;
        font-size: 25px;
        margin-top: 25px;
        background: $color-green;
        color: $color-white;
        padding: 20px;
        border-radius: 10px;
    }

    .menu {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        text-align: center;
        font-size: 20px;
        margin-top: 50px;

        .linkButton {
            padding: 15px;
            width: 250px;
            margin-top: 10px;
            background: $color-light-green;
            border: 1px solid $color-green-btn-border;
            border-radius: 15px;
            cursor: pointer;

            .btnText {
                color: $color-white;
                font-weight: 600;
                font-size: 15px;
            }
        }
    }
}
</style>