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

  useEffect(() => {
    // Firebase authentication listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Clean up the listener when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Routing /> {/* Keep this */}
    </div>
  );
}

export default App;
