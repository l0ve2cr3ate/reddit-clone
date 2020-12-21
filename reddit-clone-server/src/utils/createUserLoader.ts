import DataLoader from "dataloader";
import { User } from "../entities/User";

// keys (userIds) is array: [1, 7, 8, 9]
// it expects to return the user for these ids: [{id: 1, username: 'john'}, {}, {}, {}]
export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach((u) => {
      userIdToUser[u.id] = u;
    });

    return userIds.map((userId) => userIdToUser[userId]);
  });
