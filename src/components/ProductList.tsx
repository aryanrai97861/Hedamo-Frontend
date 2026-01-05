import { Product } from '@/lib/mockData';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';
import styles from './ProductList.module.css';

interface ProductListProps {
    products: Product[];
    isLoading?: boolean;
}

export default function ProductList({ products, isLoading }: ProductListProps) {
    if (isLoading) {
        return (
            <div className={styles.grid}>
                {[...Array(6)].map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className={styles.empty}>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters.</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
