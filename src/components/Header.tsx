"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { setLogin } from "@/redux/slices/userSlice";
import type { UserState, AuthUser } from "@/redux/slices/userSlice";
import { userLocalStorage } from "@/lib/localStorage";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
// import SearchBar from "@/components/SearchBar";
// import Cookies from "js-cookie";

export default function Header() {
    const userState = useSelector((s: RootState) => s.user as UserState);
    const user = userState.user as AuthUser | null;
    const dispatch = useDispatch();

    const router = useRouter()

    const logout = () => {
        dispatch(setLogin(null));
        userLocalStorage.remove();
    };

    return (
        <header className="fixed top-0 z-40 w-full h-16 flex items-center border-b bg-white py-15 ">
            <div className="w-[95%] mx-auto flex items-center justify-between gap-4">
                <Link href="/" className="font-bold text-xl">
                    <Image src="/images/Airbnb_Logo.png" alt="logo" width={100} height={100} />
                </Link>
                <div className="flex-1 flex justify-center">
                    <SearchBar />
                </div>
                <nav className="flex items-center gap-4">
                    {/* {Cookies.get("admin_token") && <Link href="/admin/users" className="text-sm">Admin</Link>} */}
                    {user ? (
                        <>
                            <span className="text-sm">{user?.email}</span>
                            <button onClick={logout} className="text-sm underline">Đăng xuất</button>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => router.push("/login")} variant="ghost">Đăng nhập</Button>
                            <Button onClick={() => router.push("/register")} variant="ghost">Đăng ký</Button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}


