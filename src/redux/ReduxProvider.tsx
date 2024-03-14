import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface TypePRovider {
  children: ReactNode;
}
const ReduxProvider: FC<TypePRovider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
