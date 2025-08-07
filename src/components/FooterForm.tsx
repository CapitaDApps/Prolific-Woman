"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export function FooterForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
         data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-bottom"
        style={{
          background:
            " linear-gradient(180deg, rgba(71, 71, 71, 0.5) 0%, rgba(153, 153, 153, 0.5) 100%)",
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 border border-[#7A7A7A] rounded-3xl p-2 max-w-md z-30"
      >
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-[#434343] w-full sofia-light py-2 text-[#CCCCCC] text-xs rounded-xl border border-[#7A7A7A]"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-[#434343] sofia-light w-full py-2 text-[#CCCCCC] text-xs rounded-xl border border-[#7A7A7A]"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none h-[180px] bg-[#434343] sofia-light py-2 text-[#CCCCCC] text-xs rounded-xl border border-[#7A7A7A]"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full hover:bg-white/85 cursor-pointer rounded-full bg-white text-[#212121] text-xs "
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
