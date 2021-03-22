import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../../features/userSlice";
import "./Homepage.css";

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

const Homepage = () => {
  const dispatch = useDispatch();
  const signinResponse = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div
      className="landing__page"
      style={{ display: isSignedIn ? "none" : "" }}
    >
      {!isSignedIn ? (
        <div className="signin__message">
          <h2>
            {/* <span>l</span>
            <span>e</span>
            <span>t's</span>
            <span>‏‏‎ ‎</span>
            <span>g</span>
            <span>o</span>
            <span>o</span>
            <span>o</span>
            <span>o</span>
            <span>o</span> */}

            <span></span>
            <span>R</span>
            <span>o</span>
            <span>t</span>
            <span>t</span>
            <span>e</span>
            <span>n</span>
            <span>‏‏‎🥑‎</span>
            <span>A</span>
            <span>v</span>
            <span>o</span>
            <span>c</span>
            <span>a</span>
            <span>d</span>
            <span>o</span>
          </h2>

          <img
            src="assets/blogFront.gif"
            alt="blog"
            style={{ width: "40%", marginLeft: "auto", marginRight: "auto" }}
          />

          <h1>Rotten Avocado</h1>
          <p>
            The Ultimate source for searching new and awesome blogs 📝 on the
            entire internet
          </p>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="signin__btn"
              >
                <img
                  src="https://media0.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif"
                  style={{
                    width: "20%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    dispaly: "block",
                  }}
                  alt="google logo"
                />
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
