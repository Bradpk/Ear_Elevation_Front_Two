import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from '../styles/home.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <div>
       <Navbar />
    <div className={styles.container}>
      <Image
        src="/ear.jpeg"
        alt="Logo"
        width={300}
        height={200}
        className={styles.image}
      />
    </div>
    </div>
  );
}