"use client";

import React from "react";
import { BlogHeader } from "../components/BlogHeader";
import { Explore } from "@/components";
import { IBlogPost } from "@/lib/types/blog-post";

type BlogViewProps = {
  blogData: IBlogPost[];
};
export const BlogView: React.FC<BlogViewProps> = ({ blogData }) => {
  return (
    <div>
      <BlogHeader blogData={blogData} />
      <Explore blog data={blogData} />
    </div>
  );
};
