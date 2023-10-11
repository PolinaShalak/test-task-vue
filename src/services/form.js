import { FORM_ENDPOINT } from '@/services/endpoints'

const formRequest = async (data) => {
  try {
    const result = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((data) => {
      if (data.status > 400) {
        throw new Error('Something went wrong')
      }
      return data.json()
    })

    return { ok: true, data: result }
  } catch (e) {
    return { ok: false, error: e }
  }
}

export default formRequest
