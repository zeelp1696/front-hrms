import { useState } from 'react';
import { Upload, Eye, EyeOff } from 'lucide-react';

export function Register() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [logo, setLogo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // No redirect - as requested
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      
      <form
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow"
        onSubmit={handleSubmit}
      >
        {/* Logo Upload */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <input
              type="file"
              id="logo-upload"
              className="hidden"
              accept="image/*"
              onChange={handleLogoUpload}
            />
            <label
              htmlFor="logo-upload"
              className="flex items-center justify-center w-48 h-16 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {logo ? (
                <img src={logo} alt="Logo" className="h-full w-full object-contain rounded" />
              ) : (
                <span className="text-gray-500 text-sm">App/Web Logo</span>
              )}
            </label>
          </div>
        </div>

        {/* Company Name with Upload Icon */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <div className="relative">
            <input
              type="text"
              name="companyName"
              className="w-full px-3 py-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => document.getElementById('logo-upload').click()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 p-1.5 rounded hover:bg-blue-600"
            >
              <Upload className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
          type="submit"
        >
          Sign Up
        </button>

        {/* Already have account */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

