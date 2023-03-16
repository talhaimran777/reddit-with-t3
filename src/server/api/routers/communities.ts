import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const communitiesRouter = createTRPCRouter({
  getCommunities: protectedProcedure.query(async ({ ctx }) => {
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
  createCommunity: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        type: z.enum(["PUBLIC", "PRIVATE"]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session.user?.id) return;

      const user = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.session.user.id,
        },
      });

      if (!user) return;

      const community = await ctx.prisma.community.create({
        data: {
          name: input.name,
          type: input.type,
          users: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return {
        communityCreationMessage: `You have successfully created a community & it's id is ${community.id}`,
      };
    }),
});
