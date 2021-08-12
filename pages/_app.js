import "tailwindcss/tailwind.css";
import "../styles/utils/_global.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
