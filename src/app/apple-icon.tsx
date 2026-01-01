import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#18181b",
          borderRadius: "22.5%",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M8 13C8 13 10 10 12 10C14 10 16 13 16 13"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 16C8 16 10 13 12 13C14 13 16 16 16 16"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
