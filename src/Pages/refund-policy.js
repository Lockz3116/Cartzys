/pages/refund-policy.js
import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-purple-400 mb-6 uppercase text-center">Return and Refund Policy</h1>

      <p className="text-gray-300 mb-4 text-sm">Effective Date: January 2025</p>
      <p className="text-gray-300 mb-4 text-sm">Version: 1.0</p>

      <h2 className="text-xl font-bold text-purple-300 mt-8 mb-2">Digital Products Only — No Physical Goods</h2>
      <p className="text-gray-400 text-sm mb-4">
        Cartzys operates as a 100% digital vendor platform. We sell downloadable content like vendor lists, guides, and templates. No physical goods are sold or shipped. All content is delivered instantly via email upon successful payment. We do not manage inventory, handle physical products, or engage in shipping logistics.
      </p>

      <h2 className="text-xl font-bold text-purple-300 mt-8 mb-2">No Refunds on Digital Products</h2>
      <p className="text-gray-400 text-sm mb-4">
        Due to the nature of digital goods, all sales are final. Once a file or link has been accessed, it cannot be returned. This no-refund policy protects our digital intellectual property and prevents unauthorized access or distribution.
      </p>

      <h2 className="text-xl font-bold text-purple-300 mt-8 mb-2">Product Responsibility Disclaimer</h2>
      <p className="text-gray-400 text-sm mb-4">
        Cartzys does not verify any external vendors listed in the products. You are responsible for doing your own research before purchasing or communicating with any supplier. Cartzys does not promote, condone, or support counterfeit sales or illegal behavior of any kind.
      </p>

      <h2 className="text-xl font-bold text-purple-300 mt-8 mb-2">Limited Exceptions</h2>
      <p className="text-gray-400 text-sm mb-4">
        In rare technical situations (e.g. failed email delivery), you may contact support within 24 hours of purchase. If confirmed, we may re-send access or issue a refund at our sole discretion. Duplicate purchases must be reported within 1 hour.
      </p>

      <h2 className="text-xl font-bold text-purple-300 mt-8 mb-2">Chargebacks & Disputes</h2>
      <p className="text-gray-400 text-sm mb-4">
        Opening a chargeback without contacting us first will result in permanent account suspension and legal reporting. You must email support to resolve any issue before escalating to your bank.
      </p>

      <h2 className="text-xl font-bold text-purple-300 mt-8 mb-2">Final Acknowledgment</h2>
      <p className="text-gray-400 text-sm mb-4">
        By completing a purchase on this site, you accept our digital-only, no-refund policy and accept all terms laid out above.
      </p>

      <p className="text-xs text-center text-zinc-500 mt-10">© 2025 Cartzys. All rights reserved.</p>
    </div>
  );
}

}
