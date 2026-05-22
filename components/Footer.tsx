import { Instagram, Youtube, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-neutral-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">
            <span className="text-brand-red">Tags</span>Bikez
          </div>
          <p className="mt-4 text-neutral-600 max-w-sm">
            Thrissur's authorised Royal Enfield dealership offering the full 2026 lineup and expert servicing.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/tagsrides" className="p-2.5 rounded-full border border-neutral-300 hover:border-brand-red hover:text-brand-red transition">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/channel/UCGicm0T4qxvyBThaJb7TrVg" className="p-2.5 rounded-full border border-neutral-300 hover:border-brand-red hover:text-brand-red transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex items-start gap-2"><Phone size={15} className="mt-1 text-brand-red" /> Sales: +91 75949 60023</li>
            <li className="flex items-start gap-2"><Phone size={15} className="mt-1 text-brand-red" /> Service: +91 75949 60020</li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-1 text-brand-red" /> Thrissur, Kerala</li>
          </ul>
        </div>

        {/* <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><a href="#models" className="hover:text-neutral-900">Models</a></li>
            <li><a href="#about" className="hover:text-neutral-900">About</a></li>
            <li><a href="#gallery" className="hover:text-neutral-900">Gallery</a></li>
            <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
          </ul>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-14 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between text-xs text-neutral-400 gap-3">
        <span>© {new Date().getFullYear()} TagsBikez. All rights reserved.</span>
        <span>Authorised Royal Enfield Dealer · Thrissur</span>
      </div>
    </footer>
  );
}
