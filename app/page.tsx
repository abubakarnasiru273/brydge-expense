import { Empty } from "@/components/empty";
import Navbar from "@/components/navbar";
import Image from "next/image";



export default function Home() {
  return (
    <div className="container mx-auto px-20 py-10" >
     <Navbar />
     
     <Empty />
     
    </div>
  );
}
