import {NextResponse, type NextRequest} from "next/server";

// export default function middlerware (request : NextRequest){
//   return NextResponse.redirect(new URL("/", request.url));
// }


// export const config = {
//   matcher : "/profile",
// };

export default function middlerware (request : NextRequest){
  //redirection - content and url name both changes to hello pathname
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/hello", request.nextUrl));
  // }
  //url rewrite- here only content changes to hello path whereas url name doesnt change remains "/profile"
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  // }
  //cookies and headers
  const themePreference = request.cookies.get("theme");
  const response = NextResponse.next();
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header","custom-value");

  return response
}