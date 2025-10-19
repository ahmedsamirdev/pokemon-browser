import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Layout, SuspenseFallback } from "@/components";
import "./index.css";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("@/pages/HomePage"));
const PokemonDetailPage = lazy(() => import("@/pages/PokemonDetailPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Layout>
            <Suspense
              fallback={
                <SuspenseFallback message="Loading page..." size="lg" />
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
