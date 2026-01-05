'use client';

import { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import ProductList from '@/components/ProductList';
import { generateMockProducts, Product } from '@/lib/mockData';
import styles from './page.module.css';

// Note: In a real app we would export metadata from a layout or server component
// Since this is a client component, we rely on the layout's title or move this to a wrapper.
// However, correctly, page.tsx should be a Server Component that renders a Client Component for the interactive parts.
// For this assignment, keeping it simple in one file is acceptable, but let's check if we can export metadata.
// Metadata cannot be exported from a Client Component. 
// I will keep the layout's title "HEDAMO - Disclosure System" which covers this.


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setProducts(generateMockProducts(24));
      setIsLoading(false);
    }, 1500); // 1.5s delay to show loading state

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.producerName.toLowerCase().includes(query)
      );
    }

    // Filter by Status
    if (statusFilter !== 'All') {
      result = result.filter(p => p.status === statusFilter);
    }

    // Filter by Category
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'date_desc') {
        return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
      } else if (sortBy === 'date_asc') {
        return new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
      }
      return 0;
    });

    return result;
  }, [products, searchQuery, statusFilter, categoryFilter, sortBy]);

  return (
    <main>
      <Header />
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Product Disclosures</h1>
          <p>View and manage producer-declared product information.</p>
        </div>

        <FilterBar
          onSearch={setSearchQuery}
          onStatusFilter={setStatusFilter}
          onCategoryFilter={setCategoryFilter}
          onSortChange={setSortBy}
        />

        <ProductList
          products={filteredProducts}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}
