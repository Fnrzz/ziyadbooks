import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <form className="w-full">
      <FieldGroup>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" name="email" placeholder="Email" />
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input type="password" name="password" placeholder="Password" />
        </Field>

        <Field>
          <Button size="lg" className="rounded-full" type="submit">
            Login
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
