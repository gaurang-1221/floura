import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Helmet>
        <title>Contact Us | Floura</title>
        <meta name="description" content="Get in touch with the Floura team. We'd love to hear from you." />
      </Helmet>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif mb-4 text-nature-900">Get in Touch</h1>
        <p className="text-gray-600">We'd love to hear from you. Send us a message below.</p>
      </div>
      <form className="space-y-6 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-nature-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-500 focus:ring-nature-500 sm:text-sm p-3 border" />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
             <input type="text" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-500 focus:ring-nature-500 sm:text-sm p-3 border" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-500 focus:ring-nature-500 sm:text-sm p-3 border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea rows={5} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-500 focus:ring-nature-500 sm:text-sm p-3 border" />
        </div>
        <button type="submit" className="w-full bg-nature-600 text-white px-4 py-3 rounded-md hover:bg-nature-700 transition font-medium text-lg">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;