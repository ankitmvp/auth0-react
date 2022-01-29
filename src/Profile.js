import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently, getIdTokenClaims } = useAuth0();
  const [ token, setAccessToken ] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "ankitmvp.eu.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        setAccessToken(accessToken);

        const claims = await getIdTokenClaims();
        console.log(claims);

      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, getIdTokenClaims, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>Token</h3>
        {token}
        <h4>{}</h4>
      </div>
    )
  );
};

export default Profile;
