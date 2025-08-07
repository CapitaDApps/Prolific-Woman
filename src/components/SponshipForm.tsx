"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bank: z.string({
    message: "Please select a bank to display.",
  }),
  email: z.string().email(),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export function SponshipForm() {
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
        data-aos-duration="500"
        data-aos-anchor-placement="top-bottom"
        style={{
          background:
            " linear-gradient(180deg, #c4c4c4 0%, #ebebeb 100%)",
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 border border-[#CCCCCC] rounded-3xl p-2 max-w-md w-full md:w-[65%] z-30"
      >
        <div className="flex items-center gap-2 w-full">
          <FormField
            control={form.control}
            name="name"
          
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-white w-full sofia-light py-2 text-black/80 text-xs rounded-xl border border-[#CCCCCC]"
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
            name="bank"
            render={({ field }) => (
              <FormItem className="!w-full ">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full">
                    <SelectTrigger className="bg-white max-w-[300px] !w-full sofia-light py-2 text-black/80  rounded-xl border border-[#CCCCCC]">
                      <SelectValue className="!text-lg"  placeholder="Bank" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className=" cursor-pointer">
                    <SelectItem className="cursor-pointer hover:!bg-black/80 hover:!text-white transition-all duration-300" value="2017354167">2017354167</SelectItem >
                    <SelectItem className="cursor-pointer hover:!bg-black/80 hover:!text-white transition-all duration-300" value="2328816367">2328816367</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="bg-white sofia-light w-full py-2 text-black/80 text-xs rounded-xl border border-[#CCCCCC]"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="resize-none h-[50px] bg-white sofia-light py-2 text-black/80 text-xs rounded-xl border border-[#CCCCCC]"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full hover:bg-[#404040]/80 cursor-pointer rounded-full bg-[#404040] text-white text-xs "
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
