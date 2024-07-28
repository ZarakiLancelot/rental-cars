"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formSchema } from "./FormAddCar.form";

export function FormAddCar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      hp: "",
      transmission: "",
      seats: "",
      photo: "",
      price: "",
      type: "",
      mileage: "",
      fuel: "",
      year: "",
      isPublish: false,
    },
  });

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Car&apos;s name</FormLabel>
                <FormControl>
                  <Input placeholder="Toyota RAV4" {...field}></Input>
                </FormControl>
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hp"
            render={({field}) => (
              <FormItem>
                <FormLabel>Horse Power (HP)</FormLabel>
                <FormControl>
                  <Input placeholder="219HP" type="number" {...field}></Input>
                </FormControl>
                <FormMessage>{form.formState.errors.hp?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="transmission"
            render={({field}) => (
              <FormItem>
                <FormLabel>Type of Transmission</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Manual"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage>{form.formState.errors.transmission?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seats"
            render={({field}) => (
              <FormItem>
                <FormLabel>Number of Seats</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="4"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage>{form.formState.errors.seats?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fuel"
            render={({field}) => (
              <FormItem>
                <FormLabel>Engine</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Engine"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gas">Gas</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage>{form.formState.errors.fuel?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({field}) => (
              <FormItem>
                <FormLabel>Type of Car</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sedan"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="micro">Micro</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="hatchback">Hatchback</SelectItem>
                    <SelectItem value="universal">Universal</SelectItem>
                    <SelectItem value="liftback">Liftback</SelectItem>
                    <SelectItem value="coupe">Coupe</SelectItem>
                    <SelectItem value="cabriolet">Cabriolet</SelectItem>
                    <SelectItem value="roadster">Roadster</SelectItem>
                    <SelectItem value="targa">Targa</SelectItem>
                    <SelectItem value="limousine">Limousine</SelectItem>
                    <SelectItem value="muscle-car">Muscle Car</SelectItem>
                    <SelectItem value="sport-car">Sport Car</SelectItem>
                    <SelectItem value="super-car">Super Car</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="crossover">Crossover</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="minivan">Minivan</SelectItem>
                    <SelectItem value="minibus">Minibus</SelectItem>
                    <SelectItem value="campervan">Campervan</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage>{form.formState.errors.type?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}