"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { Switch } from "./ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/config"
 
const getFormSchema = (provideEmail: boolean) => z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be max 50 characters."),
  email: provideEmail === true ? z.string().email("Must be a valid email address.") : z.string().optional(),
  type: z.enum(["typo", "ui", "misinformation", "reference", "link", "crash", "unexpected", "other"], {required_error: "Please choose a type."}),
  description: z.string().min(2, "Description must be at least 2 characters."),
  reproduction: z.string().min(2, "Reproduction must be at least 2 characters."),
  level: z.enum(["negligible", "moderate", "critical"], {required_error: "Please choose a priority."}),
})

const BugReportForm = () => {
  const [provideEmail, setProvideEmail] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = getFormSchema(provideEmail)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
      reproduction: "",
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(values)
    try {
      await addDoc(collection(db, "bugreport"), {
        name: values.name,
        email: values.email,
        description: values.description,
        reproduction: values.reproduction,
        type: values.type,
        level: values.level,
      })
    } catch (error: any) {
      console.log(`Error submitting bug report: ${error.message}`)
    }
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) return (
    <div className="text-center mt-5">
      <h1 className="font-semibold text-lg">Report Submitted!</h1>
      <p>Thank you for your service comrade.</p>
    </div>
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the nature of the problem? *</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the type of bug" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="typo">Typo</SelectItem>
                  <SelectItem value="ui">UI Bug</SelectItem>
                  <SelectItem value="misinformation">False or Outdated Information</SelectItem>
                  <SelectItem value="reference">Broken or Missing Reference</SelectItem>
                  <SelectItem value="link">Broken or Missing Link</SelectItem>
                  <SelectItem value="crash">Website Crash</SelectItem>
                  <SelectItem value="unexpected">Unexpected Behaviour</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description of Bug *</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe what went wrong" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reproduction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reproduction Steps *</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe how to reproduce the problem" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How serious is this bug? *</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="negligible" id="negligible" className="peer sr-only" />
                    <Label
                      htmlFor="negligible"
                      className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Negligible
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="moderate" id="moderate" className="peer sr-only" />
                    <Label
                      htmlFor="moderate"
                      className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Moderate
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="critical" id="critical" className="peer sr-only" />
                    <Label
                      htmlFor="critical"
                      className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Critical
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                {field.value === "negligible" 
                  ? "Minor issue that doesn't seriously affect user experience e.g. typo or visual bug."
                  : field.value === "moderate" 
                    ? "Degrades the user experience but doesn't completely break the website."
                    : field.value === "critical"
                      ? "Website is unusable unless this bug is fixed."
                      : ""
                }
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-center rounded-md border p-4 gap-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Provide Email
              </p>
              <p className="text-sm text-muted-foreground">
                Would you be happy to receive follow-up communication?
              </p>
            </div>
            <Switch checked={provideEmail === true} onCheckedChange={() => setProvideEmail(!provideEmail)} />
          </div>
          {provideEmail && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="example@cameronjack.me" {...field} />
                  </FormControl>
                  <FormDescription>
                    Optional. I may contact you to follow up on your feedback.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>



        <div className="flex gap-2 w-full justify-end">
          <Button onClick={() => form.reset()} variant="outline" disabled={isLoading}>
            {
              isLoading 
              ? <><Loader2 size={20} className="animate-spin" /> &nbsp;Loading...</>
              : "Reset"
            }
          </Button>
          <Button type="submit" disabled={isLoading}>
            {
              isLoading 
              ? <><Loader2 size={20} className="animate-spin" /> &nbsp;Loading...</>
              : "Submit"
            }
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default BugReportForm