import SignButton from "@/components/home/sign-button";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { Sidebar } from "@/components/common/mainSidebar";

export default function HomePage() {
	return (
		<>
			<div className="h-screen flex bg-zinc-800 flex-col">
				<div
					id="navbar"
					className="w-full flex p-6 h-10 w-full justify-center bg-zinc-950 justify-between items-center"
				>
					<h1 className="text-xl">Bem-vindo!</h1>
					<SignButton logged={false}/>
					<Sidebar>a</Sidebar>
				</div>
			</div>
		</>
	);
}
