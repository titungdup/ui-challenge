import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="mb-4 font-bold">List of challenges</h2>
      <ul>
        <li>
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </main>
  );
}
