import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api",
})
export const addQuestion = payload => api.post(`/question`, payload)
export const AllQuestions = () => api.get(`/questions`)
export const updateQuestionById = (id, payload) => api.put(`/question/${id}`, payload)
export const getQuestionById = id => api.get(`/question/${id}`)
const apis = {
  addQuestion,
  AllQuestions,
  updateQuestionById,
  getQuestionById,
}
export default apis;
