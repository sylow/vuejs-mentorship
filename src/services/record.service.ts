import { type IRecordForm } from '@/components/RecordForm'
import axios from '@/libraries/axios'

export type ModelLog = {
  id: number
  user_id: number
  recorded_on: string
  weight: number
  created_at: string
  updated_at: string
}

export const all = async (): Promise<{ success: Boolean, data: ModelLog[], error?: string }> => {
  const data = await axios.get('/v1/records')
  return { success: true, data: data.data, error: '' }
}

export const destroy = async (id: number): Promise<{ success: Boolean, data: { status: 'success' | 'error' }, error?: string }> => {
  const data = await axios.delete(`/v1/records/${id}`)
  return { success: true, data: data, error: '' }
}

export const save = async (form: IRecordForm): Promise<{ success: Boolean, data: ModelLog, error?: string }> => {
  try{
    const data = await axios('/v1/records', {
      method: "POST",
      data: { record: form },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return { success: true, data: data }
  } catch(error){
    console.log(error)
    return { success: false, data: '', error: ''}
  }
}

