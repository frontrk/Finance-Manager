<template>
<div>
    <md-card>

    <md-card-header>
        <div class="md-title">List</div>        
        <md-button @click="activeList = 'all'">All</md-button>
        <md-button @click="activeList = 'expenses'" class="md-accent">Expenses</md-button>
        <md-button @click="activeList = 'incomes'" class="md-primary">Incomes</md-button>                        
    </md-card-header>

    <md-card-content>   

        <md-list-item v-if="activeList === 'incomes'" v-for="item in incomes" v-bind:key="item.uuid" class="md-elevation-1 space">            
            <div class="md-list-item-text">                     
                <span>{{item.selected}}</span>                                
                <span class="bold">{{item.radio}}</span>
            </div> 
            <div class="center">{{item.cost}}</div>            
                <md-button class="md-icon-button md-list-action" @click="arrDelete +=item.uuid; deleteObject()">
                    <md-icon class="md-primary">delete</md-icon>                                
                </md-button>  
        </md-list-item>
        

                    
        <md-list-item v-else-if="activeList === 'expenses'" v-for="item in expenses" v-bind:key="item.uuid" class="md-elevation-1 space">            
            <div class="md-list-item-text">                     
                <span>{{item.selected}}</span>                                
                <span class="bold">{{item.radio}}</span>
            </div> 
            <div class="center">{{item.cost}}</div>            
                <md-button class="md-icon-button md-list-action" @click="arrDelete +=item.uuid; deleteObject()">
                    <md-icon class="md-primary">delete</md-icon>                                
                </md-button>  
        </md-list-item>
        
        
                        
        <md-list-item v-if="activeList === 'all'" v-for="item in cashflow" v-bind:key="item.uuid" class="md-elevation-1 space">            
            <div class="md-list-item-text">                     
                <span>{{item.selected}}</span>                                
                <span class="bold">{{item.radio}}</span>
            </div> 
            <div class="center">{{item.cost}}</div>            
                <md-button class="md-icon-button md-list-action" @click="arrDelete +=item.uuid; deleteObject()">
                    <md-icon class="md-primary">delete</md-icon>                                
                </md-button>  
        </md-list-item>        

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
            activeList: 'all'            
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

</style>
