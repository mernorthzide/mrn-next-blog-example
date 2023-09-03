"use client";

import BlogItem from "@/components/BlogItem";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full flex gap-[20px]">
      <div className="w-3/4 flex flex-col gap-[20px]">
        {[...Array(10)].map((x, i) => (
          <BlogItem key={i} />
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
