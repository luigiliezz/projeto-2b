
import "./globals.css";
import Header from "@/componensts/Header";


export const metadata = {
  title: "Taeyeon",
  description: "Conheça a história da main vocal do Girl's Generation",
  charset: "UTF-8",
  author:"Luiz Antônio",
  keywords:"HTML,CSS,JavaScript,React,Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
