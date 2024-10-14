import SignButton from "@/components/home/sign-button";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
	return (
		<>
			<div className="h-screen flex bg-gradient-to-r from-[#0060d6] to-[#0eabcf]">
				<div className="w-full flex p-6 h-10 w-full justify-center bg-black justify-between items-center">
					<h1 className="text-xl">Bem-vindo!</h1>
						<SignButton logged={false} />
				</div>
			</div>
		</>
	);
}
