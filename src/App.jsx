import Line from "./components/Line";
import Bar from "./components/Bar";
import StackedBarChart from "./components/StackBar";
const App = () => {
  return (
    <div className=" w-full h-screen flex  flex-col gap-4 justify-center items-center">
      <div className=" w-1/4 text-center ">
        <Line />
        <Bar />
        <StackedBarChart />
      </div>
    </div>
  );
};

export default App;
