import { type IRecordForm } from '@/components/RecordForm'
import axios from '@/libraries/axios'


export const all = async (): Promise<{ success: Boolean, data: any, error?: string }> => {
  const data = await axios.get('/v1/records')
  return { success: true, data: data.data, error: '' }
}

export const destroy = async (id: string): Promise<{ success: Boolean, data: any, error?: string }> => {
  const data = await axios.delete(`/v1/records/${id}`)
  return { success: true, data: data, error: '' }
}

export const save = async (form: IRecordForm): Promise<{ success: Boolean, data: any, error?: string }> => {
  try{
    const data = await axios({
      url: '/v1/records',
      method: "POST",
      data: { record: form }
    })
    return { success: true, data: data }
  } catch(error){
    console.log(error)
    return { success: false, data: '', error: ''}
  }
}

