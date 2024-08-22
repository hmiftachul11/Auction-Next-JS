// "use client";

import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
export async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <div className="bg-gray-200 py-2">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <Link href="/" className="hover:underline flex items-center">
                        <Image src="/Logo.png" width="50" height="50" alt="Logo" />
                        BidBuddy.com
                    </Link>
                    <Link
                        href="/items/create"
                        className="hover:underline flex items-center gap-1"
                    >
                        Auction an Item
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div>{session?.user?.name}</div>
                    <div>{session ? <SignOut /> : <SignIn />}</div>
                </div>
            </div>
        </div>

    );
}
