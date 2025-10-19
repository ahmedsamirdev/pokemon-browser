import type { Pokemon, PokemonListResponse } from "./pokemon";

// Hook Parameter Types
export interface UseGetPokemonListParams {
  limit?: number;
  offset?: number;
  enabled?: boolean;
}

export interface UseGetPokemonByIdParams {
  id?: number | string;
  enabled?: boolean;
}

export interface UseGetPokemonByNameParams {
  name?: string;
  enabled?: boolean;
}

// Hook Return Types
export interface UseGetPokemonListReturn {
  pokemonList: PokemonListResponse | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  refetch: () => void;
}

export interface UseGetPokemonByIdReturn {
  pokemon: Pokemon | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  refetch: () => void;
}

export interface UseGetPokemonByNameReturn {
  pokemon: Pokemon | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  refetch: () => void;
}
