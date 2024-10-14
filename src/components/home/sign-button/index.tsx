import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignButtonProps {
  logged: boolean;
}

const SignButton = ({logged, ...otherProps }: SignButtonProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">{logged ? "Sign-out" : "Sign-in"}</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Sign-in to your account or{" "}
						<a href="/" className="text-blue-500">
							create a new account
						</a>
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Input
							id="email"
							type="email"
							defaultValue={""}
							placeholder="Email"
							className="col-span-4"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Input
							id="password"
							type="password"
							defaultValue={""}
							placeholder="Password"
							className="col-span-4"
						/>
					</div>
				</div>
				<DialogFooter>
					<div className="flex items-center">
						<Button type="submit" variant={"outline"}>Sign-In</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default SignButton;
