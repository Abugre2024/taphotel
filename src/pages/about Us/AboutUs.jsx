import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaSwimmingPool,
  FaUtensils,
  FaWifi,
  FaBusinessTime,
} from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About TAP Hotel
      </motion.h1>
      <motion.p
        className="text-center text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A modern and luxurious destination in the heart of Bolgatanga, offering
        comfort, convenience, and top-tier hospitality.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Services
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaSwimmingPool className="text-blue-500" /> Outdoor Swimming
                Pool
              </li>
              <li className="flex items-center gap-2">
                <FaUtensils className="text-green-500" /> Executive Restaurant
              </li>
              <li className="flex items-center gap-2">
                <FaWifi className="text-purple-500" /> Complimentary Wi-Fi
              </li>
              <li className="flex items-center gap-2">
                <MdMeetingRoom className="text-red-500" /> Conference & Meeting
                Rooms
              </li>
              <li className="flex items-center gap-2">
                <FaBusinessTime className="text-yellow-500" /> Business Center
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-4">
              At TAP Hotel, we blend modern comfort with traditional
              hospitality, ensuring that every guest experiences exceptional
              service. Enjoy our luxurious amenities, spacious rooms, and
              top-quality dining.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Book Your Stay
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
