<template >
    <div class="centrar">
        <h1>{{ title }}</h1>
        <p>{{ counter }}<sup>2</sup> = {{ counterPow }}</p>
    </div>
    <!-- <hr /> -->
    <div class="centrar">
        <button type="button" @click="counterHandler('-')">-1</button>
        <button type="button" v-on:click="() => counterHandler('+')">+1</button>
    </div>
</template>
<script>

export default {
    props: {
        title: String,
        start: {
            type: Number,
            requerid: true,
            default: 5,
            // validator: (val) => {
            //     return val>=0?true:false
            // }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        counterHandler(flag) {
            this.counter = (flag == "+") ? this.counter + 1 : this.counter - 1
        }
    },
    computed: {
        counterPow() {
            return this.counter * this.counter

        }
    }


}

</script>

<style scoped>
.centrar {
    text-align: center;
}
p{
    font-weight: bold;
    font-size: 18px;
}
button {
    margin-right: 10px;
    color: rgb(43, 41, 41);
    background-color: rgb(134, 184, 59);
    border: thin;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    padding: 4px 8px;
}

button:hover {
    background-color: rgb(183, 217, 132);

}
</style>