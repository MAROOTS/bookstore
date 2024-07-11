import axios from "axios";

const API_URL ='http://localhost:9090/api/books';

class BookService{
    getBooks() {
        return axios.get(API_URL);
    }
    getBookById(id){
        return axios.get(`${API_URL}/${id}`);
    }
    createBook(book){
        return axios.post(API_URL,book);
    }
    updateBook(id, book){
        return axios.put(`${API_URL}/${id}`,book);
    }
    deleteBook(id){
        return axios.delete(`${API_URL}/${id}`)
    }
    getBooksByCategory(category){
        return axios.get(`${API_URL}/category/${category}`);
    }
}
export default new BookService();