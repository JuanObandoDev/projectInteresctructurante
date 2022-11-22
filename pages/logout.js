import { useContext } from "react";
import AuthContext from "../context/auth";
import { useRouter } from "next/router";

export default function Logout() {
    const authContext = useContext(AuthContext);
    authContext.setUser(null);
    const router = useRouter();
    router.push("/");
    return null;
}