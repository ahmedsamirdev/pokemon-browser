// Pokemon API exports
export {
  fetchPokemonList,
  fetchPokemonById,
  fetchPokemonByName,
  extractPokemonIdFromUrl,
  getPokemonImageUrl,
  getPokemonSpriteUrl,
} from "./pokemon";

// Re-export types for convenience
export type {
  Pokemon,
  PokemonListResponse,
  PokemonListItem,
  PokemonType,
  PokemonSprites,
} from "@/types/pokemon";
