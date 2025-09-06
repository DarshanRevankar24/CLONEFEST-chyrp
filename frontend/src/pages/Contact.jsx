function Contact() {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-lg w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Your Message..."
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
