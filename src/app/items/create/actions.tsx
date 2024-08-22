// import { auth } from "@/auth";
"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import { database } from "@/db/database";
import { items } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createItemAction(formData: FormData) {

    const session = await getServerSession(authOptions);
    if (!session) {
        throw new Error("Unauthorized");
    }

    const user = session.user;
    if (!user || !user.id) {
        throw new Error("Unauthorized");
    }

    await database.insert(items).values({
        name: formData.get("name") as string,
        startingPrice: Number(formData.get("startPrice")),
        userId: user.id,
    });


    redirect("/");
}
