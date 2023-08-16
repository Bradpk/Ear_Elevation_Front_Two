import Link from "next/link";
import Navbar from "../components/navbar";
import logo from "../images/ear.jpeg";


export default function Page() {
    return <div>
          <Navbar />
      <h1>Home Page</h1>
      <img src={logo} alt="Logo" />
    </div>
  }