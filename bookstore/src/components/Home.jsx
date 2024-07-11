import bgImage from '../assets/home.jpg'
import {NavLink} from "react-router-dom";
import { MdSearch } from "react-icons/md";
import BookList from "./BookList.jsx";
const Home = () => {

    const  navItems =[
        {title:'Home', link:'/'},
        {title:'Books', link:'/books'},
    ]
    return(
        <>
            <div className="bg-gray-800 text-white h-screen flex flex-col"
                 style={{
                     backgroundImage: `url(${bgImage})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}
            >
                <nav className="flex justify-between items-center bg-gray-800 p-5 opacity-50">
                    <div className="text-2xl font-bold ">BookShelf</div>
                    <ul className="flex space-x-6">
                        {navItems.map(link => (
                            <li key={link.title}>
                                <NavLink to={link.link} className="hover:text-green-600"
                                         activeClassName="text-gray-600">
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <MdSearch size={30} color="#fff"/>
                    </div>
                </nav>
                <div
                    className="flex-1 flex flex-col items-center justify-center text-center px-4 bg-gray-900 bg-opacity-70">
                    <h1 className="text-4xl md:text-6xl mb-4 font-bold">The Best Learning Site</h1>
                    <p className="text-lg md:text-xl mb-8">Learn from the comfort of your home, by getting all types of
                        books with different genres</p>
                    <button className="px-6 bg-orange-600 py-3 rounded-sm">Start Learning Now</button>
                </div>

            </div>
            <BookList/>
        </>


    )
}
export default Home;