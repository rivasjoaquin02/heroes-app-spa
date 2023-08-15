import { USER_LOCAL } from "../constants";
import { User } from "../hooks/useAuth";

const saveUser = (user: User) =>
    new Promise((res) => {
        localStorage.setItem(USER_LOCAL, JSON.stringify(user));
        res("");
    });

export default saveUser;
