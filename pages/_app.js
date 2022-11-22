import "../styles/globals.css";
import AuthContext from "../context/auth";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
