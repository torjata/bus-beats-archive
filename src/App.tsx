
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Artist from "./pages/Artist";
import AllPlaylists from "./pages/AllPlaylists";
import NotFound from "./pages/NotFound";
import Playlist from "./pages/Playlist";
import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";

const queryClient = new QueryClient();

// AnimatePresence wrapper component to access location
const AnimatedRoutes = () => {
  const location = useLocation();
  // เรียกใช้ Hook ตรงนี้เลย
  useScrollToTopOnRouteChange();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/playlists" element={<AllPlaylists />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
