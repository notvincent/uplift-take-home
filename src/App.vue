<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    .error-message {
        text-align: center;
        color: red;
    }
    input {
        height: 30px;
        width: 300px;
        border: none;
        border-bottom: 2px solid grey;
        margin: 0 5px;
        font-size: 20px;
    }
    button {
        border: 2px solid grey;
        background: white;
        color: grey;
        font-weight: bold;
    }
</style>