import { prisma } from "~/lib/prisma";

export default defineEventHandler(async () => {
  const response = await prisma.track.findMany();

  return { status: 200, message: "Success, track finded", data: response };
});
