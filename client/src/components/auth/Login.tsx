import { useForm } from "react-hook-form";
import { EmailForm, EmailFormSchema } from "../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormDataFromObject } from "../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Apple, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { LoadingButton } from "../ui/loadingButton";
import { useEffect, useState } from "react";
import { useEmailMutation } from "../../api/mutations/useEmailMutation";

export default function Login() {
  const { register, handleSubmit } = useForm<EmailForm>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(EmailFormSchema),
  });
  const {
    mutation: { data, mutate, isPending },
    errorMessage,
  } = useEmailMutation();
  const [ok, setOk] = useState(true);

  useEffect(() => {
    if (data && !data.exists) {
      setOk(false);
    }
  }, [data]);

  const onSubmit = (data: EmailForm) => {
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
            <Input
              className="border-none"
              {...register("email")}
              type="email"
              placeholder="Email"
              autoComplete="true"
              name="email"
              onChange={() => setOk(true)}
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {isPending ? (
              <LoadingButton />
            ) : (
              <Button className="w-full" disabled={!ok}>
                Next
              </Button>
            )}
          </form>
          <div className="flex my-4 justify-between items-center">
            <div className="border-b w-full border-gray-400" />
            <p className="w-[20px] mx-4">or</p>
            <div className="border-b w-full border-gray-400" />
          </div>
          <div className="mt-4 flex justify-between">
            <Button>
              <Google className="mr-2" />
              Continue with Google
            </Button>
            <Button>
              <Apple className="mr-2" />
              Continue with Apple
            </Button>
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
