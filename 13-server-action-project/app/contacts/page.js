import ContactList from "@/components/contact-list";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { GetContacts } from "@/actions";
const Contacts = async () => {
  const contact = await GetContacts();
  return (
    <div className="max-h-screen py-4 px-12">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Contacts List Page
      </h1>
      <div className="flex justify-between p-2">
        <Link href={"/"}>
          <Button variant={"outline"} className="bg-transparent">
            Back to Form
          </Button>
        </Link>
        <Badge variant="secondary" className="px-4">
          {contact.length} message
        </Badge>
      </div>

      <div className="container mx-auto max-w-full mt-2 p-2">
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
