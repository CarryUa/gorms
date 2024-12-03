import RegisterForm from "@/components/auth/RegisterForm";
import VoteForm from "@/components/auth/VoteForm";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className='mx-auto '>
        <VoteForm></VoteForm>
      </section>
    </main>
  );
}
