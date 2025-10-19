# Constants Organization

## 📁 **Constants File Structure:**

```
src/constants/
└── index.ts            # All application constants
```

## 🎯 **Constants Categories:**

### **1. API Configuration (`API_CONFIG`)**

- `BASE_URL`: PokéAPI base URL
- `DEFAULT_LIMIT`: Default number of items per request
- `DEFAULT_OFFSET`: Default offset for pagination
- `POKEMON_IMAGE_BASE_URL`: Base URL for Pokémon artwork
- `POKEMON_SPRITE_BASE_URL`: Base URL for Pokémon sprites

### **2. Pagination Configuration (`PAGINATION_CONFIG`)**

- `ITEMS_PER_PAGE`: Number of Pokémon per page (20)
- `MAX_VISIBLE_PAGES`: Maximum visible page numbers in pagination
- `PAGINATION_DELTA`: Delta for pagination calculation

### **3. React Query Configuration (`QUERY_CONFIG`)**

- `STALE_TIME`: Cache stale times for different data types
- `GC_TIME`: Garbage collection times for cache cleanup

### **4. UI Configuration (`UI_CONFIG`)**

- `GRID_COLUMNS`: Responsive grid column configurations
- `SPINNER_SIZES`: Loading spinner size classes
- `POKEMON_ID_DIGITS`: Number of digits for Pokémon ID formatting

### **5. Pokemon Type Colors (`POKEMON_TYPE_COLORS`)**

- Mapping of Pokémon types to Tailwind CSS color classes

### **6. Error Messages (`ERROR_MESSAGES`)**

- Centralized error messages for different scenarios

### **7. Loading Messages (`LOADING_MESSAGES`)**

- Centralized loading messages for different states

## ✅ **Benefits:**

1. **Centralized Configuration**: All constants in one place
2. **Easy Maintenance**: Change values in one location
3. **Type Safety**: TypeScript support with `as const`
4. **No Magic Numbers**: Descriptive names for all values
5. **Consistency**: Same values used across the application
6. **Environment Flexibility**: Easy to switch between dev/prod configs

## 📖 **Usage Examples:**

```typescript
import { PAGINATION_CONFIG, API_CONFIG, ERROR_MESSAGES } from "../constants";

// Instead of magic numbers
const itemsPerPage = PAGINATION_CONFIG.ITEMS_PER_PAGE; // 20
const apiUrl = API_CONFIG.BASE_URL; // 'https://pokeapi.co/api/v2'

// Instead of hardcoded strings
const errorMessage = ERROR_MESSAGES.POKEMON_LIST; // 'Failed to load Pokémon data...'
```
