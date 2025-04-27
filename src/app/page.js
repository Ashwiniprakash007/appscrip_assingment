import Image from "next/image";
import styles from "./page.module.css";
import Products from "@/components/Products";
import Heading from "@/components/Heading";
import Navabar from "@/components/Navabar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    <Navabar/>
    <Heading/>
    <Products/>
    <Footer/>
    </div>
  );
}
