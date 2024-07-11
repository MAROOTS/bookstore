import {useEffect, useState} from "react";
import BookService from "../services/BookService.jsx";

const categories =['All','Fantasy','Romance','History','Best seller'];
const BookList = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchBooks = async () => {
            let response;
            if (selectedCategory === 'All') {
                response=await BookService.getBooks();
            }else {
                response=await BookService.getBooksByCategory(selectedCategory);
            }
            setBooks(response.data);
        }
        fetchBooks();

    },[selectedCategory]);


  return(
      <div className="container mx-auto px-4">
        <div className="my-4">
            <ul className="flex space-x-12 items-center justify-center mt-10">
                {categories.map((category)=>(
                    <li key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`cursor-pointer ${selectedCategory === category ?'text-blue-800' : ''}`}
                    >{category}</li>
                ))}
            </ul>
        </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {books.map((book)=>(
                  <div key={book.id} className="bg-white rounded shadow p-4">
                      <img src={book.imageUrl} alt="img" className="w-full h-64 object-cover mb-4"/>
                      <h3 className="text-lg mb-2 font-bold">{book.title}</h3>
                      <p className="text-sm">{book.author}</p>
                      <p className="text-sm text-gray-950">{book.description}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
export default BookList
