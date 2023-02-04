import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getPosts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  })
});
