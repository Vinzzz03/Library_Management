import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-[#9bf7f4] to-[#707df7] min-h-screen">
      <header className="p-5 text-center">
        <h1 className="text-white text-3xl">Library Management System</h1>
      </header>
      <section className="flex justify-center items-center">
        <div className="w-2/3 bg-white p-10 rounded-lg">
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
