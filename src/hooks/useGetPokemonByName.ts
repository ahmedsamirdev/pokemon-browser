import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByName } from "@/api";
import type { Pokemon } from "@/types/pokemon";

interface UseGetPokemonByNameParams {
  name?: string;
  enabled?: boolean;
}

function useGetPokemonByName({
  name,
  enabled = true,
}: UseGetPokemonByNameParams = {}) {
  const queryKey = ["pokemon-by-name", { name }];

  const { data, refetch, isError, isLoading, isSuccess, error } = useQuery({
    queryKey,
    queryFn: () => fetchPokemonByName(name!),
    enabled: !!name && enabled,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });

  return {
    pokemon: (data as Pokemon) || null,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch,
  };
}

export default useGetPokemonByName;
