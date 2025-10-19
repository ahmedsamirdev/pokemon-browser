import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "@/api";
import type { PokemonListResponse } from "@/types";

interface UseGetPokemonListInfiniteParams {
  limit?: number;
  enabled?: boolean;
}

interface UseGetPokemonListInfiniteReturn {
  allPokemon: PokemonListResponse["results"];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

function useGetPokemonListInfinite({
  limit = 20,
  enabled = true,
}: UseGetPokemonListInfiniteParams = {}): UseGetPokemonListInfiniteReturn {
  const queryKey = ["pokemon-list-infinite", { limit }];

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchPokemonList(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage: PokemonListResponse) => {
      // Extract offset from the next URL if it exists
      if (lastPage.next) {
        try {
          const nextUrl = new URL(lastPage.next);
          const nextOffset = nextUrl.searchParams.get("offset");
          return nextOffset ? parseInt(nextOffset, 10) : undefined;
        } catch {
          return undefined;
        }
      }
      return undefined;
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  // Flatten all pages into a single array
  const allPokemon = data?.pages.flatMap((page) => page.results) ?? [];

  return {
    allPokemon,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  };
}

export default useGetPokemonListInfinite;
