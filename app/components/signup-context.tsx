"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";

type SignupContextValue = {
  email: string;
  setEmail: (value: string) => void;
  msg: string;
  msgColor: string;
  done: boolean;
  doneEmail: string;
  submitting: boolean;
  submit: (e: FormEvent<HTMLFormElement>) => void;
};

const SignupContext = createContext<SignupContextValue | null>(null);

const DEFAULT_MSG = "リリース時にメールでお知らせします。広告メールは送りません。";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export function SignupProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [done, setDone] = useState(false);
  const [doneEmail, setDoneEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setMsg("正しいメールアドレスを入力してください");
      setErr(true);
      return;
    }

    setSubmitting(true);
    setErr(false);
    setMsg("送信中…");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "TrainLink ウェイティングリスト登録",
          from_name: "TrainLink Waitlist",
          email: trimmed,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setDone(true);
        setDoneEmail(trimmed);
        setMsg("登録ありがとうございます。リリース時にお知らせします。");
        setErr(false);
      } else {
        setMsg("送信に失敗しました。時間をおいて再度お試しください。");
        setErr(true);
      }
    } catch {
      setMsg("通信エラーが発生しました。時間をおいて再度お試しください。");
      setErr(true);
    } finally {
      setSubmitting(false);
    }
  };

  const value: SignupContextValue = {
    email,
    setEmail: (value: string) => {
      setEmail(value);
      setMsg("");
    },
    msg: msg || DEFAULT_MSG,
    msgColor: err ? "#ff7a7a" : msg ? "oklch(0.8 0.12 285)" : "#6e6e7c",
    done,
    doneEmail,
    submitting,
    submit,
  };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used within a SignupProvider");
  return ctx;
}
