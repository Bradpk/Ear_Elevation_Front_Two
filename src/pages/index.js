import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from "../styles/scale.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
    return <div>
          <Navbar />
      <h1>Home Page</h1>
      <Image
        src="/ear.jpeg"
        alt="Logo"
        width={300}
        height={200}
      />
    </div>
  }