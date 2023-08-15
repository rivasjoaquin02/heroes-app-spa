import { USER_LOCAL } from "../constants";
import { User } from "../hooks/useAuth";

const getUser = (): Promise<User> =>
    new Promise((resolved, rejected) => {
        const userLocal = localStorage.getItem(USER_LOCAL);
        if (!userLocal) rejected();
        const user = JSON.parse(userLocal!) as User;
        resolved(user);
    });

export default getUser;
