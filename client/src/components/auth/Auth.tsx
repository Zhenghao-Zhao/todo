import { zodResolver } from "@hookform/resolvers/zod";
import { Apple, Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import {
  LoginInfo,
  LoginInfoSchema,
  RegistrationInfo,
  RegistrationInfoSchema,
} from "../../lib/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { useLoginMutation } from "../../api/mutations/useLoginMutation";
import useRegisterMutation from "../../api/mutations/useRegisterMutation";
import { createFormDataFromObject } from "../../lib/utils";

export default function Auth() {
  const location = useLocation();
  return <>{location.pathname === "/login" ? <LogIn /> : <Registration />}</>;
}

function LogIn() {
  const { register, setValue, getValues, handleSubmit, watch } =
    useForm<LoginInfo>({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(LoginInfoSchema),
    });

  const { mutate } = useLoginMutation();

  const onSubmit = (data: LoginInfo) => {
    console.log("Submited login request");
    mutate(data);
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
            />
            <Input
              className="border-none"
              {...register("password")}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
            />
            <Button className="w-full">Submit</Button>
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

function Registration() {
  const { register, handleSubmit } = useForm<RegistrationInfo>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(RegistrationInfoSchema),
  });

  const { mutate } = useRegisterMutation();

  const onSubmit = (data: RegistrationInfo) => {
    console.log("Submited registration request");
    mutate(createFormDataFromObject(data));
  };

  return (
    <div className="grid grid-cols-1 w-full h-screen">
      <div className="grid place-items-center col-span-1 bg-blue-100">
        <Card className="w-[500px] border-none outline-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-4xl text-center">Sign up</CardTitle>
            <CardDescription className="text-base text-center">
              Sign up for a brand new Todo app experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                className="border-none"
                {...register("firstName")}
                placeholder="First name"
                name="firstName"
              />
              <Input
                className="border-none"
                {...register("lastName")}
                placeholder="Last name"
                name="lastName"
              />
              <Input
                className="border-none"
                {...register("email")}
                type="email"
                placeholder="Email"
                name="email"
              />
              <Input
                className="border-none"
                {...register("password")}
                type="password"
                placeholder="Password"
                name="password"
              />
              <Button className="w-full">Submit</Button>
            </form>
            <div className="mt-4">
              Already have an account?{" "}
              <Link to={"/login"} className="text-link">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* <div className="hidden lg:grid place-items-center bg-blue-400"> */}
      {/*   <div className="font-mono"> */}
      {/*     <h1 className="text-5xl font-extrabold text-yellow-300"> */}
      {/*       Welcome to Todo app */}
      {/*     </h1> */}
      {/*     <p className="text-2xl mt-4">Learning, done right!</p> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className="col-span-1 bg-registration bg-cover bg-center bg-no-repeat h-screen" /> */}
    </div>
  );
}
