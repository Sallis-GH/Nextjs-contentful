import Head from "next/head";
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/card.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;