import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notication: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notication.id,
        category: notication.category,
        content: notication.content.value,
        recipientId: notication.recipientId,
        readAt: notication.readAt,
        createdAt: notication.createdAt,
      },
    });
  }
}
