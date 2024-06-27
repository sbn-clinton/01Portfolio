"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonMoving } from "./ui/moving-border";
import { FaComment } from "react-icons/fa6";

export function MovingBorder() {
  return (
    <ButtonMoving suppressHydrationWarning>
      <Card className="w-full max-w-2xl h-full bg-black border-none ">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-semibold text-sky-600">
            Contact Us
          </CardTitle>
          <CardDescription className="text-center font-normal text-sky-300">
            Say your mind
            <br />
            Help us serve you better
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-sky-800">
            Comment <FaComment className="text-lg text-white ml-2" />{" "}
          </Button>
        </CardFooter>
      </Card>
    </ButtonMoving>
  );
}
