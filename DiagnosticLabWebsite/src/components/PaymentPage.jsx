import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";
import axios from "axios";
function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [bookingData, setBookingData] = useState({});
  const { state } = useLocation();

  const handleProceed = async () => {
    setLoading(true);

    if (!paymentMethod) {
      toast.error("Please select a payment method");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/booking/payment`,
        {
          paymentMethod,
          bookingId: state.bookingId,
        },
      );

      if (response.data.success) {
        setBookingData(response.data.data);
        setPaymentDone(true);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (!state)
    return (
      <div className="h-screen w-screen text-4xl flex justify-center items-center">
        Invalid access
      </div>
    );

  if (paymentDone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-6 rounded shadow bg-white text-center flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-green-600">
            ✅ Payment Done
          </h2>
          <div>Booking ID : {bookingData.bookingId}</div>
          <div>Mode of Payment : {bookingData.paymentMode}</div>
          <div>Payment Status : {bookingData.paymentStatus}</div>
          <div>Booking Status : {bookingData.bookingStatus}</div>
          <p className="mt-2">Thank you for your payment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading && <Loader />}
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
