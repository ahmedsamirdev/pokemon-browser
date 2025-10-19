import type { Pokemon, PokemonListResponse } from './pokemon';

// API Response Types
export interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
}

// API Function Types
export type FetchPokemonList = (limit?: number, offset?: number) => Promise<PokemonListResponse>;
export type FetchPokemonById = (id: number) => Promise<Pokemon>;
export type FetchPokemonByName = (name: string) => Promise<Pokemon>;

// Utility Function Types
export type ExtractPokemonIdFromUrl = (url: string) => number;
export type GetPokemonImageUrl = (id: number) => string;
export type GetPokemonSpriteUrl = (id: number) => string;
