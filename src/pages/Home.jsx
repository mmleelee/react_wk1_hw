import Header from "../components/Header";
import ImageList from "../components/ImageList/ImageList";
import Description from "../components/Description";
import Footer from "../components/Footer";
import imgs from "../json/images.json"

function Home() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <ImageList img={imgs} />
                <Description />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;