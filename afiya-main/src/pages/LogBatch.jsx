import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogBatchForm = () => {
  const [formData, setFormData] = useState({
    drugName: "",
    batchNumber: "",
    manufacturer: "",
    manufactureDate: "",
    expiryDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://afiya-backend.onrender.com/api/register-drug", formData);

      toast.success(
        `✅ ${formData.drugName} (${formData.batchNumber}) logged on Hedera!`,
        { position: "top-right" }
      );

      setFormData({
        drugName: "",
        batchNumber: "",
        manufacturer: "",
        manufactureDate: "",
        expiryDate: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to log batch. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Log New Drug Batch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Drug Name
            </label>
            <input
              type="text"
              name="drugName"
              placeholder="e.g. Paracetamol"
              value={formData.drugName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Batch Number
            </label>
            <input
              type="text"
              name="batchNumber"
              placeholder="e.g. BATCH-2025-001"
              value={formData.batchNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Manufacturer
            </label>
            <input
              type="text"
              name="manufacturer"
              placeholder="e.g. Emzor Pharmaceuticals"
              value={formData.manufacturer}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Manufacture Date
              </label>
              <input
                type="date"
                name="manufactureDate"
                value={formData.manufactureDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Expiry Date
              </label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg mt-4 transition font-medium ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Logging on Hedera..." : "Log Batch"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogBatchForm;
