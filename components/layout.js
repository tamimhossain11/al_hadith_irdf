import { useRouter } from "next/router";

export default function Layout({ children }) {

  return (
    <> 
      <main>{children}</main>
    </>
  );
}
