import Button from "../lib/components/Button";
import Link from "next/link";
export default () => {
    return (
    <h1>
        Profile{" "}
        <Link href="/">
            <Button>Home</Button>
        </Link>
        <Button
            onClick={async () =>{
                const response = await fetch("/api/emojis");
                alert(await response.text());
            }}>get Enojis
        </Button>
    </h1>
    )
}