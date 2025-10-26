import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Phone, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Single-file, production-ready sign-in page for TAJ HOTEL
// - Responsive two-panel layout with brand hero
// - Email/Phone sign-in, password toggle, basic validation
// - "Use OTP" path (fake here; wire to your OTP flow)
// - Accessible labels, keyboard-friendly
// - Subtle animations via Framer Motion

export default function TajHotelSignIn() {
  const [tab, setTab] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  function validate() {
    if (tab === "email") {
      const re = /[^@\s]+@[^@\s]+\.[^@\s]+/;
      if (!re.test(email)) return "Please enter a valid email address.";
    } else {
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 8) return "Please enter a valid phone number.";
    }
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Signed in successfully (demo). Replace with real API call.");
    }, 900);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 lg:grid-cols-2">
        {/* Left: Brand / Hero */}
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative hidden overflow-hidden rounded-none lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="TAJ HOTEL lobby"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/30 backdrop-blur">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-white/80">WELCOME TO</p>
                  <h1 className="text-2xl font-semibold tracking-wide">TAJ HOTEL</h1>
                </div>
              </div>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/85">
                Discover timeless hospitality and member-only privileges. Earn points on every stay,
                unlock exclusive rates, and access complimentary upgrades.
              </p>
            </div>

            <ul className="grid gap-3 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Member rates & bonus nights
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Late checkout upon availability
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Dining & spa savings across properties
              </li>
            </ul>
          </div>
        </motion.aside>

        {/* Right: Sign-In Card */}
        <motion.main
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center p-6"
        >
          <Card className="w-full max-w-md border-0 shadow-xl shadow-slate-200/60">
            <CardHeader className="space-y-2">
              <CardTitle className="text-center text-2xl font-semibold tracking-tight">Member Sign In</CardTitle>
              <p className="text-center text-sm text-muted-foreground">
                Sign in to your <span className="font-medium">TAJ HOTEL</span> membership.
              </p>
            </CardHeader>
            <CardContent>
              {/* Tabs */}
              <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                <button
                  onClick={() => setTab("email")}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    tab === "email" ? "bg-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-pressed={tab === "email"}
                >
                  Email
                </button>
                <button
                  onClick={() => setTab("phone")}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    tab === "phone" ? "bg-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-pressed={tab === "phone"}
                >
                  Phone
                </button>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                {tab === "email" ? (
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile number</Label>
                    <div className="flex gap-2">
                      <select
                        aria-label="Country code"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="h-10 w-24 rounded-md border border-input bg-background px-2 text-sm"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+971">+971</option>
                      </select>
                      <div className="relative grow">
                        <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="phone"
                          type="tel"
                          inputMode="tel"
                          placeholder="98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-9"
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-9 pr-10"
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" checked={remember} onCheckedChange={() => setRemember(!remember)} />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">Remember me</Label>
                  </div>
                  <button type="button" className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline">
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Signing in…" : (
                    <span className="inline-flex items-center gap-2">Sign In <ArrowRight className="h-4 w-4" /></span>
                  )}
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  Or
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => alert("OTP sign-in (demo)")}
                >
                  Get OTP
                </Button>

                <p className="pt-2 text-center text-xs text-muted-foreground">
                  By continuing you agree to the <a href="#" className="underline underline-offset-4">Terms</a> and
                  <a href="#" className="ml-1 underline underline-offset-4">Privacy Policy</a>.
                </p>
              </form>

              <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
                New to TAJ HOTEL? <a href="#" className="font-medium text-slate-900 underline-offset-4 hover:underline">Create an account</a>
              </div>
            </CardContent>
          </Card>
        </motion.main>
      </div>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 py-6 text-xs text-slate-500">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} TAJ HOTEL. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
