import MainRoutes from "./components/route/MainRoutes";
import ReduxProvider from "./redux/ReduxProvider";

const App = () => {
  return (
    <>
      <ReduxProvider>
        <MainRoutes />
      </ReduxProvider>
    </>
  );
};

export default App;
