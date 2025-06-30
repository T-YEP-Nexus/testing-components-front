"use client";

import React from "react";
import { usePathname } from "next/navigation";

function BackgroundBubbles() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isLoginPage = pathname === "/login";
  const isForgotPasswordPage = pathname === "/forgot-password";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${
        !isHomePage && !isLoginPage && !isForgotPasswordPage
          ? "md:left-20 lg:left-64"
          : ""
      }`}
    >
      {/* Bulle 1 - Animation lente */}
      <div
        className="absolute w-24 h-24 bg-white/10 rounded-full animate-bubble-1"
        style={{
          animation: "float 20s ease-in-out infinite",
          left: "10%",
          top: "20%",
        }}
      ></div>

      {/* Bulle 2 - Animation moyenne */}
      <div
        className="absolute w-20 h-20 bg-white/10 rounded-full animate-bubble-2"
        style={{
          animation: "float 15s ease-in-out infinite reverse",
          right: "15%",
          bottom: "30%",
        }}
      ></div>

      {/* Bulle 3 - Animation rapide */}
      <div
        className="absolute w-12 h-12 bg-white/10 rounded-full animate-bubble-3"
        style={{
          animation: "float 12s ease-in-out infinite",
          left: "60%",
          top: "50%",
        }}
      ></div>

      {/* Bulle 4 - Animation très lente */}
      <div
        className="absolute w-16 h-16 bg-white/10 rounded-full animate-bubble-4"
        style={{
          animation: "float 25s ease-in-out infinite reverse",
          right: "40%",
          top: "10%",
        }}
      ></div>

      {/* Bulle 5 - Animation moyenne */}
      <div
        className="absolute w-14 h-14 bg-white/10 rounded-full animate-bubble-5"
        style={{
          animation: "float 18s ease-in-out infinite",
          left: "30%",
          bottom: "20%",
        }}
      ></div>
      {/* Bulle 6 - Animation rapide */}
      <div
        className="absolute w-10 h-10 bg-white/10 rounded-full animate-bubble-6"
        style={{
          animation: "float 10s ease-in-out infinite reverse",
          right: "10%",
          top: "60%",
        }}
      ></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          20% {
            transform: translateY(-40px) translateX(20px) rotate(45deg);
          }
          40% {
            transform: translateY(-20px) translateX(-30px) rotate(90deg);
          }
          60% {
            transform: translateY(-60px) translateX(15px) rotate(135deg);
          }
          80% {
            transform: translateY(-30px) translateX(-25px) rotate(180deg);
          }
        }

        .animate-bubble-1 {
          animation-delay: 0s;
        }

        .animate-bubble-2 {
          animation-delay: -5s;
        }

        .animate-bubble-3 {
          animation-delay: -8s;
        }

        .animate-bubble-4 {
          animation-delay: -12s;
        }

        .animate-bubble-5 {
          animation-delay: -3s;
        }

        .animate-bubble-6 {
          animation-delay: -7s;
        }
      `}</style>
    </div>
  );
}

export default BackgroundBubbles;
