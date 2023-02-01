import { reactive, toRefs } from 'vue'

const useImage = () => {
   const state = reactive({
      image: '',
      readAbleImage: '',
   })

   const createReadAbleImage = (file: File) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
         state.readAbleImage = reader.result as string
         state.image = file as any
      }
   }

   const handleImage = (e: any) => {
      const {
         target: {
            validity,
            files: [file],
         },
      } = e
      if (!validity.valid) return
      createReadAbleImage(file)
   }

   const handleDropImage = (e: any) => {
      e.stopPropagation()
      e.preventDefault()
      console.log(e.dataTransfer.files[0])
      createReadAbleImage(e.dataTransfer.files[0])
   }

   const handleDragOver = (e: Event) => {
      e.preventDefault()
   }

   const cancelImage = () => {
      state.readAbleImage = ''
      state.image = ''
   }

   return {
      ...toRefs(state),
      handleImage,
      cancelImage,
      handleDropImage,
      handleDragOver,
   }
}

export default useImage
