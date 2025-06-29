import React from "react";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaSmile, FaUsers } from "react-icons/fa";

const KailashYatraCard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Kailash Mansarovar Yatra by Helicopter
      </h1>
      <div className="flex items-center space-x-2 text-green-600 mb-4">
        <FaMapMarkerAlt />
        <span className="text-sm">India , India</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 text-sm text-gray-800">
        <div className="flex items-center space-x-2">
          <FaClock className="text-green-600" />
          <span>
            <span className="font-semibold">Duration :</span> 10 Days 9 Nights
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMoneyBillWave className="text-green-600" />
          <span>
            <span className="font-semibold">Price From :</span> $2,750.00
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-green-600" />
          <span>
            <span className="font-semibold">Start Location :</span> Kathmandu
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaSmile className="text-green-600" />
          <span>
            <span className="font-semibold">Age Range :</span> 18
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUsers className="text-green-600" />
          <span>
            <span className="font-semibold">Total Seats :</span> 220/250
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold">A↔Z</span>
          <span className="text-gray-700">Language : English</span>
        </div>
      </div>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold text-gray-900 mb-2">Overview</h2>
      <h3 className="text-md font-semibold text-gray-800 mb-2">
        General Information Regarding Kailash Tour
      </h3>
      <ul className="list-decimal list-inside text-sm space-y-2 text-gray-700">
        <li>
          If suddenly program has changed cause of weather problem, natural disaster, technical problem and political movement, all additional expenses will bear by yourself
        </li>
        <li>
          Necessary to send your document (color Scan copy of Passport) 30 days before.
        </li>
        <li>
          You must follow the Cancellation Policy
        </li>
        <li>
          Passport/ official documents:- No Need Visa & Passport for Indian Citizen in Nepal. But compulsory visa and 6 Months Valid Passport For Kailash Yatra with 4 passport size photographs. Food during tour( yatra) Our cooks will be traveling with you during...
        </li>
      </ul>
    </div>
  );
};

export default KailashYatraCard;
