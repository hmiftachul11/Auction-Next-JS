import { getServerSession } from "next-auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { bids as bidsSchema, items } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { authOptions } from "./api/auth/[...nextauth]/route";

type Item = {
  id: number;
  name: string;
  userId: string;
};

export default async function HomePage() {
  const session = await getServerSession(authOptions); // Get the current session
  // Drizzle ORM way to select all items from the items table
  const allItems = await database
    .select()
    .from(items);


  // if (!session || !session.user) {
  //   return <SignIn />;
  // }

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold">Items For Sale</h1>
      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <div key={item.id} className="border p-8 rounded-xl">
            {item.name}
            starting price: ${item.startingPrice / 100}
          </div>
        ))}
      </div>
    </main>

  );
}
