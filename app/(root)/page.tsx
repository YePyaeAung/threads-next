import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <main>
            <UserButton />
            <h1>Threads</h1>
        </main>
    );
}
