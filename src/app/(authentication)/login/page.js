import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function LoginPage() {

  const handleChange = (e) => {
      e.prevautDefault
      const [name, value ] = e.target

  }

  return (
      <Card className="w-[24rem]">
        <CardHeader>
          <CardTitle>Connection to Lehannet</CardTitle>
          <CardDescription>
            Enter your identifiant, to connect to your workspace
          </CardDescription>

        </CardHeader>
        <CardContent>
          <form className="block space-y-4">
            <div className="block space-y-2">
              <Label htmlFor="email" className="mx-2">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.fr"
                required
              />
            </div>
          
            <div className="block space-y-2">
              <Label htmlFor="password" className="mx-2">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder=""
                required
              />
            </div>
            
          </form>
          
          
        </CardContent>
        <CardFooter className="flex flex-col">
            <Button className="w-full bg-zinc-700 cursor-pointer">Connect</Button>
          </CardFooter>
      </Card>
  )
}
