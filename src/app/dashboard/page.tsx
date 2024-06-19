'use client'
import { usePrivy } from "@privy-io/react-auth";
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


export default function Home() {
  const {
    ready,
    authenticated,
    user,
    logout } = usePrivy();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (ready) {
      if(!authenticated) {
        redirect("/");
      } else {
        console.log("user -> ", user?.linkedAccounts?.[0]);
        setUserName(user?.linkedAccounts?.[0]?.name || "");
      }
      
    }
  }, [ready, authenticated, user]);
  return (
    <div className="p-8 flex justify-center items-center h-screen ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome {userName}</CardTitle>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={logout}>Logout</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
