import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/components/Header';
import VersionHistory from '@/components/VersionHistory';
import { generateMockProducts } from '@/lib/mockData';
import styles from './page.module.css';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const products = generateMockProducts(50);
    const product = products.find(p => p.id === id);

    if (!product) {
        return { title: 'Product Not Found' };
    }

    return {
        title: `${product.name} | Hedamo Disclosure`,
        description: `Producer-declared information for ${product.name}. Status: ${product.status}.`,
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;

    // In a real app, this would be an API call.
    // For now, we generate the same mock data and find the item.
    const products = generateMockProducts(50); // Ensure we cover the ID range
    const product = products.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    const statusColorMap: Record<string, string> = {
        'Draft': 'var(--status-draft-bg)',
        'Submitted': 'var(--status-submitted-bg)',
        'Published': 'var(--status-published-bg)',
    };

    const statusTextColorMap: Record<string, string> = {
        'Draft': 'var(--status-draft-text)',
        'Submitted': 'var(--status-submitted-text)',
        'Published': 'var(--status-published-text)',
    };

    return (
        <main>
            <Header />
            <div className="container">
                <div className={styles.nav}>
                    <Link href="/" className={styles.backLink}>
                        ← Back to Products
                    </Link>
                </div>

                <div className={styles.header}>
                    <div className={styles.titleRow}>
                        <h1>{product.name}</h1>
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
                    <div className={styles.producer}>
                        Declared by {product.producerName}
                    </div>
                </div>

                {/* Mandatory Disclaimer */}
                <div className={styles.disclaimer}>
                    <strong>Disclosure Notice:</strong> This information has been declared by the producer and has not been independently verified by Hedamo.
                </div>

                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        <section className={styles.section}>
                            <h2>Description</h2>
                            <p className={styles.text}>{product.description}</p>
                        </section>

                        <VersionHistory versions={product.versions} />
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.card}>
                            <h3>Details</h3>
                            <div className={styles.detailRow}>
                                <span className={styles.label}>ID</span>
                                <span className={styles.value}>{product.id}</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span className={styles.label}>Category</span>
                                <span className={styles.value}>{product.category}</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span className={styles.label}>Evidence Count</span>
                                <span className={styles.value}>{product.evidenceCount} Files</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span className={styles.label}>First Submitted</span>
                                <span className={styles.value}>
                                    {new Date(product.submittedAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
