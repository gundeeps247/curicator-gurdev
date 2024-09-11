"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
const formSchema = z.object({
  key575: z.string().min(1).max(255),
  key623: z.string().min(1).max(255),
  key472: z.date(),
  key766: z.string().min(1).max(255),
  key412: z.string().min(1).max(255),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      key575: "string",
      key623: "string",
      key766: "string",
      key412: "string",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="key575"
          render={({ field }) => (
            <FormItem>
              <FormLabel>organization vision</FormLabel>
              <FormControl>
                <Input placeholder="Placeholder" {...field} />
              </FormControl>
              <FormDescription>Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key623"
          render={({ field }) => (
            <FormItem>
              <FormLabel>organization mision</FormLabel>
              <FormControl>
                <Input placeholder="Placeholder" {...field} />
              </FormControl>
              <FormDescription>Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key472"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>year</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key766"
          render={({ field }) => (
            <FormItem>
              <FormLabel>department vision</FormLabel>
              <FormControl>
                <Input placeholder="Placeholder" {...field} />
              </FormControl>
              <FormDescription>Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key412"
          render={({ field }) => (
            <FormItem>
              <FormLabel>department mision</FormLabel>
              <FormControl>
                <Input placeholder="Placeholder" {...field} />
              </FormControl>
              <FormDescription>Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
