import "@/styles/globals.css";
import reducer, { initialState } from "../Context/reducer";
import { StateProvider } from "@/Context/StateProvider";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}
