import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Command, CommandShortcut } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";
import {
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "cmdk";

export default function Navbar() {
	return (
		<div className="flex w-full flex-col bg-muted/30">
			<div className="flex flex-row m-2 gap-2 justify-between">
				<Command className="rounded-lg border shadow-md md:min-w-[450px]">
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>
								{/* <Calendar className="mr-2 h-4 w-4" /> */}
								<span>Calendar</span>
							</CommandItem>
							<CommandItem>
								{/* <Smile className="mr-2 h-4 w-4" /> */}
								<span>Search Emoji</span>
							</CommandItem>
							<CommandItem disabled>
								{/* <Calculator className="mr-2 h-4 w-4" /> */}
								<span>Calculator</span>
							</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>
								{/* <User className="mr-2 h-4 w-4" /> */}
								<span>Profile</span>
								<CommandShortcut>⌘P</CommandShortcut>
							</CommandItem>
							<CommandItem>
								{/* <CreditCard className="mr-2 h-4 w-4" /> */}
								<span>Billing</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
							<CommandItem>
								{/* <Settings className="mr-2 h-4 w-4" /> */}
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>

				<Input placeholder="Search" className="w-3/6" />

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Avatar>
								<AvatarImage
									src="https://github.com/eusojao.png"
									alt="@eusojao"
								/>
								<AvatarFallback>
									<Icon icon="mdi:account" />
								</AvatarFallback>
							</Avatar>
						</TooltipTrigger>
						<TooltipContent>
							<p>EuSoJao</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
}
