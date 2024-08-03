import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" w-full h-screen flex flex-col gap-3 justify-center items-center ">
      <p className="bg-clip-text text-center text-4xl sm:text-4xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">Assignment for
      Quadiro Technologies.</p>
      <SignUp />
    </div>
  )
}