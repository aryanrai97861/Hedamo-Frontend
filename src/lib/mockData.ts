export type ProductStatus = 'Draft' | 'Submitted' | 'Published';

export interface ProductVersion {
  id: string;
  versionNumber: string;
  editorName: string;
  timestamp: string;
  changeSummary: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  producerName: string;
  status: ProductStatus;
  submittedAt: string;
  evidenceCount: number;
  description: string;
  versions: ProductVersion[];
}

const CATEGORIES = ['Equity Fund', 'Bond ETF', 'Real Estate Trust', 'Crypto Asset', 'Commodity Future'];
const PRODUCERS = ['Alpha Capital', 'Beta Investments', 'Gamma Corp', 'Delta Financial', 'Epsilon Asset Mgmt'];

export const generateMockProducts = (count: number = 25): Product[] => {
  return Array.from({ length: count }, (_, i) => {
    const status: ProductStatus = i % 5 === 0 ? 'Draft' : i % 3 === 0 ? 'Submitted' : 'Published';
    const category = CATEGORIES[i % CATEGORIES.length];
    const producer = PRODUCERS[i % PRODUCERS.length];
    
    // Generate versions
    const versions: ProductVersion[] = [
      {
        id: `v${i}-2`,
        versionNumber: '1.2',
        editorName: 'System Admin',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 1)).toISOString(),
        changeSummary: 'Updated risk disclosure metrics'
      },
      {
        id: `v${i}-1`,
        versionNumber: '1.0',
        editorName: producer,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i + 10)).toISOString(),
        changeSummary: 'Initial disclosure submission'
      }
    ];

    return {
      id: `prod-${i + 1000}`,
      name: `${producer} ${category} ${2024 + i}`,
      category,
      producerName: producer,
      status,
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * i).toISOString(),
      evidenceCount: Math.floor(Math.random() * 15) + 1,
      description: `This product is an investment vehicle focused on ${category.toLowerCase()} markets. The information provided here has been declared by ${producer} and represents their statements about this product. Hedamo does not verify or certify the accuracy of producer-declared information.`,
      versions
    };
  });
};
