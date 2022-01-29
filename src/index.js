import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="ankitmvp.eu.auth0.com"
    clientId="UPRjtqYJsnaKPvRPwIwAwenaLi7Oebue"
    redirectUri={window.location.origin}
    audience="https://ankitmvp.eu.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
    useRefreshTokens={true}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);