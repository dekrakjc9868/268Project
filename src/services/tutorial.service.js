import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/blusolddb");
  }

  get(id) {
    return http.get(`/blusolddb/${id}`);
  }

  create(data) {
    return http.post("/blusolddb", data);
  }

  update(id, data) {
    return http.put(`/blusolddb/${id}`, data);
  }

  delete(id) {
    return http.delete(`/blusolddb/${id}`);
  }

  deleteAll() {
    return http.delete(`/blusolddb`);
  }

  findByTitle(title) {
    return http.get(`/blusolddb?title=${title}`);
  }
}

export default new TutorialDataService();