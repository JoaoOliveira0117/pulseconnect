import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home/trending");
}

export async function getServerSideProps(ctx) {
  console.log(ctx)
  return {
    props: {}
  }
}