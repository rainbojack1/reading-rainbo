import axios from "axios";

export default {
    getBooks: function(term, query) {
        return axios.get("/api/books/" + term, { params: { q: query } });
    }
}