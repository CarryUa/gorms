import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className='mx-auto '>
        <RegisterForm></RegisterForm>
      </section>
    </main>
  );
}
