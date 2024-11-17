"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "../interface";
import { useState } from "react";
import { Lock, Mail, User } from "lucide-react";
const SignupForm = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const [disabledCondition, setSbmt] = useState(false);
  const submitHandler = () => {
    setSbmt(true);
    console.log(form.getValues());
    setSbmt(false);
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-center bg-gradient-red rounded-2xl w-full opacity-100 z-50"
        onSubmit={form.handleSubmit(submitHandler)}>
        <section className="flex flex-col pb-6 gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col mt-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    absoluteContentLeft={<Mail />}
                    disabled={disabledCondition}
                    placeholder="Enter your email..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col mt-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    absoluteContentLeft={<User />}
                    disabled={disabledCondition}
                    placeholder="Enter your username..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col mt-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    absoluteContentLeft={<Lock />}
                    disabled={disabledCondition}
                    placeholder="Enter your password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col mt-2">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    absoluteContentLeft={<Lock />}
                    disabled={disabledCondition}
                    placeholder="Confirm your password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <button className="w-full bg-navy p-2">
          <p className="text-semi text-sm">Register</p>
        </button>
      </form>
    </Form>
  );
};

export default SignupForm;
