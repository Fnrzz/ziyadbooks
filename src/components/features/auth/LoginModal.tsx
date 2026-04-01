import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex px-8 rounded-md border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center py-4 gap-4">
          <DialogTitle className="text-lg font-bold">Login</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Login to your account
          </DialogDescription>
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
