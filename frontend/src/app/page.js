import ResponsiveAppBar from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <main>
        <div className="flex flex-col gap-4">
          <Link href="/user/buy">User Buy</Link>
          <Link href="/user/tickets">User Tickets</Link>
          <Link href="/user/ticket">User Ticket</Link>
          <Link href="/user/collections">User Collection</Link>
          <Link href="/merchant/mint">Merchant Mint</Link>
        </div>
      </main>
    </div>
  )
}
