import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3b3b3b]">
      <div className="text-center">
        <div className="relative">
          {/* Outer rotating circle */}
          <div className="w-16 h-16 border-4 border-[#d56c0a] rounded-full border-t-transparent animate-spin" />

          {/* Inner pulsing circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-[#d56c0a] rounded-full animate-pulse" />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h2 className="text-xl font-bold text-white">Memuat Detail Game</h2>
          <div className="flex justify-center gap-1">
            <div
              className="w-2 h-2 bg-[#d56c0a] rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-2 h-2 bg-[#d56c0a] rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-2 h-2 bg-[#d56c0a] rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
