import { prisma } from "~/lib/prisma";

export default defineEventHandler(async event => {
  const { element, details } = await readBody(event);

  if (!element) {
    return { status: 400, message: "Element is required" };
  }

  const trackExists = await prisma.track.findUnique({
    where: {
      element,
    },
  });

  if (trackExists) {
    await prisma.track.update({
      where: {
        element,
      },
      data: {
        count: trackExists.count + 1,
        details,
      },
    });

    return { status: 200, message: "Success, track updated" };
  }

  await prisma.track.create({
    data: {
      element,
      count: 1,
      details,
    },
  });

  return { status: 200, message: "Success, track created" };
});
