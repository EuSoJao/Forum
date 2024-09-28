import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function home() {
	return (
		<>
			<h1>boa noite</h1>
			<Button asChild>
				<a href="/home/login">Sign-up</a>
			</Button>
		</>
	);
}
