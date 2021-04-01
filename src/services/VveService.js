import http from "../http-common";

class VveService {
  getVve(params) {
    return http.get("/vve", {params});
  }

  getVvgvves(id) {
    return http.get("/validvalueentry?vvg_ID=" + id);
  }

  get(id) {
    return http.get(`vve/${id}`);
  }

  create(data) {
    return http.post("vve/", data);
  }

  update(id, data) {
    return http.put(`vve/${id}`, data);
  }

  delete(id) {
    return http.delete(`vve/${id}`);
  }

  //deleteAll() {
  //  return http.delete(`courses`);
  //}
}

export default new VveService();