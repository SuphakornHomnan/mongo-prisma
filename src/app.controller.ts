import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('/post')
  async createPost(@Body() arg: { title: string; body: string }) {
    return await this.prisma.post.create({
      data: {
        title: arg.title,
        body: arg.body,
      },
    });
  }
}
