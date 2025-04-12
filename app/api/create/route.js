import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
 // Define values.
 const api_key = process.env.API_KEY;
 const api_secret = process.env.API_SECRET;
//  const user_id = "user_2vVWewWBIsh8e8BEMoPCKpDvZZJ";

export async function  POST(request){
const serverClient = StreamChat.getInstance(api_key, api_secret);
const user = await request.json()
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
const token = serverClient.createToken(user.data.id);
console.log("A new user has been created",token)
const client =  await clerkClient()
await serverClient.upsertUser({id: user.data.id})
await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
       token: token
    },
   
})

const slugs = [
    "python-chat-new",
    "javascript-chat-new",
    "java-chat-new",
    "c#-chat-new",
    "cpp-chat-new",
    "php-chat-new",
    "ruby-chat-new",
    "swift-chat-new",
    "kotlin-chat-new"
  ]
  slugs.forEach(async (item)=>{
    const channel = serverClient.channel('messaging', item, {
        image: 'https://getstream.io/random_png/?name=react',
        name: capitalize(item) + " Discussion",
        created_by_id: user.data.id
      });
      await channel.create()
      channel.addMembers([user.data.id])
  })
return Response.json({message: 'Hello World'})
}
