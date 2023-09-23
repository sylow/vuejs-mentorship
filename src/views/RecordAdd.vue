<script lang="ts" setup>
import RecordForm from '../components/RecordForm.vue'
import { type IRecordForm } from '../components/RecordForm'
import { submit } from '@/services/record.service'
const onSubmit = async (form: IRecordForm) => {
  const result = await submit(form)
  console.log(result)
  console.log('Submit:', form)
}
</script>

<template>
  <div>
    test
    <RecordForm @submit="onSubmit" />
  </div>
</template>