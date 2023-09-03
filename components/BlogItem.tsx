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

function BlogItem() {
  return (
    <Card>
      {/* Header */}
      <CardHeader>
        <CardTitle className="hover:underline cursor-pointer text-primary text-[20px]">
          Excepteur incididunt ullamco consequat in laborum ipsum minim occaecat
          in deserunt exercitation.
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
        <div className="pt-[14px]">
          Sit veniam ipsum ut est anim eu culpa. Eiusmod eiusmod do ad laborum
          ad Lorem velit. Ex non magna ullamco labore aute esse do aliquip qui
          veniam id cillum sint labore nulla. Do non qui qui sit aute do cillum
          cillum. Velit sint enim culpa ex exercitation dolore ullamco magna
          laborum ex cillum mollit. Exercitation veniam et mollit voluptate
          fugiat occaecat ad non ad consectetur laborum cillum anim mollit. Ad
          nisi ad minim veniam duis voluptate laboris Lorem. Do est non Lorem
          nisi do duis cupidatat aliqua minim do. Proident duis culpa amet do
          amet pariatur. Velit tempor non irure nostrud sunt occaecat voluptate
          nulla exercitation consequat consequat ullamco magna nostrud. Culpa
          deserunt elit est proident in voluptate aliquip adipisicing esse
          irure. Enim non magna deserunt ad occaecat sunt ad nulla do nulla
          nostrud amet.
        </div>
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

export default BlogItem;
