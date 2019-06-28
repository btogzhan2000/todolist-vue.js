<template>
    <div class='notes'>
        <div class='note' :class="{ 'done': note.done }" v-for="(note, index) in notes" v-bind:key="note">
            <h1> {{ note.note_title }} </h1>
            <h3> {{ note.note_description }} </h3>
            <button class='btn' @click='note.done = !note.done'>{{ (note.done) ? 'Unmark' : 'Mark as Done' }} </button>
            <router-link :to="{ name: 'Detail', params: { note_id: index} }">
                <button class='btn'> See details </button>
            </router-link>
            <button class ='btn' @click='deleteNote(index)'> Delete note </button>   
        </div>
        <router-link :to="{ name: 'CreateNote' }">
            <button class='btn'> Create new note </button>
        </router-link>    
    </div>

</template>

<script>
var notes = require('../notes.js')
export default {   
    name: "ListNotes.vue",
    data() {
        return {
            notes: notes
        }
    },
    methods: {
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    }
}
</script>

<style>
   .note {
        margin: 0 auto;
        width: 400px;
        border-radius: 15px;
        border: 1px solid rgba(0,0,0,0.1);
        padding: 15px;
        margin-bottom: 15px;
        box-shadow: 0px 10px 30px rgb(0,0,0,0.2) 
   } 
    .btn {
        background-color: rgba(0,0,0,0.08);
        padding: 10px 5px;
        border: none;
        border-radius: 5px;
    } 
    .note.done {
        background-color: aquamarine;
        box-shadow: 0px 10px 30px rgba(aquamarine, 0.4)
    }
</style>


