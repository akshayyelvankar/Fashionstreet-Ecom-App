import Products from "./Products";
import Footer from "./Footer";

const Home=()=> {
    return (
        <div>
            <div className="card text-bg-dark">
                <img src="../img/E-com1.jpg" className="card-img" alt="Background" height="700px"/>
                    <div className="card-img-overlay">
            </div>
            </div>
            <Products/>
            <Footer/>
        </div>
    )
}
export default Home;