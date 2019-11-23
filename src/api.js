import axios from 'axios'

const BASE_URL = 'https://mysteerimetsa.herokuapp.com'

export const generateAdventure = async (id = 0) => {
  const data = await axios.post(`${BASE_URL}/generate_adventure?id=${id}`)
  return data.data
}

export const getAdventure = async difficulty => {
  const data = await axios.post(`${BASE_URL}/get_adventures?difficulty=${difficulty}`)
  return data.data.res
}
