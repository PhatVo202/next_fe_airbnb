"use client";

import { useState } from "react";
// import { DatePicker, Form, Input, message } from "antd";
import { userServ } from "@/services/api";
import { CalendarIcon, Eye, EyeOff, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { message } from "antd";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function RegisterPage() {

    const [showPassword, setShowPassword] = useState(false)
    const form = useForm()



    return (
        <div className="bg-[url(/images/airbnb-travel-bg.jpg)] bg-no-repeat bg-cover min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h1 className="text-3xl font-bold mb-4 text-[#FF385C] text-center">Đăng ký</h1>
                <Form {...form}>
                    <form className="space-y-4">
                        {/* Username */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} placeholder="Nguyen Van A" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" {...field} placeholder="you@example.com" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                placeholder="••••••••"
                                                type={showPassword ? "text" : "password"}
                                                {...field}
                                                className="pr-10"
                                            />
                                        </FormControl>
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* SoDt */}
                        <FormField
                            control={form.control}
                            name="soDt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} placeholder="0929 299 299" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* BirthDay */}
                        <FormField
                            control={form.control}
                            name="birthday"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormLabel>Birthday</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full justify-start text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                captionLayout="dropdown"
                                                fromYear={1900}
                                                toYear={new Date().getFullYear()}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Gender */}
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-full">
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select your gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male🧔🏻‍♂️</SelectItem>
                                                <SelectItem value="female">Female👱🏼‍♀️</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit button */}
                        <Button className="w-full bg-[#FF385C]" variant="default" type="submit">Submit</Button>
                    </form>
                </Form>

                {/* <Form >
                    <Form.Item name="name" label="Họ tên">
                        <Input placeholder="Nguyễn Văn A" />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
                        <Input placeholder="you@example.com" />
                    </Form.Item>
                    <Form.Item name="soDt" label="Số điện thoại">
                        <Input placeholder="0929 292 929" />
                    </Form.Item>
                    <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>
                    <Form.Item name="gender" label="Giới tính" rules={[{ required: true }]}>
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>
                    <Form.Item name="birthDay" label="Ngày sinh" rules={[{ required: true }]}>
                        <DatePicker onChange={(e) => console.log(e)} className="w-full" />
                    </Form.Item>
                    <Button style={{ backgroundColor: "#FF385C" }} variant="default" type="submit" className="w-full" >
                        {loading && <Loader2Icon className="animate-spin" />}
                        Đăng ký
                    </Button>

                </Form> */}
            </div>
        </div>
    );
}


