import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Apply from "./pages/Apply";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <a
  href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20apply%20for%20a%20loan"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50
             flex h-14 w-14 items-center justify-center
             rounded-full bg-green-500
             shadow-xl
             hover:bg-green-600
             transition-all duration-300"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="white"
    className="h-7 w-7"
  >
    <path d="M19.11 17.33c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.55.57.65.21 1.25.18 1.72.11.52-.08 1.58-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.04 2.67c-7.38 0-13.37 5.99-13.37 13.37 0 2.35.61 4.64 1.78 6.65L2.67 29.33l6.83-1.78c1.95 1.06 4.14 1.62 6.54 1.62 7.38 0 13.37-5.99 13.37-13.37S23.42 2.67 16.04 2.67z"/>
  </svg>
</a>

      <BrowserRouter>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
