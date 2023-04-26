import Header from "../components/Header";
import ImageList from "../components/ImageList/ImageList";
import Description from "../components/Description";
import Footer from "../components/Footer";
//  import imgs from "../json/images.json";
import { useImages } from "../react-query";

function Home() {

    const { data, isLoading } = useImages();
    const imgs = data || [];
    //console.log(import.meta.env.VITE_FIREBASE_PROJECTID)

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