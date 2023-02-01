import { ref } from 'vue'

const useDragAndDrop = () => {
   const dragElement = ref<HTMLElement>()
   const handleDrag = (e: Event) => {
      const target = e.target as HTMLElement
      dragElement.value = target
      target.style.cursor = 'grabbing'
   }

   const handleDragOver = (e: Event) => {
      e.preventDefault()
   }

   const handleDrop = (e: Event) => {
      e.stopPropagation()
      e.preventDefault()

      const target = e.target as HTMLElement
      const closest = target.closest(`[data-draggable]`) as HTMLElement
      const parentContainer = closest.parentElement as HTMLElement

      const dragElementIndex = Number(dragElement.value.id)
      const closestElementIndex = Number(closest.id)

      if (dragElementIndex > closestElementIndex) {
         parentContainer.insertBefore(dragElement.value, closest)
         dragElement.value.id = closestElementIndex.toString()
         closest.id = dragElementIndex.toString()
      } else {
         parentContainer.insertBefore(closest, dragElement.value)
         dragElement.value.id = closestElementIndex.toString()
         closest.id = dragElementIndex.toString()
      }
      dragElement.value.style.cursor = 'default'
   }

   return {
      handleDrag,
      handleDragOver,
      handleDrop,
   }
}

export default useDragAndDrop
