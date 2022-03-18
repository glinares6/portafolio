<script lang="ts" setup>
const possibleSizes= ['XS','S','M','L','XL','XXL'];


// javascript
    // const props= defineProps({
    //     selectedSize: { type: String, required: true}
    // })

    // const emits = defineEmits({
    //     onChangeSize: String
    // })

// typescript

const props = defineProps<{
    selectedSize: string
}>();

const emits= defineEmits<{
    ( event: 'onChangedSize', value:string ): void,
    // ( event: 'onNewValue' , value:string ): void,
}>();


// toRef->  desestructura   tdo lo que viene de las prps
</script>

<template>
    <!-- <h1>{{ props.selectedSize }}</h1> -->
    <button
     v-for="size in possibleSizes"
        :class="{ 'active': props.selectedSize === size }"
        @click="emits('onChangedSize', size )"
>
        {{  size }}
    </button>
</template>

