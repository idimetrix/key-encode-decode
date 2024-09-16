import * as crypto from "crypto";

// Function to encode a string with a key
export function encodeWithKey(decodedData: string, key: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(decodedData, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + encrypted;
}

// Function to decode a string with a key
export function decodeWithKey(encodedData: string, key: string): string {
  const iv = Buffer.from(encodedData.slice(0, 32), "hex");
  const encryptedData = encodedData.slice(32);
  const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedData, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}
