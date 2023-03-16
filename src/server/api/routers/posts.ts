import { createTRPCRouter, protectedProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getPosts: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.session?.user.id) {
      const data = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.session.user.id,
        },
        include: {
          posts: true,
        },
      });

      return data && data.posts;
    }
  }),
});
