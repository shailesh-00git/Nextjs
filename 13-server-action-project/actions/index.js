"use server";
import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export async function CreateContact(formData) {
  try {
    await dbConnect();

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    const contact = await Contact.create({
      name: name.toString().trim(),
      email: email.toString().trim(),
      subject: subject.toString().trim(),
      message: message.toString().trim(),
    });

    return {
      success: true,
      message: "Message sent successfully",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.error("Error creating contact:", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

//get contact list
export async function GetContacts() {
  try {
    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
}
