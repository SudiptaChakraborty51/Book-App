import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { BookProvider } from "./contexts/BookContext";
import { UserProvider } from "./contexts/UserContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <BookProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </BookProvider>
    </Router>
  </StrictMode>
);
