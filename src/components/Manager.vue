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
        <md-button @click="generateTimeDate(); addItem();">Add</md-button>                
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
                { text: 'Food', value: 'food' },
                { text: 'Transportation', value: 'transportation' },
                { text: 'Entertainment', value: 'entertainment' },
                { text: 'Shopping', value: 'shopping' },
                { text: 'Communication', value: 'communication' },
                { text: 'Gifts', value: 'gifts' }
            ],    
            selected: 0,
            radio: 'Expense',                                 
            newItem: {},
            uuid: '',
            date: ''                            
        }
    },
    methods: {
        ...mapMutations([
            'ADD_ITEM', 'increment','addTime'
        ]),
        addItem: function() {    
  
        // this.radio === 'Expense' ? this.newItem.cost*-1 : console.log('income')    
        
           
        this.newItem.cost = this.cost        
        this.newItem.selected = this.selected            
        this.newItem.radio = this.radio                                        
        console.log(this.newItem.date)
        if (this.newItem.radio == 'Expense') {
            this.newItem.cost = this.newItem.cost *-1            
        }
        
        this.newItem.uuid = this.uuid                                 
        this.newItem.date = this.date
        this.ADD_ITEM(this.newItem)    
        this.increment(this.cost) 
        this.newItem = {}  
        console.log(this.newItem.cost)  //czemu sie pokazuje undefined w konsoli?                                        
        },
        generateTimeDate() {
            this.uuid = uuid.v1(); 
            this.date = this.moment().format('h:mm:ss a')
        }
       
    }
}
</script>
<style>

</style>