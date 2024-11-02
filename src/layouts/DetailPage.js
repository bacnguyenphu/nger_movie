import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer";

function DetailPage() {
    return ( 
        <div>
            <div><Header/></div>

            <Outlet/>

            <div><Footer/></div>
        </div>
     );
}

export default DetailPage;