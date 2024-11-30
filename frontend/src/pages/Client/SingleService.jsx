import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getService } from "../../api/projectApi";
import PageLoader from "../../components/custom/PageLoader";
import Header from "../../components/custom/Header";

const SingleService = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState();

  useEffect(() => {
    const fecthServiceById = async () => {
      const { data, error } = await getService(setLoading, id);

      if (data) {
        console.log(data);
        setService(data);
      }

      if (error) {
        console.error(error);
      }
    };

    fecthServiceById();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  console.log(service);

  return (
    <>
      <Header />
      <div className="bg-slate-950 p-10">
        {service ? (
          <div className="p-6 max-w-4xl mx-auto bg-slate-900 shadow-md rounded-md text-white mt-20">
            {/* Gig Title */}
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

            {/* Image */}
            <img
              src={service.photo}
              alt={service.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />

            {/* Description */}
            <p className="text-lg mb-6">{service.description}</p>

            {/* Category and Sub-category */}
            <div className="flex gap-4 mb-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                {service.category}
              </span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                {service.sub_category}
              </span>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Skills
              </h2>
              <ul className="flex flex-wrap gap-2">
                {service.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Plans */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.pricing.map((plan, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-md shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-2">
                      {plan.title} ({plan.plan})
                    </h3>
                    <p className=" mb-4">{plan.description}</p>
                    <p className="text-xl font-bold">${plan.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-semibold mb-4">FAQ</h2>
              <ul className="space-y-4">
                {service.faq.map((faqItem, index) => (
                  <li key={index} className="border-b pb-4">
                    <h3 className="font-semibold">Q: {faqItem.question}</h3>
                    <p className="">A: {faqItem.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <h2>No Service Found</h2>
        )}
      </div>
    </>
  );
};

export default SingleService;
