import { SignupProvider } from "./components/signup-context";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import AiUseCase from "./components/AiUseCase";
import Health from "./components/Health";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SignupProvider>
      <div
        style={{
          minHeight: "100vh",
          background: "#0a0a0e",
          overflowX: "hidden",
        }}
      >
        <Header />
        <Hero />
        <Problem />
        <Features />
        <AiUseCase />
        <Health />
        <Waitlist />
        <Footer />
      </div>
    </SignupProvider>
  );
}
