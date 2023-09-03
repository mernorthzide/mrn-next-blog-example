import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Post } from "@prisma/client";

interface Props {
  post: Post;
}

function PostItem({ post }: Props) {
  return (
    <Card>
      {/* Header */}
      <CardHeader>
        <CardTitle className="hover:underline cursor-pointer text-primary text-[20px]">
          {post.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex">
          {/* By */}
          <Badge variant="outline">
            by <div className="ml-[5px]">John Doe</div> on 2021-09-01
          </Badge>

          {/* Tags */}
          <div className="ml-[20px] flex gap-[10px]">
            Tags: <Badge variant="secondary">Tag 1</Badge>{" "}
            <Badge variant="secondary">Tag 2</Badge>{" "}
            <Badge variant="secondary">Tag 3</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="pt-[14px]">{post.content}</div>
      </CardContent>

      <CardFooter>
        <div className="flex gap-[10px]">
          <Link href="" className="hover:underline cursor-pointer text-primary">
            Read more
          </Link>

          <Link href="" className="hover:underline cursor-pointer text-primary">
            10 comments
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PostItem;
