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
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/config"
 
const getFormSchema = (provideEmail: boolean) => z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be max 50 characters."),
  email: provideEmail === true ? z.string().email("Must be a valid email address.") : z.string().optional(),
  feedback: z.string().min(2, "Feedback must be at least 2 characters."),
  experience: z.enum(["bad", "neutral", "good"], {required_error: "Please choose one."}),
})

const FeedbackForm = () => {
  const [provideEmail, setProvideEmail] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = getFormSchema(provideEmail)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(values)
    try {
      await addDoc(collection(db, "feedback"), {
        name: values.name,
        email: values.email,
        feedback: values.feedback,
        experience: values.experience,
      })
    } catch (error: any) {
      console.log(`Error submitting feedback: ${error.message}`)
    }
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) return (
    <div className="text-center mt-5">
      <h1 className="font-semibold text-lg">Feedback Submitted!</h1>
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
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback *</FormLabel>
              <FormControl>
                <Textarea placeholder="What would you like to say?" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How was your overall experience? *</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="bad" id="bad" className="peer sr-only" />
                    <Label
                      htmlFor="bad"
                      className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Bad
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="neutral" id="neutral" className="peer sr-only" />
                    <Label
                      htmlFor="neutral"
                      className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Neutral
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="good" id="good" className="peer sr-only" />
                    <Label
                      htmlFor="good"
                      className="cursor-pointer flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Good
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                
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

export default FeedbackForm