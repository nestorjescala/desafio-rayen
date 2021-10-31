import axios from 'axios';
const BASE_BACKEND_URL = 'https://rayentutorialtestapp.azurewebsites.net/'

export default {
  getAllTutoriales: () => 
    axios.get(`${BASE_BACKEND_URL}tutorials`),
  filterTutoriales: (filtro) => 
    axios.get(`${BASE_BACKEND_URL}tutorial?description=${filtro}`),
  addTutorial: (tutorial) => 
    axios.post(`${BASE_BACKEND_URL}createtutorial`, tutorial),
  editTutorial: (id) =>
    axios.get(`${BASE_BACKEND_URL}tutorials/${id}`),
  updateTutorial: (id,tutorial) =>
    axios.put(`${BASE_BACKEND_URL}updatetutorial/${id}`, tutorial),
  deleteTutorial: (id) =>
    axios.delete(`${BASE_BACKEND_URL}deletetutorial/${id}`),
  deleteAll: () =>
    axios.delete(`${BASE_BACKEND_URL}deletetutorials`),
}