import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
  providers: [
    PrismaService,
    {
      // this line basically says that everytime we need Notications Repository
      provide: NotificationsRepository,
      // this line will give the Prisma Noticiations Repository
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
