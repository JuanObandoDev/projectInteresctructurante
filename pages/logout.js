import { useContext, useEffect } from "react";
import AuthContext from "../context/auth";
import { useRouter } from "next/router";

export default function Logout() {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        authContext.setUser(null);
        router.push("/");
    }, []);
    return <></>;
}