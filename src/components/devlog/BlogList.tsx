import BlogListItem from "./BlogListItem";
import Link from "next/link";
import { PostData } from "global";

interface BlogListProps {
  blogs: PostData[];
  isOnMain?: boolean;
}

export default function BlogList({ blogs, isOnMain = true }: BlogListProps) {
  return (
    <div className="mt-5 flex w-full flex-col justify-center gap-5 px-5 pb-10 sm:px-[10%] md:px-[15%]">
      <ul className="flex w-full flex-col justify-center gap-5">
        {blogs.map((metaData, index) => (
          <BlogListItem key={index} {...metaData} />
        ))}
      </ul>
      {isOnMain && (
        <Link href="/categories" className="flex justify-end gap-1">
          <span className="i-hover-up t-hover-gray rounded-md border border-gray-300 px-5 py-2 text-sm">
            Read More <i className="bi bi-arrow-right" />
          </span>
        </Link>
      )}
    </div>
  );
}
