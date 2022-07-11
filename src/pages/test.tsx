import { RootState } from "../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/modules/calendar";

const TestPage = () => {
  const { value } = useSelector((state: RootState) => state.calendarReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
};

export default TestPage;
