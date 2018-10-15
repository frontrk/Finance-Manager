<template>
<div>

<md-card>
    <md-card-header>
        <div class="md-title">Manager</div>
    </md-card-header>

    <md-card-content>                          
    <md-field>
        <label>Initial Value</label>
        <md-input v-model.number="cost" type="number" onfocus="this.value=''" min="0"></md-input>          
    </md-field> 
    
    <md-field>
    <label>Categories</label>
        <md-select v-model="selected">
            <md-option v-for="(item, index) in categories" v-bind:value="item.value" :key="index">
                {{ item.text }}                
            </md-option>
        </md-select>
    </md-field>        
    <div>
        <md-radio v-model="radio" value="Expense">Expense</md-radio>
        <md-radio v-model="radio" value="Income" class="md-primary">Income</md-radio>
    </div>      
    </md-card-content>

    <md-card-actions>        
        <md-button @click="generateUuid(); addItem();">Add</md-button>                
    </md-card-actions>
</md-card>

</div>
</template>
<script>
import { uuid } from 'vue-uuid'
import { mapMutations } from 'vuex'

const currentTime = require('moment');

export default {
    name: 'Manager',
    data: function() {
        return {
            cost: 0,
            categories: [
                { text: 'Shopping', value: 'shopping' },
                { text: 'Health care', value: 'healthcare' },
                { text: 'Groceries', value: 'groceries' }
            ],    
            selected: 0,
            radio: 'Expense',                                 
            newItem: {},
            uuid: ''                                
        }
    },
    methods: {
        ...mapMutations([
            'ADD_ITEM', 'increment'
        ]),
        addItem: function() {
            // stąd musi wychodzi OBIEKT bo bedzie puszowany do tablicy w store
            this.newItem.cost = this.cost
            this.newItem.selected = this.selected            
            this.newItem.radio = this.radio                        
            this.newItem.uuid = this.uuid                                 
            this.ADD_ITEM(this.newItem)    
            this.increment(this.cost)            
            this.newItem = {}                                                    
        },
        generateUuid() {
            this.uuid = uuid.v1(); 
        }
    }
}
</script>
<style>

</style>