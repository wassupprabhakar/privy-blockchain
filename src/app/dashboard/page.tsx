'use client'
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import { usePrivy, useWallets } from "@privy-io/react-auth";

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
import { GetBalance } from "./_wagmi";
import Balance from "./_component/Balance";


export default function Home() {
  const {
    ready,
    authenticated,
    user,
    logout } = usePrivy();
  const {wallets} = useWallets();
  const [showBalance, setShowBalance] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (ready) {
      if (!authenticated) {
        redirect("/");
      } else {
        console.log("user -> ", user?.linkedAccounts?.[0]);
        setUserName((user?.linkedAccounts?.[0] as { name: string })?.name || "");
      }
    }
  }, [ready, authenticated, user]);

  
  return (
    <div className="p-8 flex justify-center items-center h-screen ">
      <Card className="">
        <CardHeader>
          <CardTitle>Welcome {userName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>User Id :  <b>{user?.id}</b></p>
            <ul>
              
              <li>Wallet: {user?.wallet ? user?.wallet.address : 'None'}</li>
            </ul>
          </div>
          {user &&
            <div>
              <Button variant="secondary" onClick={()=>setShowBalance(!showBalance)}>Show Balance</Button>
            </div>
          }
          
          {showBalance && user?.wallet?.address &&
            <Balance />
          }
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={logout}>Logout</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
