<template> 
    <div class='note' :class="{ 'done': note.done }" v-if='note'>
        <h1> {{ note.note_title }} </h1>
        <h3> {{ note.note_description }} </h3>
        <button class='btn' @click='note.done = !note.done'>{{ (note.done) ? 'Unmark' : 'Mark as Done' }} </button>
        <router-link :to="{ name: 'ListNotes' }">
            <button class ='btn' @click='deleteNote($route.params.note_id)'> Delete note </button>
        </router-link>          
    </div>
</template>

<script>
var notes = require('../notes.js')
export default {   
    name: "Detail.vue",
    data() {
        return {
            notes: notes,
            note: null
        }
    },
    created() {
        var note_id = this.$route.params.note_id
        this.note = this.notes[note_id]
    },
    methods: {
        deleteNote(id) {
            this.notes.splice(id, 1)
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


