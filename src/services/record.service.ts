import { type IRecordForm } from '@/components/RecordForm'
import axios from '@/libraries/axios'


export const all = async (): { success: Boolean, data: any, error?: string } => {
  const data = await axios.get('/v1/records')
  return { success: true, data: data.data, error: '' }
}

export const submit = async (form: IRecordForm): { success: Boolean, data: any, error?: string } => {
  try{
    const data = await axios({
      url: '/v1/records',
      method: "POST",
      data: form
    })
    return { success: true, data: data }
  } catch(error){
    console.log(error)
    return { success: false, data: '', error: ''}
  }
}

