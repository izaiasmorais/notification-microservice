import { randomUUID } from "crypto";
import { ImMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification-respository";
import { SendNotification } from "./send-notification";

describe("Send notification", () => {
  it("should be able to send notification", async () => {
    const notificationsRepository = new ImMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: "social",
      content: "Você recebeu uma nova solicitação de amizade",
      recipientId: randomUUID(),
    });

    expect(notificationsRepository.notifications[0]).toEqual(notification);

    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
