<script lang="ts" setup>
import { ref, reactive, type PropType, onMounted } from 'vue'
import { type IRecordForm } from './RecordForm'
import ImageForm from '@/components/ImageUpload.vue'

const form = reactive<IRecordForm>({
  recorded_on: '', weight: 0, image: null
})

const props = defineProps({
  initialValue: {
    type: Object as PropType<IRecordForm>,
    required: false,
  }
})

// onMounted(() => {
//   if (props.initialValue) {
//     form.date = props.initialValue.date
//     // ...
//   }
// })

const emit = defineEmits<{
  (e: 'submit', data: IRecordForm): void
}>()

const onSubmit = () => {
  console.log(form)
  emit('submit', form)
}

</script>

<template>
   <div class="title">Add Record</div>
   <form @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Record Date:</label>
      <div class="control">
        <input type="text" name="recorded_on" role="recorded_on" class="input" v-model="form.recorded_on"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Weight</label>
      <div class="control">
        <input type="text" name="weight" role="weight" class="input" v-model="form.weight" />
      </div>
    </div>
    <div class="field">
      <ImageForm v-model="form.image"/>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Log</button>
      </div>
    </div>
  </form>
</template>