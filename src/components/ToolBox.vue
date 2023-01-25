<template>
    <div class="wrapper">
        <div class="toolBox">
            <div class="heading">
                <h2>
                    <span class="headingText">{{ program }}</span> |
                    <span class="headingText">{{ client }}</span> |
                    <span class="headingText"> {{ draw }}</span>
                </h2>
                <button class="showMoreBtn" @click="showPhotos">Rozwiń</button>
            </div>
            <div class="photoContainer">
                <div class="photo" v-show="showPhotosDiv" v-for="photoList in photos" :key="photoList.id">
                    {{ photoList }}
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: ['id', 'program', 'client', 'draw', 'photos'],
    data() {
        return {
            showPhotosDiv: false,
        }
    },
    methods: {
        showPhotos() {
            this.showPhotosDiv = !this.showPhotosDiv;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';

.wrapper {
    width: 450px;
    padding: 10px;

    .toolBox {
        width: 100%;
        padding: 20px;
        background: $color-green;
        border-radius: 10px;
        color: $color-white;

        .heading {
            display: flex;
            justify-content: space-between;
            background-color: $color-light-green;
            padding: 13px;
            border-radius: 10px;

            .headingText {
                font-weight: bold;
            }

            .headingText:first-child {
                color: $color-black;
            }

            .showMoreBtn {
                background: $color-orange;
                border: 1px solid $color-orange-btn-border;
                padding: 5px;
                border-radius: 5px;
                color: $color-white;
                font-weight: bold;
                cursor: pointer;
            }
        }

        .photoContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-flow: wrap;
            padding: 15px;
            width: 100%;
            height: auto;

            .photo {
                margin: 5px;
                width: 100px;
                height: 100px;
                background: lightsalmon;
            }
        }
    }
}
</style>