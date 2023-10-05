<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { useDropZone, useMouse } from '@vueuse/core'

const filesData = ref<{ name: string; size: number; type: string; lastModified: number }[]>([])
const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  filesData.value = []
  if (files) {
    files.forEach((file) => {
      if (['image/jpeg', 'image/png'].includes(file.type)) {

      } else {
        console.log('wrong type')
        // error.value = 'File is not supported'
      }
    })

    // files = files.filter(file => ['image/jpeg'].includes(file.type))
  }

  if (files) {
    filesData.value = files.map(file => ({
      name: file.name,
      filename: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
  if (files !== null) {
    emit('update:modelValue', files[0])
  }
}

const props = defineProps({
  modelValue: {
    type: Object as PropType<File[]>,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: File): void
}>()

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>

<template>
  <div class='dropzone p-3' ref="dropZoneRef">
       <div> isOverDropZone: {{  isOverDropZone }}</div>
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
  background-color: #efefef;
  height: 200px;
  margin: 0 auto;
  border-style: dotted;
}
</style>