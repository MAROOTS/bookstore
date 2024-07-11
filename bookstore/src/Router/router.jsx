import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home.jsx";
import BookList from "../components/BookList.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<Home/>,},
            {path:"/books", element:<BookList/>}
        ]
    }
])

export default router;