import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonImageUrl } from "@/api";
import { PokemonListItemProps } from "@/types/props";

const PokemonListItem: React.FC<PokemonListItemProps> = ({ id, name }) => {
  const imageUrl = getPokemonImageUrl(id);
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/pokemon/${id}`} className="block">
      <div className="pokemon-card">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 mb-3 bg-gray-100 rounded-full">
            {!imageError ? (
              <img
                src={imageUrl}
                alt={name}
                className="object-contain size-20"
                loading="lazy"
                onError={() => {
                  setImageError(true);
                }}
              />
            ) : (
              <div className="inline-flex items-center justify-center text-2xl text-gray-400 size-20">
                ❓
              </div>
            )}
          </div>
          <h3
            className="mb-2 text-lg font-semibold text-gray-900 capitalize truncate"
            title={name}
          >
            {name}
          </h3>
          <p className="text-sm text-gray-600">
            #{id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonListItem;
