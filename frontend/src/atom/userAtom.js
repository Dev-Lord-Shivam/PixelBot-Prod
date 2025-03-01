import { atom } from "recoil";
import Cookies from "js-cookie";

const userAtom = atom({
    key: "userAtom",
    default: (() => {
        const userCookie = Cookies.get("pixelpen-user");
        return userCookie ? JSON.parse(userCookie) : "";
    })(),
});

export default userAtom;
