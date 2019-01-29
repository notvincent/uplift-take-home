<template>
    <div class="song-card">
        <img :src="song.artworkUrl100"/>
        <h2>{{song.artistName}}</h2>
        <h3>{{song.collectionName}}</h3>
        <p>{{song.trackName}}</p>
        <a :href="song.trackViewUrl">
            <button>iTunes</button>
        </a>
    </div>
</template>

<script>
    export default {
        name: "SongCard",
        props: ['song']
    }
</script>

<style scoped lang="scss">
    .song-card {
        width: 300px;
        margin: auto;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding-bottom: 10px;
        img {
            width: 100%
        }
        h2, h3, p {
            white-space: nowrap;
            overflow: hidden;
            width: 300px;
            text-overflow: ellipsis;
        }
        button {
            height: 30px;
        }
    }
</style>