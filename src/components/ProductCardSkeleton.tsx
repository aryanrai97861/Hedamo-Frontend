import styles from './ProductCardSkeleton.module.css';

export default function ProductCardSkeleton() {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={`${styles.skeleton} ${styles.category}`}></div>
                <div className={`${styles.skeleton} ${styles.status}`}></div>
            </div>

            <div className={`${styles.skeleton} ${styles.title}`}></div>
            <div className={`${styles.skeleton} ${styles.titleShort}`}></div>

            <div className={styles.meta}>
                <div className={styles.metaItem}>
                    <div className={`${styles.skeleton} ${styles.label}`}></div>
                    <div className={`${styles.skeleton} ${styles.value}`}></div>
                </div>
                <div className={styles.metaItem}>
                    <div className={`${styles.skeleton} ${styles.label}`}></div>
                    <div className={`${styles.skeleton} ${styles.value}`}></div>
                </div>
                <div className={styles.metaItem}>
                    <div className={`${styles.skeleton} ${styles.label}`}></div>
                    <div className={`${styles.skeleton} ${styles.value}`}></div>
                </div>
            </div>
        </div>
    );
}
