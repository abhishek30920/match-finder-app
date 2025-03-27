'use client'
import { Button } from "@/components/ui/button";
import { FaRegSmile } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter()
  return (
    <>
   
   <h1 className="text-3xl">hello</h1>
   <Button onClick={()=>router.push("/members")}  ><FaRegSmile size={20}> </FaRegSmile> Click me</Button>
    </>
  );
}
