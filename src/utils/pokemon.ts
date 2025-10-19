/**
 * Get the CSS class name for a Pokémon type
 * @param typeName - The Pokémon type name (e.g., 'fire', 'water')
 * @returns string - CSS class name for styling
 */
export const getTypeColor = (typeName: string): string => {
  return `type-${typeName}`;
};

/**
 * Get the background color for a Pokémon type badge
 * @param typeName - The Pokémon type name (e.g., 'fire', 'water')
 * @returns string - Hex color code for the type
 */
export const getTypeBackgroundColor = (typeName: string): string => {
  const typeColors: Record<string, string> = {
    normal: "#6B7280",
    fire: "#EF4444",
    water: "#3B82F6",
    electric: "#F59E0B",
    grass: "#10B981",
    ice: "#06B6D4",
    fighting: "#B91C1C",
    poison: "#8B5CF6",
    ground: "#D97706",
    flying: "#6366F1",
    psychic: "#EC4899",
    bug: "#84CC16",
    rock: "#92400E",
    ghost: "#7C3AED",
    dragon: "#4F46E5",
    dark: "#374151",
    steel: "#9CA3AF",
    fairy: "#F472B6",
  };
  return typeColors[typeName] || "#6B7280";
};

/**
 * Format Pokémon ID with leading zeros
 * @param id - Pokémon ID number
 * @param digits - Number of digits to pad to (default: 3)
 * @returns string - Formatted ID with leading zeros
 */
export const formatPokemonId = (id: number, digits: number = 3): string => {
  return `#${id.toString().padStart(digits, "0")}`;
};

/**
 * Convert Pokémon weight from hectograms to kilograms
 * @param weight - Weight in hectograms
 * @returns string - Weight formatted in kilograms
 */
export const formatWeight = (weight: number): string => {
  return `${(weight / 10).toFixed(1)} kg`;
};

/**
 * Convert Pokémon height from decimeters to meters
 * @param height - Height in decimeters
 * @returns string - Height formatted in meters
 */
export const formatHeight = (height: number): string => {
  return `${(height / 10).toFixed(1)} m`;
};

/**
 * Get Pokémon type effectiveness (simplified version)
 * @param attackType - The attacking type
 * @param defenseType - The defending type
 * @returns number - Effectiveness multiplier (0.5, 1, 2)
 */
export const getTypeEffectiveness = (
  attackType: string,
  defenseType: string
): number => {
  // This is a simplified version - in reality, type effectiveness is complex
  const effectivenessMap: Record<string, Record<string, number>> = {
    fire: { grass: 2, water: 0.5, fire: 0.5 },
    water: { fire: 2, grass: 0.5, water: 0.5 },
    grass: { water: 2, fire: 0.5, grass: 0.5 },
    electric: { water: 2, grass: 0.5, electric: 0.5 },
  };

  return effectivenessMap[attackType]?.[defenseType] || 1;
};
