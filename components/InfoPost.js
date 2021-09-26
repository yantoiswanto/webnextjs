import PostsMetaTitle from "@components/PostsMetaTitle";
import PostsAuthor from "@components/PostsAuthor";

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostsMetaTitle category={category} title={title} date={date} />
      <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
      <PostsAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}
