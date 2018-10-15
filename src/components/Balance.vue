<template>
<div>
<md-card>
    <md-button @click="toggleMe">toggle me</md-button>
    <md-card-header>
        <div class="md-title">Balance</div>
    </md-card-header>

    <md-card-content>                    

        <md-content>
        
            <div class="flex">{{amount}}</div>

        </md-content>        
        
    </md-card-content>

    <md-card-actions>
        <md-button >Action</md-button>
        <md-button>Action</md-button>
    </md-card-actions>
</md-card>
</div>
</template>

<script>


import { mapState, mapGetters} from 'vuex'

export default {
    name: 'Balance',
    methods: {
        toggleMe: function () {
            this.$store.dispatch('toggle')
        }
    },    
    computed: {
        ...mapState([
        'cashflow'                
    ]),
        ...mapGetters([
        'isTrue',
        'expenses',
        'incomes',
        'amount'
        ])
}
}
</script>
<style>


.flex {
  padding: 10px;
  margin: 0 auto;  
  width: 80%;
  height: 50%;
  background: #448aff;
  border-radius: 50px;
  text-align: center; 
  font-size: 19px;   
  color: #fff;
}

</style>