"use client";
import Header from "@/components/Header";
import "./globals.css";
import "@/styles/custom.scss";
import { Poppins } from "next/font/google";
import Footer from "@/components/FooterV2";

// import { store } from './app/store'
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--primary-font",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        {/* Adding Google Tag manager Script 
            Google analytycs will be configured within GTM
        */}
        <Script
          strategy="afterInteractive"
          id="GTMContainer"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVRG4Q4');`,
          }}
        ></Script>
        {/* End of Tag manager Script */}
      </head>
      <body className="!font-poppins text-black">
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVRG4Q4"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
