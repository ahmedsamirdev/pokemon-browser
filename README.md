# Pokémon Browser

A responsive Pokémon browser built with React, TypeScript, and Tailwind CSS. This application allows users to browse Pokémon with two different viewing modes: pagination and load more functionality.

## Features

- **Two View Modes**: Switch between pagination and infinite scroll ("Load More") views
- **Pokémon Detail Pages**: Comprehensive Pokémon information with high-quality artwork
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Advanced Loading States**: Suspense boundaries, loading spinners, and error boundaries
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Modern UI**: Clean, modern design with Tailwind CSS and smooth animations
- **SEO Optimized**: React Helmet for dynamic meta tags and page titles
- **Code Splitting**: Lazy-loaded pages for optimal performance
- **Error Handling**: Graceful error states with retry functionality
- **Base Stats Visualization**: Interactive stat bars with animations
- **Pokémon Type Styling**: Color-coded type badges with custom styling

## Tech Stack

- **React 18** - Modern React with hooks and Suspense
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework with custom Pokemon styling
- **React Router v6** - Client-side routing with future flags
- **TanStack Query v5** - Advanced data fetching, caching, and infinite queries
- **React Suspense** - Declarative loading state management
- **React Helmet Async** - Dynamic meta tags and SEO optimization
- **Error Boundaries** - Graceful error handling and recovery
- **Vite** - Lightning-fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **clsx** - Conditional CSS class utility

## Architecture Decisions

### Why React Query Instead of React Server Components (RSC)?

This project uses **TanStack Query (React Query)** for data fetching instead of React Server Components (RSC) for the following reasons:

#### **React Query Benefits for This Use Case:**

- ✅ **Client-side caching** - Instant responses for pagination and interactions
- ✅ **Background refetching** - Keeps data fresh without user intervention
- ✅ **Optimistic updates** - Smooth user experience during data mutations
- ✅ **Retry logic** - Automatic retry on failed requests
- ✅ **Loading states** - Granular control over loading indicators
- ✅ **Perfect for SPAs** - Ideal for interactive applications with user-driven navigation

#### **Why Not RSC:**

- ❌ **RSC requires Next.js** - This project uses Vite for faster development
- ❌ **Server-side rendering** - Not needed for this client-side Pokémon browser
- ❌ **Less interactive** - RSC is better for content-heavy sites, not interactive apps
- ❌ **Complex setup** - Would require significant architectural changes

#### **Result:**

The combination of **React Query + Suspense + Error Boundaries** provides a superior user experience for this interactive Pokémon browser, with instant responses to user interactions and robust error handling.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pokemon-browser
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript support

### Development Setup

The project uses:

- **pnpm** as the package manager (recommended)
- **TypeScript** with strict configuration
- **ESLint** for code quality
- **Path aliases** (`@/` for `src/`) for clean imports
- **Hot reload** for instant development feedback

## Project Structure

```
src/
├── api/                # API layer with organized functions
│   ├── pokemon.ts      # Pokémon API functions
│   └── index.ts        # API exports
├── hooks/              # Custom React Query hooks
│   ├── useGetPokemonList.ts       # Paginated Pokemon list hook
│   ├── useGetPokemonListInfinite.ts # Infinite scroll Pokemon list hook
│   ├── useGetPokemonById.ts       # Individual Pokemon by ID hook
│   ├── useGetPokemonByName.ts     # Pokemon search by name hook
│   └── index.ts                   # Hooks exports
├── utils/              # Utility functions
│   ├── pokemon.ts      # Pokémon-specific utilities
│   ├── common.ts       # Common utility functions
│   └── index.ts        # Utils exports
├── constants/          # Application constants
│   └── index.ts        # All constants and configuration
├── components/          # Reusable UI components
│   ├── Layout.tsx              # Main layout wrapper with navigation
│   ├── PokemonCard.tsx         # Individual Pokémon card component
│   ├── PokemonListItem.tsx     # Optimized list item for grid display
│   ├── Pagination.tsx          # Pagination controls with page numbers
│   ├── ViewToggle.tsx          # Toggle between pagination/infinite scroll
│   ├── BaseStats.tsx           # Interactive base stats visualization
│   ├── LoadingSpinner.tsx      # Custom loading spinner component
│   ├── ErrorMessage.tsx        # Error display with retry functionality
│   ├── ErrorBoundary.tsx       # Error boundary wrapper component
│   ├── SuspenseFallback.tsx    # Suspense fallback component
│   └── index.ts                # Component exports
├── pages/              # Page components
│   ├── HomePage.tsx    # Main Pokémon listing page
│   └── PokemonDetailPage.tsx
├── types/              # TypeScript type definitions
│   ├── pokemon.ts      # Pokémon domain types
│   ├── props.ts        # Component props types
│   ├── hook-types.ts   # Hook type definitions
│   ├── api.ts          # API function types
│   └── index.ts        # Centralized type exports
└── App.tsx             # Main app component
```

