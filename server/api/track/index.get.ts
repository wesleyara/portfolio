import { prisma } from "~/prisma/prismaClient";

export default defineEventHandler(async () => {
  const response = await prisma.track.findMany();

  return { status: 200, message: "Success, track finded", data: response };
});
