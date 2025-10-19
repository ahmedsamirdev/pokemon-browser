import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "@/api";
import type {
  UseGetPokemonListParams,
  UseGetPokemonListReturn,
  PokemonListResponse,
} from "@/types";

function useGetPokemonList({
  limit = 20,
  offset = 0,
  enabled = true,
}: UseGetPokemonListParams = {}): UseGetPokemonListReturn {
  const queryKey = ["pokemon-list", { limit, offset }];

  const { data, refetch, isError, isLoading, isSuccess, error } = useQuery({
    queryKey,
    queryFn: () => fetchPokemonList(limit, offset),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    pokemonList: (data as PokemonListResponse) || null,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch,
  };
}

export default useGetPokemonList;
