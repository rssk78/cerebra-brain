import "./global.css"; 
import Link from "next/link"; 
export const metadata = { title: "Cerebra Brain", description: "Cerebra Brain - Your resource for cognitive neuroscience.", }; 
export default function RootLayout({ children }) 
{ return ( <html lang="en"> <body> <header> <nav> <ul className="nav"> <li>  <Link href="/">Home</Link></li> 
  <li><Link href="/benefits">Benefits</Link></li> 
  <li><Link href="/ingredients">Ingredients</Link></li> <li>
  <Link href="/faq">FAQ</Link></li> <li><Link href="/how-to-use">How To Use</Link></li> <li><Link href="/dosage">Dosage</Link></li> 
  <li><Link href="/side-effects">Safety</Link></li> </ul> </nav> </header>
  <main>{children}</main>
