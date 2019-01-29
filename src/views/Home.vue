<template>
    <div class="home">
        <form @submit.prevent="submit">
            <input type="text" v-model="query"/>
            <button type="submit">Search</button>
        </form>
        <div v-if="errorMessage != ''" class="error-message">{{errorMessage}}</div>
        <div class="song-container">
            <song-card v-for="(song, key) in searchResults" :song="song" :key="key"/>
        </div>
    </div>
</template>

<script>
    import itunesController from '../controllers/itunes'
    import SongCard from '../components/SongCard'
    export default {
        name: 'home',
        components: {SongCard},
        data () {
            return {
                query: '',
                searchResults: [],
                errorMessage: ''
            }
        },
        methods: {
            async submit () {
                this.errorMessage = ''
                if (this.query.length > 100) {
                    this.errorMessage = 'Search query must be less than 100 characters'
                }
                else {
                    this.searchResults = await itunesController.itunesController.search(this.query)
                    this.searchResults = this.searchResults.results
                    if (this.searchResults.length == 0) {
                        this.errorMessage = 'Search returned no results'
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    form {
        display: flex;
        justify-content: center;
    }
    .song-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @media only screen and (max-width: 1224px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media only screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media only screen and (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
        row-gap: 20px;
        column-gap: 10px;
        padding: 40px;
    }
</style>
