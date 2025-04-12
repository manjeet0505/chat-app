import ChatForum from "@/components/ChatForum";
import { currentUser } from "@clerk/nextjs/server";
import { User, Channel as StreamChannel } from "stream-chat";


export default async function Page({ params }) {
  

  const user = await currentUser();
  const { slug } = await params;

  return (
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token: user.publicMetadata.token,
      }}
    />
  );
}
