import Posts from "./components/Posts"

export const revalidate = 1 * 60 * 60

export default function Home() {
  return (
    <>
      <p className="mt-12 mb-12 text-4xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Joy</span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component*/}
      <Posts />
    </>
  )
}
