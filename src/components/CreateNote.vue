<template>
    <div id="create">
        <h1>Create Note</h1>    
            <input type="text" class='input' v-model='newdata.data_title'><br>
            <input type="text" class='input' v-model='newdata.data_description'><br>  
            <router-link :to="{ name: 'ListNotes' }">
                <button class='btn' @click="createNote()"> Create new note </button>
            </router-link>     
    </div>
</template>

<script>
var notes = require('../notes.js')
export default {  
    name: 'CreateNote.vue',
    data() {
        return {
            newdata: 
            {
                data_title:'',
                data_description:''
            }
        }
    },
    methods: {
        createNote() {    
            notes.push({
                note_title: this.newdata.data_title, 
                note_description: this.newdata.data_description,
                done: false,
            })           
            this.newdata.data_title=''
            this.newdata.data_description=''  
        }
    }
}
</script>

<style>
.input {
        margin: 0 auto;
        width: 400px;
        border-radius: 15px;
        border: 1px solid rgba(0,0,0,0.1);
        padding: 15px;
        margin-bottom: 15px;
        box-shadow: 0px 10px 30px rgb(0,0,0,0.2) 
   } 
</style>
