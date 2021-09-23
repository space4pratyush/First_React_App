import "./App.css";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 203.03,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Health Insurance",
      amount: 473.3,
      date: new Date(2012, 2, 19),
    },
    {
      id: "e3",
      title: "General Insurance",
      amount: 94.45,
      date: new Date(2013, 3, 13),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
