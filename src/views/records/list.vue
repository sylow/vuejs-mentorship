<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { all, destroy } from '@/services/record.service'
const data = ref([])

onMounted( async () => {
  console.log('---List View on mounted----')
  const{ data: d } = await all()
  data.value = d
})

const remove = async (id: number)  => {
  if(!confirm('delete?'))
    return

  await destroy(id)
  const{ data: d } = await all()
  data.value = d
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
          <td><button @click='() => remove(record.id)'>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>