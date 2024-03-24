import Link from "next/link";

export default function TopButton() {
    return (
        <>
            <Link href="/">
                <button>Home Page</button>
            </Link>
            <Link href="/test">
                <button>test Page</button>
            </Link>
            <Link href="/login">
                <button>login Page</button>
            </Link>
        </>
    );
}
