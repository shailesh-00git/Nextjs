import ContactForm from "@/components/contact-form";
export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="w-180 mx-auto border-2 border-gray-200 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold">Server Actions Demo</h1>
          <p className="text-lg  text-gray-500">
            Contact form with mongo and revalidation
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
