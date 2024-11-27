//import { barAction } from "../lib/actions";
//import { useActionState } from "react";

export const metadata: Metadata = {
  title: "Foo",
};
import { Metadata } from "next";
export default function Page() {
  //  const [results, formAction] = useActionState(barAction, undefined);

  console.log("hello from foo");
  return (
    <>
      <form>
        <label>Number 1 to add</label>
        <input name="number1" type="text" />
        <label>Number 2 to add</label>
        <input name="number2" type="text" />
        <button type="submit">Call Server Action</button>
      </form>
    </>
  );
}
