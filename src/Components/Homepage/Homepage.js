import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

const Homepage = () => {
  const signinResponse = (response) => {
    console.log(response);
  };

  return (
    <div className="landing__page">
      <div className="signin__message">
        <h2>Login</h2>
        <h1>Hello there</h1>
        <p>Explore tons of awesome Tech blogs</p>
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="signin__btn"
            >
              SIGN UP with Google
            </button>
          )}
          onSuccess={signinResponse}
          onFailure={signinResponse}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Homepage;
