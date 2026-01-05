import Link from 'next/link';
import { Product } from '@/lib/mockData';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const statusColorMap = {
        'Draft': 'var(--status-draft-bg)',
        'Submitted': 'var(--status-submitted-bg)',
        'Published': 'var(--status-published-bg)',
    };

    const statusTextColorMap = {
        'Draft': 'var(--status-draft-text)',
        'Submitted': 'var(--status-submitted-text)',
        'Published': 'var(--status-published-text)',
    };

    return (
        <Link 
            href={`/product/${product.id}`} 
            className={styles.card}
            aria-label={`View details for ${product.name}`}
        >
            <div className={styles.header}>
                <span className={styles.category}>{product.category}</span>
                <span
                    className={styles.status}
                    style={{
                        backgroundColor: statusColorMap[product.status],
                        color: statusTextColorMap[product.status]
                    }}
                >
                    {product.status}
                </span>
            </div>

            <h3 className={styles.title}>{product.name}</h3>

            <div className={styles.meta}>
                <div className={styles.metaItem}>
                    <span className={styles.label}>Declared by</span>
                    <span className={styles.value}>{product.producerName}</span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.label}>Evidence</span>
                    <span className={styles.value}>{product.evidenceCount} Items</span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.label}>Updated</span>
                    <span className={styles.value}>
                        {new Date(product.submittedAt).toLocaleDateString('en-US', {
                            month: 'short', day: 'numeric', year: 'numeric'
                        })}
                    </span>
                </div>
            </div>
        </Link>
    );
}
