import { Pokemon, PokemonStat } from "./pokemon";

// Props Types for Components
export interface PokemonCardProps {
  pokemon: Pokemon;
}

export interface BaseStatsProps {
  stats: PokemonStat[];
}

export interface PokemonListItemProps {
  id: number;
  name: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ViewToggleProps {
  currentView: "pagination" | "load-more";
  onViewChange: (view: "pagination" | "load-more") => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export interface SuspenseFallbackProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// Component State Types
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// View Types
export type ViewType = "pagination" | "load-more";
