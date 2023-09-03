"use client";

import React, { useState } from "react";
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";
import { Button } from "@/components/ui/button";
import AddIcon from "@/components/icons/AddIcon";
import Link from "next/link";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

function Post() {
  let [is_loaded, setIsLoaded] = useState(false);
  let [posts, setPosts] = useState<Payment[]>([]);

  getData().then((res) => {
    setPosts(res);
    setIsLoaded(true);
  });

  return (
    <>
      {is_loaded ? (
        <div className="w-full">
          <div className="mb-[10px]">
            <Link href="/post/new">
              <Button>
                <div className="mr-2 h-4 w-4">
                  <AddIcon />
                </div>
                New Post
              </Button>
            </Link>
          </div>

          <DataTable columns={columns} data={posts} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Post;
