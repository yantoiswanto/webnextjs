import Link from "next/link";
export default function PostsMetaTitle({ category, title, date, center }) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? "text-center" : ""}`}>
        <Link href="/details">
          <a>{title}</a>
        </Link>
      </h2>
    </>
  );
}
