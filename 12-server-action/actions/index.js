"use server";
export async function CreateUser(formdata) {
  const name = formdata.get("name");
  console.log(name);
}
