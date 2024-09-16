import Input from "@/components/common/Input";
import Navbar from "@/components/common/navbar";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Icon } from '@iconify/react';

export default function Home() {
	return (
		<>
			<div className="topNavbar">
				<Navbar />
			</div>
		</>
	);
}
