import Card from "@/components/card";
import Link from "next/link";

export default function DefaultUserRevenue (){
  return(
    <Card> UserRevenue 
      <Link href='/complex-dashboard/archived'>Archived</Link>
      </Card>
  )
}