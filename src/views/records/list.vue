<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { all, destroy, type ModelLog } from '@/services/record.service'
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()
const data = ref<ModelLog[]>([])
const loading = ref<boolean>(false)

onMounted( async () => {
  console.log('---List View on mounted----')
  const{ data: d } = await all()
  data.value = d
})

// const remove = async (id: number)  => {
//   if(!confirm('delete?'))
//     return

//   loading.value = true

//   const response = await destroy(id)

//   if (response.success) {
//     data.value = data.value.filter((item) => {
//       return item.id != id
//     })
//   } else {
//     alert(response.error)
//   }

//   loading.value = false
// }

const remove = (id: number) => {
  if(!confirm('delete?')) return

  loading.value = true

  destroy(id).then((response) => {
    data.value = data.value.filter(item => item.id !== id)
    notify({
      title: "Delete",
      text: "You successfully deleted the record",
      type: 'success'
    })    
  })
  .catch((error: { message: string, response: {data: {error: string}} }) => {
    console.log(error)
    notify({
      title: error.message,
      text: error.response.data.error,
      type: 'error'
    })
  })
  .finally(() => {
    loading.value = false
  })
}

</script>

<template>
  <div>
    <div class="title">Your Records</div>
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Weight</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in data" :key="record.id">
          <td>{{ record.recorded_on }}</td>
          <td>{{ record.weight }}</td>
          <td><button :disabled="loading" @click='() => remove(record.id)'>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>