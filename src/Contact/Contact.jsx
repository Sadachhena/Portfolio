import HeroImage from "../Images/HeroImage.png";

export default function Contact() {
  return (
    <section className="mt-24 px-6">

      <div className="max-w-6xl mx-auto rounded-[40px] p-6 md:p-12 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white shadow-2xl">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={HeroImage}
              alt="contact"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

          {/* RIGHT FORM */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
              Get In Touch
            </h2>

            <form className="space-y-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" required className="peer input-glass" />
                  <label className="label-glass">First Name</label>
                </div>

                <div className="relative">
                  <input type="text" required className="peer input-glass" />
                  <label className="label-glass">Last Name</label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="email" required className="peer input-glass" />
                  <label className="label-glass">Email Address</label>
                </div>

                <div className="relative">
                  <input type="text" required className="peer input-glass" />
                  <label className="label-glass">Phone No.</label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea rows="5" required className="peer input-glass resize-none"></textarea>
                <label className="label-glass">Message</label>
              </div>

              {/* Button */}
              <div className="flex justify-center md:justify-start">
                <button type="submit" className="btn-glass">
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </section>
  );
}