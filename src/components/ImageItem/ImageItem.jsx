import styles from './imageitem.module.css'

export default function ImageItem({ img }) {
    return (
            <div className={styles.image}>
                <a href="" className={styles.imageLink}>
                    <img src={img.image} alt="" className={styles.imageStyle} />
                </a>
                <p className={styles.imageTitle}>{img.name}</p>
            </div>
    );
}