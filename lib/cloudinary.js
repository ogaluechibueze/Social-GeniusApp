import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dlfge1bag",
  api_key: "698333778765272",
  api_secret: "NXlJVZW7vhbLjDUenPJv6EPJ7OM",
});

export const cld = globalThis.cloudinary || cloudinary;

if (process.env.NODE_ENV !== "production") globalThis.cloudinary = cld;
