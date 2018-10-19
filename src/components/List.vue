<template>
<div>
    <md-card>

    <md-card-header>

        <div class="md-title">List</div> 
        
        <md-badge md-dense v-bind:md-content="expenses.length">
        <md-button v-bind:class="{ 'md-raised': isExpense }" @click="isExpense = !isExpense">
        <small>Show Expenses</small>
        </md-button>
        </md-badge>

        <md-badge md-dense v-bind:md-content="incomes.length">            
        <md-button v-bind:class="{ 'md-raised': isIncome }" @click="isIncome = !isIncome">            
        <small>Show Incomes</small>
        </md-button>            
        </md-badge>
    </md-card-header>

    <md-card-content>   

    <transition-group name="list" tag="p">
        <md-list-item v-if="isIncome" v-for="item in incomes" v-bind:key="item.uuid" class="md-elevation-1 space">            
            <div class="md-list-item-text">                     
                <span>{{item.selected}}</span>                                
                <span class="bold">{{item.radio}}</span>  
            </div>                                                 
                <div class="center">{{item.cost}}</div>                                           
                <md-tooltip md-direction="right">{{item.date}}</md-tooltip>                
                <md-button class="md-icon-button md-list-action" @click="arrDelete +=item.uuid; deleteObject()">
                    <md-icon class="md-primary">delete</md-icon>                                
                </md-button>  
        </md-list-item>
      
    
        <md-list-item v-if="isExpense" v-for="item in expenses" v-bind:key="item.uuid" class="md-elevation-1 space">            
            <div class="md-list-item-text">                     
                <span>{{item.selected}}</span>                                
                <span class="bold">{{item.radio}}</span>
            </div>                                         
                <div class="center">{{item.cost}}</div> 
                <md-tooltip md-direction="right">{{item.date}}</md-tooltip>                         
                <md-button class="md-icon-button md-list-action" @click="arrDelete +=item.uuid; deleteObject()">
                    <md-icon class="md-primary">delete</md-icon>                                
                </md-button>  
        </md-list-item>

    </transition-group>

    </md-card-content>
    <md-card-actions>                 
        <md-button>Action</md-button>
    </md-card-actions>
</md-card>
</div>
</template>

<script>

import { mapState, mapGetters, mapMutations} from 'vuex'

export default {
    name: 'Stats',
    data: function() {
        return {
            arrDelete: [],
            isExpense: true,
            isIncome: true          
        }
    },
    computed: {
        ...mapState([
        'cashflow',
        'count',
        'box'                  
    ])
    ,
        ...mapGetters([        
        'expenses',
        'incomes'        
        ])
    },
    methods: {
        ...mapMutations([
        'delete'
        ]),
        deleteObject() {                    
            this.delete(this.arrDelete)
            this.arrDelete = []                                                
        }
    }
}
</script>

<style>

.space {
    margin-bottom: 10px;
    transition:all .1s ease-out;
}
.space:hover {
    background: rgb(216, 216, 216)
}

.md-list-item-text > span {
    padding: 5px;    
}


.bold {
    font-weight: bold;
}
.center {    
    background: #448aff;
    color: #fff;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
}

li {
    list-style-type: none;    
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all .2s;
}
.list-enter, .list-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}


</style>
