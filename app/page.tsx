"use client";
import Image from "next/image";

// components
import Dashboard from "@/components/dashboard";
import { Empty } from "@/components/empty";
import Navbar from "@/components/navbar";

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <div>
      <Navbar />
      <div className="pt-16 container mx-auto py-4 px-40">
        {loggedIn ? <Empty /> : <Dashboard />}
      </div>
    </div>
  );
}
