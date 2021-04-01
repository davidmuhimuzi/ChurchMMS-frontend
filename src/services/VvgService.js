import http from "../http-common";

class VvgService {
  getVvg(params) {
    return http.get("/vvg", {params});
  }

  get(id) {
    return http.get(`vvg/${id}`);
  }

  create(data) {
    return http.post("vvg/", data);
  }

  update(id, data) {
    return http.put(`vvg/${id}`, data);
  }

  delete(id) {
    return http.delete(`vvg/${id}`);
  }

  //deleteAll() {
  //  return http.delete(`courses`);
  //}
}

export default new VvgService();