"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <>
      <style>{`
        body {
          min-height: 100vh;
          background: linear-gradient(135deg, #176B87, #86B6F6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
        }
        .login-card {
          width: 100%;
          max-width: 430px;
          background: #fff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, .15);
        }
        .login-logo {
          width: 85px;
          height: 85px;
          object-fit: contain;
          margin-bottom: 15px;
        }
        .login-title {
          color: #176B87;
          font-weight: 700;
        }
        .form-control {
          padding: 12px 15px;
          border-radius: 12px;
        }
        .btn-login {
          background: #176B87;
          border: none;
          color: #fff;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
        }
        .btn-login:hover {
          background: #12566d;
          color: #fff;
        }
      `}</style>

      <div className="login-card">
        <div className="text-center">
          <img
            src="/assets/images/logo ngletih.PNG"
            className="login-logo"
            alt="Logo SDN Ngletih 1"
          />
          <h3 className="login-title">Login Admin</h3>
          <p className="text-muted">SDN Ngletih 1</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope" />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword((v) => !v)}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-login w-100" disabled={loading}>
            <i className="bi bi-box-arrow-in-right me-2" />
            {loading ? "Memproses..." : "Login Admin"}
          </button>

          <Link href="/" className="btn btn-outline-secondary w-100 mt-3">
            <i className="bi bi-house-door me-2" />
            Kembali ke Home
          </Link>
        </form>
      </div>
    </>
  );
}
