import {
  Truck,
  ShieldCheck,
  Headphones,
  CreditCard,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Truck size={40} />,
    title: "Free Shipping",
    desc: "Free delivery on all orders above ₹999.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={40} />,
    title: "Secure Payment",
    desc: "100% secure payment with trusted gateways.",
  },
  {
    id: 3,
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    desc: "Our support team is always ready to help.",
  },
  {
    id: 4,
    icon: <CreditCard size={40} />,
    title: "Easy Returns",
    desc: "7-day hassle-free return policy.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose ShopSphere?
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-lg max-w-2xl mx-auto">
            We provide the best shopping experience for our customers.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm md:text-base leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;