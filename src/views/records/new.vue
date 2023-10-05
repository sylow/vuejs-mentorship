<script lang="ts" setup>
import RecordForm from '@/components/RecordForm.vue'
import { type IRecordForm } from '@/components/RecordForm'
import { save } from '@/services/record.service'

const onSubmit = async (form: IRecordForm) => {
  console.log(form)
  const result = await save(form)
  console.log(result)
  console.log('Submit:', form)
}
</script>

<template>
  <div>
    <RecordForm @submit="onSubmit" />
  </div>
</template>