<script lang="ts" setup>
import { reactive, type PropType, onMounted } from 'vue'
import { type IRecordForm } from './RecordForm'
import ImageForm from '@/components/ImageUpload.vue'

const form = reactive<IRecordForm>({
  date: '', weight: 0, file: []
})

const props = defineProps({
  initialValue: {
    type: Object as PropType<IRecordForm>,
    required: false,
  }
})

onMounted(() => {
  if (props.initialValue) {
    form.date = props.initialValue.date
    // ...
  }
})

const emit = defineEmits<{
  (e: 'submit', data: IRecordForm): void
}>()

const onSubmit = () => {
  emit('submit', form)
  console.log('submit')
}
</script>

<template>
   <div class="title">Add Record</div>
   <form @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Record Date:</label>
      <div class="control">
        <input type="text" name="date" role="date" class="input" v-model="form.date"/>
      </div>
    </div>

    <div class="field">
      <label class="label">Weight</label>
      <div class="control">
        <input type="text" name="weight" role="weight" class="input" v-model="form.weight" />
      </div>
    </div>
    <div class="field">
      <ImageForm v-model="form.file"/>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Log</button>
      </div>
    </div>
  </form>
</template>