import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { rooms } from "../../data/rooms";
import { PaystackButton } from "react-paystack";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [paymentOption, setPaymentOption] = useState("payNow");

  useEffect(() => {
    const fetchRoom = () => {
      setLoading(true);
      const r = rooms.find((room) => room.id === id);
      setRoom(r);
      setLoading(false);
    };
    fetchRoom();
  }, [id]);

  if (loading)
    return (
      <div className="text-center text-lg text-gray-600">
        Loading room details...
      </div>
    );
  if (!room)
    return (
      <div className="text-center text-lg text-red-500">Room not found.</div>
    );

  const paystackProps = {
    email,
    amount: room.price * 100,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey: import.meta.env.VITE_PAYSTACK_TEST_PUBLIC_KEY,
    text: "Pay Now",
    onSuccess: async (response) => {
      console.log("Payment Successful", response);
      try {
        toast.success("Payment successful! Redirecting to homepage...", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => navigate("/"), 3000);
      } catch (error) {
        console.error("Error processing payment:", error);
        toast.error("Something went wrong while processing your payment.");
      }
    },
    onClose: () => console.log("Payment closed"),
  };

  const handlePayOnArrival = () => {
    if (!name || !email || !phone) {
      alert("Please fill out all the fields to confirm your booking.");
      return;
    }
    console.log("Booking confirmed for Pay on Arrival:", {
      name,
      email,
      phone,
      room,
    });
    setBookingConfirmed(true);

    toast.success("Your booking has been confirmed! Please pay on arrival.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-5 bg-gray-100">
        <ToastContainer />
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-4xl overflow-hidden">
          <img
            src={room.images[0]}
            alt={room.title}
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-5 flex flex-col justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {room.title} Room
            </h1>
            <p className="text-lg text-gray-600 mb-2">Type: {room.type}</p>
            <p className="text-gray-700 mb-4">{room.description}</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Price: GHS {room.price} per night
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Amenities:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {room.internet && <li>Free Internet</li>}
              {room.breakfast && <li>Breakfast Included</li>}
              {room.dstv && <li>DSTV</li>}
              {room.phone && <li>Telephone</li>}
              {room.aircondition && <li>Air Conditioning</li>}
              {room.waterheater && <li>Water Heater</li>}
              {room.fridge && <li>Mini Fridge</li>}
              {room.wardrobe && <li>Wardrobe</li>}
            </ul>
            <form className="mb-4">
              <div className="mb-3">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Phone:</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Payment Option:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={paymentOption}
                onChange={(e) => setPaymentOption(e.target.value)}
              >
                <option value="payNow">Pay Now</option>
                <option value="payOnArrival">Pay on Arrival</option>
              </select>
            </div>
            {paymentOption === "payNow" ? (
              <PaystackButton
                className="px-6 py-3 bg-[#8736E9] text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                {...paystackProps}
              />
            ) : (
              <button
                onClick={handlePayOnArrival}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
              >
                Pay on Arrival
              </button>
            )}
            {bookingConfirmed && (
              <p className="mt-4 text-green-600 font-semibold">
                Your booking has been confirmed. Please pay on arrival.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomDetails;
