// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://pokeapi.co/api/v2",
  DEFAULT_LIMIT: 20,
  DEFAULT_OFFSET: 0,
  POKEMON_IMAGE_BASE_URL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork",
  POKEMON_SPRITE_BASE_URL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
} as const;

// Pagination Configuration
export const PAGINATION_CONFIG = {
  ITEMS_PER_PAGE: 20,
  MAX_VISIBLE_PAGES: 5,
  PAGINATION_DELTA: 2,
} as const;

// React Query Configuration
export const QUERY_CONFIG = {
  STALE_TIME: {
    POKEMON_LIST: 5 * 60 * 1000, // 5 minutes
    POKEMON_DETAIL: 10 * 60 * 1000, // 10 minutes
  },
  GC_TIME: {
    POKEMON_LIST: 10 * 60 * 1000, // 10 minutes
    POKEMON_DETAIL: 15 * 60 * 1000, // 15 minutes
  },
} as const;

// UI Configuration
export const UI_CONFIG = {
  GRID_COLUMNS: {
    MOBILE: 1,
    SM: 2,
    MD: 3,
    LG: 4,
    XL: 5,
  },
  SPINNER_SIZES: {
    SM: "h-4 w-4",
    MD: "h-8 w-8",
    LG: "h-12 w-12",
  },
  POKEMON_ID_DIGITS: 3,
} as const;

// Pokemon Type Colors (matching CSS classes)
export const POKEMON_TYPE_COLORS = {
  normal: "bg-gray-500",
  fire: "bg-red-500",
  water: "bg-black",
  electric: "bg-yellow-500",
  grass: "bg-green-500",
  ice: "bg-cyan-400",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-green-400",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-800",
  steel: "bg-gray-400",
  fairy: "bg-pink-300",
} as const;

// Animation Delays
export const ANIMATION_CONFIG = {
  BOUNCE_DELAYS: {
    FIRST: "0s",
    SECOND: "0.1s",
    THIRD: "0.2s",
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  POKEMON_LIST: "Failed to load Pokémon data. Please try again.",
  POKEMON_DETAIL: "Failed to load Pokémon details. Please try again.",
  GENERAL: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection and try again.",
} as const;

// Loading Messages
export const LOADING_MESSAGES = {
  POKEMON_LIST: "Loading more Pokémon...",
  POKEMON_DETAIL: "Loading Pokémon details...",
  POKEMON_CARDS: "Loading Pokémon cards...",
  PAGE: "Loading page...",
} as const;

// Base Stats Configuration
export const BASE_STATS_CONFIG = [
  { name: "HP" },
  { name: "Attack" },
  { name: "Defense" },
  { name: "Sp. Attack" },
  { name: "Sp. Defense" },
  { name: "Speed" },
] as const;
