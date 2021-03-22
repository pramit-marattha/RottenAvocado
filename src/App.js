import BlogPosts from "./Components/BlogPosts/BlogPosts";
import Homepage from "./Components/Homepage";
import NavigationBar from "./Components/NavigationBar";
import { selectSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";

import "./styles/App.css";

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <NavigationBar />
      <Homepage />
      {isSignedIn && <BlogPosts />}
    </div>
  );
}

export default App;
