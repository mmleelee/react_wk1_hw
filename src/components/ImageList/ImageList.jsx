import imgs from "../../json/images.json";
import ImageItem from "../ImageItem/ImageItem";
import { Row, Col } from "antd";
import styles from './imagelist.module.css'

export default function ImageList() {
    return (
        <article className={styles.imageLayout}>
            <h1 className={styles.imgTitle}>IMAGES</h1>
            <hr className="divider--dark" />
            <div className={styles.imgList}>
                <Row>
                    {imgs.map(img => (
                        <Col
                            key={img.id}
                            sm={{ span: 12 }}
                            lg={{ span: 6 }}
                        >
                            <ImageItem img={img} />
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </article>
    );
}