import { redirect } from "next/navigation";

export default function RefundRedirect() {
  redirect("/cancellation-policy");
}
