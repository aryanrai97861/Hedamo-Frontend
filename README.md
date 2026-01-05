# HEDAMO - Product Disclosure Interface

A production-quality frontend implementation demonstrating institutional product disclosure management. This interface emphasizes the distinction between disclosure and verification systems, with careful attention to language that reinforces producer responsibility for declared information.

## Project Overview

This is a Next.js application built with TypeScript and CSS Modules, showcasing a professional, institutional-grade user interface for managing product disclosures. The system operates on a "disclosure over verification" principle where producers declare information about their products, but the platform itself does not verify or certify that information.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features Implemented

### Product List View
- **Display**: Shows product name, category, producer, status badge, and timestamp
- **Search**: Real-time filtering by product name or producer
- **Filters**: Category and status filtering with clear visual feedback
- **Sort**: Alphabetical (A-Z) and chronological (newest/oldest) sorting
- **Design**: Refined card layout with subtle hover states and smooth transitions

### Product Detail View
- **Disclosure Summary**: "Declared by" producer, submission date, evidence count
- **Version History**: Minimum 2 versions showing disclosure evolution over time
- **Disclaimer**: Prominent notice that information is producer-declared, not verified
- **Responsive Layout**: Two-column design on desktop, stacks on mobile

### Interaction States
- **Loading States**: Skeleton screens during data fetch (1.5s simulated delay)
- **Empty States**: Helpful messaging when filters return no results
- **Smooth Transitions**: 200ms transitions for state changes (within 150-250ms requirement)
- **Keyboard Navigation**: Full Tab navigation with Enter/Space activation for cards

## Technical Implementation

### Framework & Tools
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **CSS Modules** for scoped styling

### Data Structure
Mock data generator creates products with:
- 5 core attributes (id, name, category, producer, status)
- Timestamps and evidence counts
- Version history with at least 2 versions per product
- Randomized but realistic data distribution

### Design System
- **Spacing Scale**: 4px base (4, 8, 12, 16, 24, 32, 48, 64px)
- **Color Palette**: Neutral grays with institutional blue accent
- **Typography**: Inter font family with clear hierarchy
- **Status Colors**: Muted for Draft, moderate for Submitted, stronger for Published

## Language & Messaging Philosophy

This implementation strictly adheres to "disclosure over verification" principles:

### ✅ Producer Responsibility Language Used
- "Declared by [Producer]"
- "Producer-declared information"
- "Information provided by"
- "Disclosure History"
- "Evidence attached" (not "proof")

### ❌ Authority Language Avoided
- No "Certified" or "Verified"
- No "Approved" or "Validated"
- No "Confirmed" or "Endorsed"
- No "Guaranteed"

Every label, button, and help text reinforces that producers make claims and the system presents them transparently—without institutional validation.

## Key Implementation Decisions

### Assumptions
1. **Data Source**: Mock data generator simulates backend API with realistic delay
2. **Product IDs**: Numeric IDs starting from `prod-1000`
3. **Version History**: All products have minimum 2 versions
4. **Status Workflow**: Draft → Submitted → Published progression
5. **Categories**: Financial products (funds, ETFs, trusts, assets, futures)

### Visual Design Choices
- **Institutional Aesthetic**: Calm, professional, trust-conveying
- **Minimal Decoration**: No heavy shadows or loud colors
- **Consistent Spacing**: Strict adherence to 4px-based scale
- **Subtle Interactions**: Hover/focus states are perceptible but not dramatic

### Accessibility
- Semantic HTML with proper heading hierarchy
- ARIA labels for interactive controls
- Keyboard navigation with visible focus states
- Role attributes for complex components

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system variables, base styles
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Product list page (client component)
│   └── product/[id]/
│       └── page.tsx          # Product detail page (server component)
├── components/
│   ├── FilterBar.tsx         # Search, filter, and sort controls
│   ├── Header.tsx            # Application header
│   ├── ProductCard.tsx       # Product preview card
│   ├── ProductCardSkeleton.tsx  # Loading state skeleton
│   ├── ProductList.tsx       # Grid layout and empty states
│   └── VersionHistory.tsx    # Timeline of disclosure versions
└── lib/
    └── mockData.ts           # Mock data generator and types
```

## Browser Compatibility

Optimized for modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties, CSS Grid, and modern JavaScript features.

## Future Enhancements

- Backend API integration
- User authentication and authorization
- Real-time search with debouncing
- Advanced filtering (date ranges, evidence types)
- Export functionality (PDF, CSV)
- Audit trail and activity logging

---

**Note**: This is a demonstration project for the HEDAMO technical assignment, showcasing frontend development craft, visual design sensibility, and attention to institutional requirements.
