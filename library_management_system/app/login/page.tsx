import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <div style={{ backgroundColor: '#4A90E2', minHeight: '100vh' }}>
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '24px' }}>Library Management System</h1>
      </header>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '60%', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
