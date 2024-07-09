import { prisma } from "~/lib/prisma";

export default defineEventHandler(async event => {
  const { element, schema } = await readBody(event);

  if (!element || !schema) {
    return { status: 400, message: "Error, element and schema are required" };
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
      },
    });

    return { status: 200, message: "Success, track updated" };
  }

  await prisma.track.create({
    data: {
      element,
      count: 1,
      schema,
    },
  });

  return { status: 200, message: "Success, track created" };
});
