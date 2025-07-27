import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { bookMercy } from "../../api/apis";
import { toast } from "react-toastify";

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minutes = Array.from({ length: 60 }, (_, i) => i);
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    website: "",
    pastEventLink: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    eventDate: "",
    eventHour: "",
    eventMinute: "",
    eventPeriod: "",
    description: "",
    affirmation: "",
    rescind: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: bookMercy,
    onError: (error: any) => {
      toast.error(error?.response?.data?.message ?? "Something went wrong");
    },
    onSuccess: () => {
      toast.success("Successful. We would get back to you soon!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="max-w-3xl mx-auto ">
      <div className="max-w-3xl mx-auto p-8">
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Name of Event/Church/Organization */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name of Event/Church/Organization *
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Website / URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Website / URL *
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Link to Past Organized Event/Program */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Link to Past Organized Event/Program *
            </label>
            <input
              type="url"
              name="pastEventLink"
              value={formData.pastEventLink}
              onChange={handleChange}
              placeholder="YouTube Video link, Google drive link, etc."
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Event Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 mb-2"
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State/Province"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip/Postal"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Event Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Date *
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Time of Event */}
          {/* Time of Event */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Time of Event
            </label>
            <div className="flex gap-2 items-center">
              <select
                name="eventHour"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
                value={formData.eventHour}
                onChange={handleChange}
              >
                <option value="" disabled selected></option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <p className="text-[#000] ">:</p>
              <select
                name="eventMinute"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
                value={formData.eventMinute}
                onChange={handleChange}
              >
                {minutes.map((min) => (
                  <option key={min} value={min}>
                    {min}
                  </option>
                ))}
              </select>

              <select
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                name="eventPeriod"
                required
                value={formData.eventPeriod}
                onChange={handleChange}
              >
                <option value="" disabled selected></option>
                {["AM", "PM"].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Brief Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Briefly Describe Event/Program *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>

          {/* Affirmation */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">
              Do you affirm that the information provided in this form is valid?
              *
            </p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="affirmation"
                  value="yes"
                  checked={formData.affirmation === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <p className="text-[#000]">Yes</p>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="affirmation"
                  value="no"
                  checked={formData.affirmation === "no"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <p className="text-[#000]">No</p>
              </label>
            </div>
          </div>

          {/* Right to Rescind */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">
              We reserve the right to rescind acceptance if we find that the
              information provided here is not accurate. *
            </p>
            <div className="flex items-center space-x-4 ">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rescind"
                  value="yes"
                  checked={formData.rescind === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <p className="text-[#000]">Yes</p>
              </label>
              <label className="flex items-center">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="rescind"
                  value="no"
                  className="mr-2"
                  checked={formData.rescind === "no"}
                />
                <p className="text-[#000]">No</p>
              </label>
            </div>
          </div>
          <div className="text-left">
            <button
              type="submit"
              className="px-6 py-2 text-white font-semibold rounded-md goldAnimate-pulse btnGradient"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Submit Button */}
      </div>
    </div>
  );
}

export default BookingForm;
