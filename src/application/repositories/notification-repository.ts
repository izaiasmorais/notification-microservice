import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
  abstract create(notication: Notification): Promise<void>;
}
