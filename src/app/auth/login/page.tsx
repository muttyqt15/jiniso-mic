import Daddy from "@/components/layout/daddy";
import Image from "next/image";
import React from "react";
import LoginForm from "./form";
const LoginPage = () => {
  return (
    <Daddy className="flex-row px-0">
      <div className="w-3/5 flex relative">
        <Image
          src="/Sign In Sign Up.png"
          alt="authentication"
          fill
          objectFit="cover"
        />
      </div>
      <div className="w-2/5 flex flex-col min-h-screen justify-center p-8">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-xs my-4">
          If you don&apos;t have an account registered, you can{" "}
          <a className="font-semibold text-navy" href="/auth/sign-up">
            register here.
          </a>
        </p>
        <LoginForm />
      </div>
    </Daddy>
  );
};

export default LoginPage;
