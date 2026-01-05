import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.brand}>HEDAMO</span>
                    <span className={styles.divider}>|</span>
                    <span className={styles.subtitle}>Institutional Disclosure System</span>
                </Link>
                <div className={styles.user}>
                    <div className={styles.avatar}>A</div>
                    <span className={styles.username}>Admin View</span>
                </div>
            </div>
        </header>
    );
}
