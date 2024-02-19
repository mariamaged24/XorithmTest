import "@/styles/globals.css";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useSession, SessionProvider } from 'next-auth/react';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    });
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