## API Integration

This application uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data:

- **List Pokémon**: `GET /api/v2/pokemon?limit=10&offset=0`
- **Pokémon Details**: `GET /api/v2/pokemon/{id}`

### API Structure

The API layer is organized in the `src/api/` folder following best practices:

- **`pokemon.ts`**: Contains all Pokémon-related API functions
- **`index.ts`**: Centralized exports for clean imports
- **Named functions**: Each endpoint has a descriptive function name (e.g., `fetchPokemonList`, `fetchPokemonById`)
- **TypeScript support**: Full type safety with proper return types
- **Error handling**: Consistent error handling across all API calls
- **useQuery integration**: Functions are designed to work seamlessly with React Query

### Custom React Query Hooks

The application uses custom React Query hooks for better code organization and reusability:

- **`useGetPokemonList`**: Fetches paginated Pokémon lists with caching and error handling
- **`useGetPokemonListInfinite`**: Handles infinite scroll functionality with automatic pagination
- **`useGetPokemonById`**: Fetches individual Pokémon details by ID
- **`useGetPokemonByName`**: Fetches Pokémon details by name (for search functionality)

#### Usage Example:

```typescript
// In a component
const { pokemon, isLoading, isError, refetch } = useGetPokemonById({
  id: 1,
  enabled: true,
});

// For pagination
const { pokemonList, isLoading, isError } = useGetPokemonList({
  limit: 20,
  offset: 0,
  enabled: true,
});

// For infinite scroll
const { allPokemon, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useGetPokemonListInfinite({
    limit: 20,
    enabled: true,
  });
```

#### Benefits:

- ✅ **Consistent API**: Same interface across all data fetching
- ✅ **Built-in caching**: Automatic caching with configurable stale times
- ✅ **Error handling**: Consistent error states and retry logic
- ✅ **Type safety**: Full TypeScript support with proper return types
- ✅ **Reusability**: Easy to use across different components

### Utility Functions

The application includes organized utility functions for common operations:

#### **Pokemon Utilities (`src/utils/pokemon.ts`):**

- **`getTypeColor(typeName)`**: Get CSS class for Pokémon type styling
- **`formatPokemonId(id, digits)`**: Format ID with leading zeros
- **`formatWeight(weight)`**: Convert weight from hectograms to kilograms
- **`formatHeight(height)`**: Convert height from decimeters to meters
- **`capitalize(str)`**: Capitalize first letter of string
- **`getTypeEffectiveness(attackType, defenseType)`**: Calculate type effectiveness

#### **Common Utilities (`src/utils/common.ts`):**

- **`debounce(func, delay)`**: Debounce function calls
- **`throttle(func, delay)`**: Throttle function calls
- **`isEmpty(value)`**: Check if value is empty
- **`generateId(length)`**: Generate random ID string
- **`formatNumber(num)`**: Format number with commas
- **`deepClone(obj)`**: Deep clone objects

#### **Usage Example:**

```typescript
import { getTypeColor, formatPokemonId, formatWeight } from "../utils";

// In a component
const typeClass = getTypeColor("fire"); // 'type-fire'
const formattedId = formatPokemonId(25); // '#025'
const weight = formatWeight(60); // '6.0 kg'
```

#### **Benefits:**

- ✅ **DRY Principle**: No code duplication
- ✅ **Reusability**: Use across multiple components
- ✅ **Testability**: Easy to unit test utility functions
- ✅ **Maintainability**: Centralized logic for easy updates
- ✅ **Type Safety**: Full TypeScript support

### Constants and Configuration

The application uses a centralized constants file for better maintainability:

#### **Configuration Categories:**

- **`API_CONFIG`**: API URLs, default limits, and endpoints
- **`PAGINATION_CONFIG`**: Pagination settings and limits
- **`QUERY_CONFIG`**: React Query cache and stale time settings
- **`UI_CONFIG`**: Grid columns, spinner sizes, and UI constants
- **`POKEMON_TYPE_COLORS`**: Type color mappings for styling
- **`ERROR_MESSAGES`**: Centralized error messages
- **`LOADING_MESSAGES`**: Centralized loading messages

#### **Usage Example:**

