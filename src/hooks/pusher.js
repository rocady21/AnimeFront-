import Pusher from "pusher-js";

export let pusher = new Pusher("2e26f28031eb921a8ddd", {
  cluster: "us2",
});

export const PUSHER_EVENT_NAME = "addNotification";

export const initPusher = () => {
  pusher = new Pusher("2e26f28031eb921a8ddd", {
    cluster: "us2",
  });
};

export const PUSHER_NOTIFICATION_EVENT_NAME = "addNotification";

export const subscribe = (channelName) => {
    const channel = pusher.subscribe(channelName);
    return channel;
}