import React from "react";
import { useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { selectSignedIn } from "../../features/userSlice";

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

const Homepage = () => {
  const signinResponse = (response) => {
    console.log(response);
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div
      className="landing__page"
      style={{ display: isSignedIn ? "none" : "" }}
    >
      {!isSignedIn ? (
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
                SignIn with Google
              </button>
            )}
            onSuccess={signinResponse}
            onFailure={signinResponse}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
