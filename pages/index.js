import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Plant Care Companion</h1>
      <Link href="/overview">Go to Plants Overview</Link>
    </div>
  );
}
