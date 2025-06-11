import * as notifications from '../../../notifications.json';

export function getAllNotificationsByUser(userId) {
    const userNotifications = [];

    for (const notification of notifications.default) {
        if (notification.author.userId === userId) {
            userNotifications.push(notification.context);
        }
    }
    return userNotifications;
}