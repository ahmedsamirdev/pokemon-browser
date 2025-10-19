import { useQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "@/api";
import type {
  UseGetPokemonByIdParams,
  UseGetPokemonByIdReturn,
  Pokemon,
} from "@/types";

function useGetPokemonById({
  id,
  enabled = true,
}: UseGetPokemonByIdParams = {}): UseGetPokemonByIdReturn {
  const queryKey = ["pokemon-detail", { id }];

  const { data, refetch, isError, isLoading, isSuccess, error } = useQuery({
    queryKey,
    queryFn: () => fetchPokemonById(Number(id)),
    enabled: !!id && enabled,
    staleTime: 10 * 60 * 1000, // 10 minutes - Pokemon details don't change often
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

export default useGetPokemonById;
