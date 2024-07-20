import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import FeedbackForm from '@/components/FeedbackForm'
import BugReportForm from '@/components/BugReportForm'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const BugReport = () => {
  return (
    <article className="mt-40 max-w-[800px] lg:ml-[20%] md:mr-auto m-5 max-sm:mx-0">
      <div className="flex flex-col gap-2 mb-16">
        <div className="text-5xl font-bold">
          Send Feedback
        </div>
        <div className="font-medium text-secondary text-lg max-w-[550px]">
          I always appreciate constructive criticism of my work. If you have any feedback you&apos;d like to share, a bug to report, or just want to say hi, here is the place to do it!
        </div>

      </div>
      <Tabs defaultValue="feedback" className="w-[350px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="bugreport">Bug Report</TabsTrigger>
        </TabsList>
        <TabsContent value="feedback">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Send Feedback</CardTitle>
              <CardDescription>Tell me what you think. Complaints welcome. Compliments more welcome.</CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackForm />
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="bugreport">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Report a Bug</CardTitle>
              <CardDescription>Notice anything wrong with this website? Report it here for my eternal gratitude.</CardDescription>
            </CardHeader>
            <CardContent>
              <BugReportForm />
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </article>
  )
}

export default BugReport