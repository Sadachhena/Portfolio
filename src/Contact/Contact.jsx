export default function Contact() {
  return (
    <section className="mt-24 px-6">

      <div className="max-w-6xl mx-auto rounded-[50px] p-10 md:p-16 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white shadow-2xl">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="hidden md:flex justify-center">
            <img
              src="/contact.png"
              alt="contact"
              className="w-[350px]"
            />
          </div>

          {/* RIGHT FORM */}
          <div>

            <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
              Get In Touch
            </h2>

            <form className="space-y-5">

              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input-box" />
                <input type="text" placeholder="Last Name" className="input-box" />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="input-box" />
                <input type="text" placeholder="Phone No." className="input-box" />
              </div>

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Message"
                className="input-box w-full"
              ></textarea>

              {/* Button */}
              <div className="flex justify-center md:justify-start">
                <button className="bg-white text-black px-8 py-3 rounded shadow hover:scale-105 transition">
                  Send
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </section>
  );
}