<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone, useMouse } from '@vueuse/core'

const filesData = ref<{ name: string; size: number; type: string; lastModified: number }[]>([])
const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  filesData.value = []
  if (files) {
    console.log(files)
    filesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
  console.log(filesData.value)
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>

<template>
  <div class='dropzone' ref="dropZoneRef">
       <div> isOverDropZone: <BooleanDisplay :value="isOverDropZone" /></div>
        <div class="flex flex-wrap justify-center items-center">
          <div v-for="(file, index) in filesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
            <p>Name: {{ file.name }}</p>
            <p>Size: {{ file.size }}</p>
            <p>Type: {{ file.type }}</p>
            <p>Last modified: {{ file.lastModified }}</p>
          </div>
        </div>
  </div>
</template>


<style scoped>
.dropzone{
  background-color: #bbb;
  height: 200px;
  width: 200px;
}
</style>