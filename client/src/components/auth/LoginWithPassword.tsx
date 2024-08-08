import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { useLoginMutation } from "../../api/mutations/useLoginMutation";
import { LoginFormSchema, LoginInfo } from "../../lib/types";
import { createFormDataFromObject } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { LoadingButton } from "../ui/loadingButton";
import { Alert } from "@mui/material";
import FieldAlert from "../FieldAlert";

export default function LoginWithPassword() {
  const location = useLocation();
  const state = location.state as { email: string };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>({
    defaultValues: {
      email: state?.email,
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const {
    mutation: { mutate, isPending },
    errorMessage,
  } = useLoginMutation();

  const onSubmit = (data: LoginInfo) => {
    mutate(createFormDataFromObject(data));
  };

  return (
    <div className="grid w-full relative place-items-center h-screen bg-blue-100">
      <Card className="w-[500px] border-none outline-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-4xl text-center">Sign in</CardTitle>
          <CardDescription className="text-base text-center">
            Sign in and start taking notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Input
                className="border-none"
                {...register("email")}
                type="email"
                placeholder="Email"
                autoComplete="true"
                name="email"
              />
              {errors.email && (
                <FieldAlert
                  severity="error"
                  message={errors.email.message}
                  className="mt-1"
                />
              )}
            </div>
            <div>
              <Input
                className="border-none"
                {...register("password")}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                name="password"
              />
              {errors.password && (
                <FieldAlert
                  severity="error"
                  message={errors.password.message}
                  className="mt-1"
                />
              )}
            </div>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {isPending ? (
              <LoadingButton />
            ) : (
              <Button className="w-full" disabled={false}>
                Submit
              </Button>
            )}
          </form>
          <div className="flex my-4 justify-between items-center">
            <div className="border-b w-full border-gray-400" />
            <p className="w-[20px] mx-4">or</p>
            <div className="border-b w-full border-gray-400" />
          </div>
          <div className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to={"/registration"} className="text-link">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
