import { GetContacts } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

async function ContactList() {
  const contacts = await GetContacts();
  console.log(contacts);
  return (
    <div className="space-y-4">
      {contacts.map((c) => (
        <Card
          key={c._id}
          className="border rounded-lg p-4 flex justify-between "
        >
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold font-sans text-gray-700">
                  {c.subject.toUpperCase()}
                </p>
                <p className="text-gray-700 text-sm">
                  From: {c.name}({`${c.email}`})
                </p>
              </div>
              <Button variant={c.status === "new" ? "default" : "secondary"}>
                {c.status}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-gray-500 border-b-2 pb-1">{c.message}</p>
            </div>
            <div className="flex justify-between pt-2">
              <p className="text-gray-400x">
                {new Date(c.createdAt).toLocaleDateString()}
              </p>
              <div>
                {c.status === "new" && (
                  <Button variant="outline" size="sm">
                    mark as read
                  </Button>
                )}
                {c.status === "read" && (
                  <Button variant="outline" size="sm">
                    mark as reply
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default ContactList;
