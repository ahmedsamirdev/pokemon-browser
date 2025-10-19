import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { PokemonCardProps } from "@/types";
import { getPokemonImageUrl } from "@/api";
import { getTypeColor } from "@/utils";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const imageUrl = getPokemonImageUrl(pokemon.id);

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="block">
      <div className="pokemon-card">
        <div className="text-center">
          <img
            src={imageUrl}
            alt={pokemon.name}
            className="object-contain mx-auto mb-3 size-24"
            loading="lazy"
          />
          <div className="text-4xl text-gray-400">?</div>
          <h3
            className="mb-2 text-lg font-semibold text-gray-900 capitalize truncate"
            title={pokemon.name}
          >
            {pokemon.name}
          </h3>
          <div className="flex flex-wrap justify-center space-x-1">
            {pokemon.types.map((type) => (
              <span
                key={type.slot}
                className={clsx("type-badge", getTypeColor(type.type.name))}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
