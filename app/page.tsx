import PostItem from "@/components/PostItem";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div className="w-full flex gap-[20px]">
      {posts.length === 0 ? (
        <div className="w-3/4 flex justify-center items-center italic">
          <div>No posts found.</div>
        </div>
      ) : (
        <div className="w-3/4 flex flex-col gap-[20px]">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      )}

      <div className="w-1/4 flex flex-col gap-[20px]">
        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary text-[20px]">
              Categories
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
