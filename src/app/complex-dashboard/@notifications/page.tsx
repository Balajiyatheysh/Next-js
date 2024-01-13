import Card from "@/components/card";
import Link from "next/link";

export default function UserNotifications (){
  return(
    <>
    <Card> UserNotifications 
      <Link href='/complex-dashboard/archived'>Archived</Link>
      </Card>
    </>
  )
}