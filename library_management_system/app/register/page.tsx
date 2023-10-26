import { RegisterForm } from "./form";

export default function RegisterPage() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Library Management System</h1>
      </header>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}
