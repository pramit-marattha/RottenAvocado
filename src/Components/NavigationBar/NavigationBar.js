import React, { useState } from "react";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setUserData,
  setSearchInput,
} from "../../features/userSlice";
import "./NavigationBar.css";
import { Avatar } from "@material-ui/core";

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

const NavigationBar = () => {
  const [searchInputValue, setSearchInputValue] = useState("Avocado");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const signout = (resposne) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
  const signinResponse = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(searchInputValue));
  };
  return (
    <div className="navigationbar__component">
      🥑 <h1 className="navigationbar__head"> Rotten Avocado</h1>
      {isSignedIn && (
        <div className="nav__search">
          <input
            className="search__keyword"
            placeholder="search"
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
          <button className="search__btn" onClick={handleClick}>
            🔎 Search
          </button>
        </div>
      )}
      {isSignedIn ? (
        <div className="navigation__avatar">
          <Avatar
            className="avatar__logo"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          {console.log("avataaaaaarr", userData?.imageUrl)}
          <h1 className="user_signin_info">
            {userData?.givenName} {userData?.familyName}
          </h1>
          <GoogleLogout
            clientId={clientId}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="signout__btn"
              >
                Sign-Out
              </button>
            )}
            onLogoutSuccess={signout}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="signin__nav__btn"
            >
              <img
                src="https://media0.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif"
                style={{
                  width: "70%",
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
      )}
    </div>
  );
};

export default NavigationBar;
