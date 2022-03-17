import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwindcss.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { rtkstore } from "./reduxStore/rtkStore";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={rtkstore}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById(`root`),
);
