import Pusher from "pusher-js"
import { useFriendRequest } from "./useFriendRequest";

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

export const formatChannelNotification = ({ user_id }) => {
  return `friendRequest-${user_id}`
}

//subscribe the channel to bind events of channel
export const subscribe = (channelName) => {
  const channel = pusher.subscribe(channelName);

  const data = channel.bind('addNotification', function (data) {
    console.log(data.message)
  });

  return data

}
//bind the event of the presence channel to get the data attched //with it 