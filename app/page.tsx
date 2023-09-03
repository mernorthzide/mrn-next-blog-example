import BlogItem from "@/components/BlogItem";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

export default async function Home() {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="w-full flex gap-[20px]">
      <div className="w-3/4 flex flex-col gap-[20px]">
        {blogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </div>

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
