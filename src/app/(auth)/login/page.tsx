"use client";

import { useState } from "react";
import { Form, Input, message } from "antd";
import { userServ } from "@/services/api";
import { useDispatch } from "react-redux";
import { setLogin } from "@/redux/slices/userSlice";
import { userLocalStorage } from "@/lib/localStorage";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            setLoading(true);
            const res = await userServ.login(values);
            dispatch(setLogin(res.data.content));
            userLocalStorage.set(res.data.content);
            message.success("Đăng nhập thành công");
        } catch (e) {
            message.error("Đăng nhập thất bại");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[url(/images/airbnb-travel-bg.jpg)] bg-no-repeat bg-cover min-h-screen flex items-center justify-center p-6 shadow-2xl">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Đăng nhập</h1>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
                        <Input placeholder="you@example.com" />
                    </Form.Item>
                    <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>
                    <Button style={{ backgroundColor: "#FF385C" }} variant="default" type="submit" className="w-full" >
                        {loading && <Loader2Icon className="animate-spin" />}
                        Đăng nhập
                    </Button>
                </Form>
            </div>
        </div>
    );
}


