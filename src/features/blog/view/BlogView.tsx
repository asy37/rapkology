"use client";

import React from "react";
import { BlogHeader } from "../components/BlogHeader";
import { Explore } from "@/components";

export const BlogView = () => {
  return (
    <div>
      <BlogHeader />
      <Explore blog />
    </div>
  );
};
