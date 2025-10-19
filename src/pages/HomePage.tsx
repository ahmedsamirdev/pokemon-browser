import React, { useState, Suspense } from "react";
import { Zap } from "lucide-react";
import { useGetPokemonList, useGetPokemonListInfinite } from "@/hooks";
import { extractPokemonIdFromUrl } from "@/api";
import {
  PAGINATION_CONFIG,
  ERROR_MESSAGES,
  LOADING_MESSAGES,
} from "@/constants";
import {
  PokemonListItem,
  ViewToggle,
  Pagination,
  LoadingSpinner,
  ErrorMessage,
  SuspenseFallback,
} from "@/components";
import { ViewType } from "@/types";

const HomePage: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>("pagination");
  const [currentPage, setCurrentPage] = useState(1);

  // Queries
  const paginationQuery = useGetPokemonList({
    limit: PAGINATION_CONFIG.ITEMS_PER_PAGE,
    offset: (currentPage - 1) * PAGINATION_CONFIG.ITEMS_PER_PAGE,
    enabled: currentView === "pagination",
  });

  const infiniteQuery = useGetPokemonListInfinite({
    limit: PAGINATION_CONFIG.ITEMS_PER_PAGE,
    enabled: currentView === "load-more",
  });

  // Handlers
  const handleLoadMore = () =>
    currentView === "load-more" &&
    infiniteQuery.hasNextPage &&
    infiniteQuery.fetchNextPage();
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    if (view === "load-more") setCurrentPage(1);
  };

  // Data and state
  const pokemonDetails = React.useMemo(() => {
    const pokemonList =
      currentView === "pagination"
        ? paginationQuery.pokemonList?.results
        : infiniteQuery.allPokemon;
    return (
      pokemonList?.map((pokemon) => ({
        id: extractPokemonIdFromUrl(pokemon.url),
        name: pokemon.name,
        url: pokemon.url,
      })) || []
    );
  }, [
    currentView,
    paginationQuery.pokemonList?.results,
    infiniteQuery.allPokemon,
  ]);

  const isLoading =
    currentView === "pagination"
      ? paginationQuery.isLoading
      : infiniteQuery.isLoading;
  const error =
    currentView === "pagination" ? paginationQuery.error : infiniteQuery.error;

  if (error) {
    return (
      <ErrorMessage
        message={ERROR_MESSAGES.POKEMON_LIST}
        onRetry={() =>
          currentView === "pagination"
            ? paginationQuery.refetch()
            : infiniteQuery.refetch()
        }
      />
    );
  }

  const totalPages = Math.ceil(
    (paginationQuery.pokemonList?.count || 0) / PAGINATION_CONFIG.ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="flex items-center justify-center gap-3 mb-4 text-4xl font-bold text-gray-900">
          <Zap className="text-yellow-500 size-10" />
          Pokédex
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Discover and explore Pokémon with page controls.
        </p>
      </div>

      <ViewToggle currentView={currentView} onViewChange={handleViewChange} />

      {isLoading ? (
        <LoadingSpinner text={LOADING_MESSAGES.POKEMON_LIST} />
      ) : (
        <>
          <Suspense
            fallback={
              <SuspenseFallback
                message={LOADING_MESSAGES.POKEMON_CARDS}
                size="md"
              />
            }
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {pokemonDetails.map((pokemon) => (
                <PokemonListItem
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                />
              ))}
            </div>
          </Suspense>

          {currentView === "pagination" && totalPages > 1 && (
            <>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
              {/* Page information */}
              <div className="mt-4 text-sm text-center text-gray-800">
                Page {currentPage} of {totalPages} ({pokemonDetails.length}{" "}
                Pokémon shown)
              </div>
            </>
          )}

          {currentView === "load-more" && (
            <div className="mt-8 text-center">
              <div className="mb-4 text-sm text-gray-600">
                {pokemonDetails.length} Pokémon loaded
                {infiniteQuery.hasNextPage && " • More available."}
              </div>
              <button
                onClick={handleLoadMore}
                disabled={
                  !infiniteQuery.hasNextPage || infiniteQuery.isFetchingNextPage
                }
                className="px-6 py-3 font-medium text-white transition-colors bg-black rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {infiniteQuery.isFetchingNextPage
                  ? "Loading..."
                  : infiniteQuery.hasNextPage
                  ? "Load More Pokémon"
                  : "No More Pokémon"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