```typescript
import { PAGINATION_CONFIG, API_CONFIG, ERROR_MESSAGES } from "../constants";

// Use constants instead of magic numbers
const limit = PAGINATION_CONFIG.ITEMS_PER_PAGE; // 20
const apiUrl = API_CONFIG.BASE_URL; // 'https://pokeapi.co/api/v2'
const errorMsg = ERROR_MESSAGES.POKEMON_LIST; // 'Failed to load Pokémon data...'
```

#### **Benefits:**

- ✅ **Centralized Configuration**: All constants in one place
- ✅ **Easy Maintenance**: Change values in one location
- ✅ **Type Safety**: TypeScript support with `as const`
- ✅ **No Magic Numbers**: Descriptive names for all values
- ✅ **Consistency**: Same values used across the application

## Features Overview

### Pagination View

- Displays Pokémon in a responsive grid layout (1-5 columns based on screen size)
- Includes pagination controls with page numbers and navigation
- Shows 20 Pokémon per page with smooth transitions
- Auto-scrolls to top when changing pages
- Page information display (e.g., "Page 2 of 50")

### Infinite Scroll View

- Displays Pokémon in the same responsive grid layout
- "Load More" button to append next batch of Pokémon
- Maintains all previously loaded Pokémon in memory
- Shows loading state during fetch operations
- Displays total count of loaded Pokémon

### Detail Page

- **Comprehensive Information**: Complete Pokémon data with high-quality artwork
- **Physical Stats**: Height and weight with proper unit conversion
- **Type Information**: Color-coded type badges with custom styling
- **Base Stats Visualization**: Interactive stat bars with animations
- **Abilities**: Complete list of Pokémon abilities
- **Base Experience**: XP display with custom styling
- **SEO Optimization**: Dynamic meta tags and page titles
- **Error Handling**: Graceful fallback for missing images
- **Navigation**: Easy return to main list

### Advanced Features

- **Code Splitting**: Lazy-loaded pages for optimal performance
- **Suspense Boundaries**: Declarative loading states
- **Error Boundaries**: Graceful error recovery
- **Responsive Design**: Optimized for all device sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized with React Query caching and background updates

## Configuration

### Vite Configuration

The project uses Vite with the following optimizations:

- **Path Aliases**: `@/` maps to `src/` for clean imports
- **React Plugin**: Fast refresh and HMR
- **TypeScript**: Built-in TypeScript support
- **Build Optimization**: Code splitting and asset optimization

### Tailwind Configuration

Custom Tailwind setup includes:

- **Pokemon Type Classes**: Safelist for dynamic type styling
- **Custom Colors**: Pokemon-themed color palette
- **Responsive Grid**: Optimized grid system for Pokemon cards
- **Animation Support**: Smooth transitions and hover effects

### TypeScript Configuration

Strict TypeScript configuration with:

- **Path Mapping**: Alias support for clean imports
- **Strict Mode**: Enhanced type checking
- **Modern Target**: ES2020+ features
- **React JSX**: Automatic JSX runtime

## Deployment

The application is configured for easy deployment on modern hosting platforms.

### Vercel Deployment

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Environment Variables

No environment variables required - the app uses public PokéAPI endpoints.

### Performance Considerations

- **Code Splitting**: Automatic code splitting with lazy loading
- **Image Optimization**: Optimized Pokemon images from official sources
- **Caching**: React Query provides intelligent caching
- **Bundle Size**: Optimized bundle with tree shaking

## Development Guidelines

### Code Style

- **TypeScript**: Use strict typing throughout the application
- **ESLint**: Follow the configured ESLint rules
- **Import Organization**: Use path aliases (`@/`) for clean imports
- **Component Structure**: Functional components with hooks
- **Error Handling**: Always handle loading and error states

### Adding New Features

1. **API Integration**: Add new API functions to `src/api/`
2. **Hooks**: Create custom hooks in `src/hooks/`
3. **Components**: Build reusable components in `src/components/`
4. **Types**: Define TypeScript types in `src/types/`
5. **Constants**: Add configuration to `src/constants/`

### Testing Strategy

- **Unit Tests**: Test utility functions and custom hooks
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows
- **Performance Tests**: Monitor bundle size and loading times

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the development guidelines
4. Add tests if applicable
5. Run linting (`npm run lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Submit a pull request

### Pull Request Guidelines

- Provide a clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed
- Follow the existing code style

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **PokéAPI** - For providing the comprehensive Pokemon data
- **React Team** - For the amazing React ecosystem
- **TanStack** - For the excellent React Query library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
