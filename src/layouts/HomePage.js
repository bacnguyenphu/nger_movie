import { Header, NewUpdateMovies, Slider } from "../components";

function HomePage() {
    return ( 
        <div className="bg-[#1A191F]">
            <div className="header"><Header/></div>
            
            <div className="slider">
                <Slider/>
            </div>
            <NewUpdateMovies/>
        </div>
     );
}

export default HomePage;