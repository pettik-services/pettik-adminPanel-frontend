import '../styles/globals.css'
import { SnackbarProvider } from "notistack";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return  <>
  <SnackbarProvider
 maxSnack={1}
 anchorOrigin={{
   vertical: "bottom",
   horizontal: "center",
 }}
 preventDuplicate
>
 <Component {...pageProps} />
</SnackbarProvider>
</>
}

export default MyApp
