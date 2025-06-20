import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

type FormField =
  | "firstName"
  | "middleName"
  | "lastName"
  | "dob"
  | "age"
  | "gender"
  | "phone"
  | "email"
  | "address"
  | "nationality"
  | "passportNumber";

type FormData = Record<FormField, string>;

const TravelForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    nationality: "",
    passportNumber: "",
  });

  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-calculate age
  useEffect(() => {
    if (formData.dob) {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      const age =
        today.getFullYear() -
        birthDate.getFullYear() -
        (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);
      setFormData((prev) => ({ ...prev, age: age.toString() }));
    }
  }, [formData.dob]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as FormField]: value });
    setErrors({ ...errors, [name as FormField]: "" });
  };

  const validate = () => {
    const newErrors: Partial<Record<FormField, string>> = {};
    const requiredFields: FormField[] = [
      "firstName",
      "lastName",
      "dob",
      "age",
      "gender",
      "phone",
      "email",
      "address",
      "nationality",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "Required";
      }
    });

    if (formData.nationality.toLowerCase() !== "nepali" && !formData.passportNumber) {
      newErrors.passportNumber = "Passport Number is required for non-Nepali nationality.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Submitting...");

    try {
      await fetch("shreetesh032@gmail.com", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Submitted Successfully ✅", { id: toastId });
      setFormData({
        firstName: "",
        middleName: "hhhhhhhhh",
        lastName: "",
        dob: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        nationality: "",
        passportNumber: "",
      });
    } catch (err) {
      toast.error("Failed to submit ❌", { id: toastId });
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Traveler Information Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {([
            { label: "First Name", name: "firstName" },
            { label: "Middle Name", name: "middleName" },
            { label: "Last Name", name: "lastName" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Age", name: "age", readOnly: true },
            { label: "Gender", name: "gender", type: "select" },
            { label: "Phone", name: "phone" },
            { label: "Email", name: "email", type: "email" },
            { label: "Address", name: "address" },
            { label: "Nationality", name: "nationality" },
          ] as {
            label: string;
            name: FormField;
            type?: string;
            readOnly?: boolean;
          }[]).map(({ label, name, type = "text", readOnly }) => (
            <div key={name}>
              <label className="block font-medium mb-1">{label} *</label>
              {type === "select" ? (
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  readOnly={readOnly}
                  className={`w-full border p-2 rounded-md ${readOnly ? "bg-gray-100" : ""}`}
                />
              )}
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}

          {formData.nationality.toLowerCase() !== "nepali" && (
            <div>
              <label className="block font-medium mb-1">Passport Number *</label>
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
              {errors.passportNumber && (
                <p className="text-red-500 text-sm">{errors.passportNumber}</p>
              )}
            </div>
          )}
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-2 rounded-full font-semibold hover:scale-105 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TravelForm;
