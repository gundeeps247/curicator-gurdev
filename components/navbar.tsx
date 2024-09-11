// app/navbar.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Import Button from ShadCN

const Navbar = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <nav className="fixed  w-screen bg-gray-800 text-white p-4 z-100">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Curricula</h1>
        <div>
          {isAuthenticated ? (
            <>
              <span className="mr-4">Welcome, {session?.user?.name}</span>
              <Button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              onClick={() => signIn()}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
