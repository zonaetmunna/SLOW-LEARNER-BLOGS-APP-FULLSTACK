import { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "prisma/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { username, email, password } = req.body;
      console.log(req.body);
      const user = await signUp(username, email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
