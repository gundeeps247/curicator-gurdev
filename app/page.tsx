import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"; // Import redirect function
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";
import { User } from "./user";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // If no session is found, redirect to sign-in page
  if (!session) {
    redirect("/api/auth/signin"); // Redirect to sign-in page
    return null; // Prevent further rendering
  }
  redirect("/dashboard");
  return <main></main>;
}
