import Pusher from "pusher-js"

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
export const formatChannelFriendsOnline = () => {
  return `friendsOnline`
}

//subscribe the channel to bind events of channel
export const subscribe = (channelName, handleAddNotification) => {

  const channel = pusher.subscribe(channelName);

  const data = channel.bind('addNotification', function (data) {
    if (data) {
      handleAddNotification(data.message.id_User)
    }
  });

  return data

}

export const subscribeToFriendsOnline = (channelName, addFriendOnline) => {

  const channel = pusher.subscribe(channelName);

  const data = channel.bind('addFriendOnline', function (data) {
    if (data) {
      addFriendOnline(data.message);
    }
  });

  return data

}

export const suscribeToDisconnect = (channelName, removeOnline) => {

  const channel = pusher.subscribe(channelName);

  const data = channel.bind('removeFriendOnline', function (data) {
    if (data) {
      removeOnline(data.message);
    }
  });

  return data

}
//bind the event of the presence channel to get the data attched //with it 