import { NextResponse } from "next/server";
import blogData from "@/lib/mockData/blogData.json";

export async function GET() {
  return NextResponse.json(blogData);
}
