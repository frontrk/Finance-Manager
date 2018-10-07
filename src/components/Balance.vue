<template>
<div>
<md-card>
    <md-button @click="toggleMe">toggle me</md-button>
    <md-card-header>
        <div class="md-title">Balance</div>
    </md-card-header>

    <md-card-content>                    

        {{amount}}

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