// import { RootState } from "../store/rootReducer";
// import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header";
import Aside from "../components/aside";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <button></button>
        <Aside />
        <main>kjb</main>
      </div>
    </div>
  );
};

export default HomePage;
