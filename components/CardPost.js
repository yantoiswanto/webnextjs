import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/details">
        <a>
          <img src={thumbnail} className="x-full rounded" />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
