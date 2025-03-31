export default function PostCard({ post }: any) {
  return (
    <article>
      <p>{JSON.stringify(post)}</p>
    </article>
  );
}
