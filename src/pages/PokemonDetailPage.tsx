import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Weight, Ruler, Zap } from "lucide-react";
import { useGetPokemonById } from "@/hooks";
import { getPokemonImageUrl } from "@/api";
import { formatPokemonId, getTypeBackgroundColor } from "@/utils";
import { LoadingSpinner, ErrorMessage, BaseStats } from "@/components";

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imageError, setImageError] = useState(false);

  const { pokemon, isLoading, error, refetch } = useGetPokemonById({
    id: Number(id),
    enabled: !!id,
  });

  if (isLoading) {
    return <LoadingSpinner text="Loading Pokémon details..." />;
  }

  if (error || !pokemon) {
    return (
      <ErrorMessage
        message="Failed to load Pokémon details. Please try again."
        onRetry={refetch}
      />
    );
  }

  const imageUrl = getPokemonImageUrl(pokemon.id);
  return (
    <>
      <Helmet>
        <title>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} -
          Pokémon Browser
        </title>
        <meta
          name="description"
          content={`Details about ${pokemon.name}, a ${pokemon.types[0].type.name} type Pokémon`}
        />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-black transition-all duration-200 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <ArrowLeft className="size-4" />
          <span>Back to List</span>
        </Link>

        {/* Header with gradient background */}
        <div
          className="rounded-t-md"
          style={{
            background: "linear-gradient(to right, #AA55F1, #E9499F)",
          }}
        >
          <div className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Zap className="text-white size-8" />
              <h1 className="text-4xl font-bold text-white capitalize">
                {pokemon.name}
              </h1>
            </div>
            <p className="text-lg text-white/90">
              {formatPokemonId(pokemon.id)}
            </p>
          </div>
        </div>

        <div className="overflow-hidden bg-white shadow-lg rounded-b-md">
          <div className="md:flex">
            {/* Image Section */}
            <div className="p-8 md:w-1/2">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-6 mx-auto bg-gray-100 rounded-full">
                  {!imageError ? (
                    <img
                      src={imageUrl}
                      alt={pokemon.name}
                      className="object-contain size-64"
                      onError={() => {
                        setImageError(true);
                      }}
                    />
                  ) : (
                    <div className="inline-flex items-center justify-center text-6xl text-gray-400 size-64">
                      ❓
                    </div>
                  )}
                </div>

                {/* Types under the image */}
                <div className="mt-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span
                      className="px-2 py-1 text-xs font-medium text-white capitalize rounded-full"
                      style={{
                        backgroundColor: getTypeBackgroundColor(
                          pokemon.types[0].type.name
                        ),
                      }}
                    >
                      {pokemon.types[0].type.name}
                    </span>
                  </div>
                </div>

                {/* Physical Stats under types */}
                <div className="mt-6">
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 text-center rounded-lg bg-gray-50">
                      <div className="flex items-center justify-center mb-2 space-x-2">
                        <Ruler className="text-gray-800 size-4" />
                        <p className="text-sm text-gray-800">Height</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-black">
                          {(pokemon.height / 10).toFixed(1)} m
                        </h2>
                      </div>
                    </div>
                    <div className="flex-1 p-4 text-center rounded-lg bg-gray-50">
                      <div className="flex items-center justify-center mb-2 space-x-2">
                        <Weight className="text-gray-800 size-4" />
                        <p className="text-sm text-gray-800">Weight</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-black">
                          {(pokemon.weight / 10).toFixed(1)} kg
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:w-1/2">
              <div className="space-y-6">
                {/* Base Stats */}
                <BaseStats stats={pokemon.stats} />

                {/* Abilities */}
                <div>
                  <h2 className="mb-3 text-xl font-bold text-gray-900">
                    Abilities
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {pokemon.abilities.map((ability) => (
                      <span
                        key={ability.slot}
                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                      >
                        {ability.ability.name.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Experience */}
                <div>
                  <h2 className="mb-3 text-xl font-bold text-gray-900">
                    Base Experience
                  </h2>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-[#AA55F1]">
                      {pokemon.base_experience} XP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailPage;
