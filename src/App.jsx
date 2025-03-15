/* eslint-disable no-unused-vars */
import  { useContext, useEffect } from "react";
import Header from "./Componets/Header/Header";
import Carousel from "./Componets/caraousel/CarouselEffect";
import Category from "./Componets/category/Category";
import Product from "./Componets/Product/Product";
import Landing from "./Pages/Landing/Landing";
import Routing from "./Routing";
import { auth } from "./Utility/firebase";
import { DataContext } from "./Componets/DataProvider/DataProvidere";
import { Type } from "./Utility/action.type";
import { DataProvider } from "./Componets/DataProvider/DataProvidere";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  // console.log(user)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser, "from firebase");
      if (authUser) {
        console.log(authUser, "from in");
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        console.log(authUser, "from null");
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
