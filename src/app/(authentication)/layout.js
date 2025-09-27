
import "../globals.css";


export const metadata = {
  title: "Lehannet Authentication",
  description: "Connection to Lehannet",
};

export default function AuthenticationLayout({ children }) {
  return (
   
      <main
        className={`h-full text-zinc-100 flex justify-center items-center bg-sky-950 `}
      >
        {children}
      </main>
  );
}
