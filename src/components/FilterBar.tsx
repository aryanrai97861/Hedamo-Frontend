import styles from './FilterBar.module.css';

interface FilterBarProps {
    onSearch: (term: string) => void;
    onStatusFilter: (status: string) => void;
    onCategoryFilter: (category: string) => void;
    onSortChange: (sort: string) => void;
}

export default function FilterBar({ onSearch, onStatusFilter, onCategoryFilter, onSortChange }: FilterBarProps) {
    return (
        <div className={styles.container}>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search by product name..."
                    className={styles.searchInput}
                    onChange={(e) => onSearch(e.target.value)}
                    aria-label="Search products by name"
                />
                {/* Placeholder for search icon */}
                <span className={styles.searchIcon}>🔍</span>
            </div>

            <div className={styles.controls}>
                <div className={styles.selectWrapper}>
                    <label className={styles.label} htmlFor="category-filter">Category:</label>
                    <select
                        id="category-filter"
                        className={styles.select}
                        onChange={(e) => onCategoryFilter(e.target.value)}
                        aria-label="Filter by category"
                    >
                        <option value="All">All Categories</option>
                        <option value="Equity Fund">Equity Fund</option>
                        <option value="Bond ETF">Bond ETF</option>
                        <option value="Real Estate Trust">Real Estate Trust</option>
                        <option value="Crypto Asset">Crypto Asset</option>
                        <option value="Commodity Future">Commodity Future</option>
                    </select>
                </div>

                <div className={styles.selectWrapper}>
                    <label className={styles.label} htmlFor="status-filter">Status:</label>
                    <select
                        id="status-filter"
                        className={styles.select}
                        onChange={(e) => onStatusFilter(e.target.value)}
                        aria-label="Filter by status"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Draft">Draft</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Published">Published</option>
                    </select>
                </div>

                <div className={styles.selectWrapper}>
                    <label className={styles.label} htmlFor="sort-control">Sort by:</label>
                    <select
                        id="sort-control"
                        className={styles.select}
                        onChange={(e) => onSortChange(e.target.value)}
                        aria-label="Sort products"
                    >
                        <option value="name">Name (A-Z)</option>
                        <option value="date_desc">Newest First</option>
                        <option value="date_asc">Oldest First</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
