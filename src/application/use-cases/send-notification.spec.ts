import { randomUUID } from "crypto";
import { SendNotification } from "./send-notification";

describe("Send notification", () => {
  it("should be able to send notification", async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: "social",
      content: "Você recebeu uma nova solicitação de amizade",
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
