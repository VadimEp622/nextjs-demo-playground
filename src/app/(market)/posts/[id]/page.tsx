import { notFound } from "next/navigation";

export default async function PostDetailsPage({ params }: any) {
  const isFetchedItem = true;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!isFetchedItem) return notFound();

  return <main className="text-center">hello from details page</main>;
}
