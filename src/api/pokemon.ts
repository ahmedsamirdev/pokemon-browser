import { Pokemon, PokemonListResponse } from "@/types/pokemon";
import { API_CONFIG } from "@/constants";

/**
 * Fetch a paginated list of Pokémon
 * @param limit - Number of Pokémon to fetch
 * @param offset - Starting index for pagination
 * @returns Promise<PokemonListResponse>
 */
export const fetchPokemonList = async (
  limit: number = API_CONFIG.DEFAULT_LIMIT,
  offset: number = API_CONFIG.DEFAULT_OFFSET
): Promise<PokemonListResponse> => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon list: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Fetch detailed information for a specific Pokémon by ID
 * @param id - Pokémon ID
 * @returns Promise<Pokemon>
 */
export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}/pokemon/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon details: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Fetch detailed information for a specific Pokémon by name
 * @param name - Pokémon name
 * @returns Promise<Pokemon>
 */
export const fetchPokemonByName = async (name: string): Promise<Pokemon> => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}/pokemon/${name.toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon details: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Extract Pokémon ID from URL string
 * @param url - Pokémon API URL
 * @returns number - Extracted ID
 */
export const extractPokemonIdFromUrl = (url: string): number => {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? parseInt(matches[1], 10) : 0;
};

/**
 * Get the official artwork URL for a Pokémon
 * @param id - Pokémon ID
 * @returns string - Image URL
 */
export const getPokemonImageUrl = (id: number): string => {
  return `${API_CONFIG.POKEMON_IMAGE_BASE_URL}/${id}.png`;
};

/**
 * Get the sprite URL for a Pokémon
 * @param id - Pokémon ID
 * @returns string - Sprite URL
 */
export const getPokemonSpriteUrl = (id: number): string => {
  return `${API_CONFIG.POKEMON_SPRITE_BASE_URL}/${id}.png`;
};
