"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/profile";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-10">
      {error && <p className="text-center text-red-500 mb-6">{error}</p>}
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="Email address"
        className="form-input"
      />
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        placeholder="Password"
        className="form-input"
      />
      <button
        type="submit"
        className="btn-primary mt-4"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign In"}
      </button>

      <div className="flex items-center my-4 border-t border-gray-300 mt-1"></div>

      <button
        className="btn-social mt-3"
        onClick={() => alert("Not implemented yet")}
      >
        <img
          className="pr-2"
          src="/images/google.svg"
          alt=""
          style={{ height: "2rem" }}
        />
        Continue with Google
      </button>
      <button
        className="btn-social mt-3"
        onClick={() => alert("Not implemented yet")}
      >
        <img
          className="pr-2"
          src="/images/github.svg"
          alt=""
          style={{ height: "2.2rem" }}
        />
        Continue with GitHub
      </button>
    </form>
  );
};
