import React, { useState } from "react";
import { toast } from "react-toastify";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);

  const handleProceed = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }

    // Simulate payment success
    setPaymentDone(true);
    toast.success("Payment successful!");
  };

  if (paymentDone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-6 rounded shadow bg-white text-center">
          <h2 className="text-2xl font-semibold text-green-600">
            ✅ Payment Done
          </h2>
          <p className="mt-2">Thank you for your payment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Select Payment Method
        </h2>

        {/* Cash Option */}
        <label className="flex items-center gap-3 p-3 border rounded cursor-pointer mb-3">
          <input
            type="radio"
            name="payment"
            value="cash"
            onChange={() => setPaymentMethod("cash")}
          />
          <span>💵 Cash on Collection</span>
        </label>

        {/* UPI Option */}
        <label className="flex items-center gap-3 p-3 border rounded cursor-pointer mb-4">
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={() => setPaymentMethod("upi")}
          />
          <span>📱 UPI (Google Pay / PhonePe)</span>
        </label>

        <button
          onClick={handleProceed}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
