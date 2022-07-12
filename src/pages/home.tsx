// import { RootState } from "../store/rootReducer";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchDate } from "../store/modules/calendar";
// import { useEffect } from "react";
import Header from "../components/header";
import Aside from "../components/aside";

const HomePage = () => {
  //   const { year } = useSelector((state: RootState) => state.calendarReducer);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     let today = new Date();
  //     console.log(today);
  //     dispatch(fetchDate(today));
  //   }, []);

  return (
    <div>
      <Header />
      <Aside />
      <main></main>
    </div>
  );
};

export default HomePage;
