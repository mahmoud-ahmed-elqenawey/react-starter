import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "@/components/ui/provider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
