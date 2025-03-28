// src/components/InputForm.jsx
import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: 22,
    height: 65,
    weight: 145,
    sex: 'F',
    fruitsVeg: 6,
    activity: 'Moderate',
    smoking: 'Never',
    alcohol: 'None',
    sleep: 'Fair',
    stress: 3,
    hasBestFriend: 'Y',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Lifestyle Forecast</h2>

      {/* Row of Number Inputs and Sex */}
      <div className="flex gap-4 mb-4 items-center flex-wrap">
        <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" className="w-24 p-1 border rounded text-sm" />
        <input name="height" type="number" value={formData.height} onChange={handleChange} placeholder="Height" className="w-24 p-1 border rounded text-sm" />
        <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="Weight" className="w-24 p-1 border rounded text-sm" />

        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium">Sex:</span>
          {['F', 'M'].map((value) => (
            <label key={value} className="flex items-center gap-1 text-sm">
              <input type="radio" name="sex" value={value} checked={formData.sex === value} onChange={handleChange} /> {value}
            </label>
          ))}
        </div>
      </div>

      <div className="col-span-2">
        <label className="block">
          <span className="block font-medium">Fruits/Veg Per Day: {formData.fruitsVeg}</span>
          <div className="relative">
            <input type="range" name="fruitsVeg" min="0" max="7" step="1" value={formData.fruitsVeg} onChange={handleChange} className="w-full accent-blue-500" />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-1 -translate-y-1/2">
              {[...Array(8).keys()].map((n) => (
                <span key={n} className="w-2 h-2 bg-gray-400 rounded-full"></span>
              ))}
            </div>
          </div>
        </label>
      </div>

      {[ 
        { name: 'activity', label: 'Physical Activity Level', options: ['Sedentary', 'Moderate', 'Vigorous'] },
        { name: 'smoking', label: 'Smoking Status', options: ['Current', 'Former', 'Never'] },
        { name: 'alcohol', label: 'Alcohol Use', options: ['None', 'Moderate', 'Heavy'] },
        { name: 'sleep', label: 'Sleep Quality', options: ['Poor', 'Fair', 'Good'] },
      ].map(({ name, label, options }) => (
        <div key={name} className="col-span-2">
          <span className="block font-medium">{label}:</span>
          <div className="flex gap-4 mt-1">
            {options.map((value) => (
              <label key={value} className="flex items-center gap-2 text-sm">
                <input type="radio" name={name} value={value} checked={formData[name] === value} onChange={handleChange} /> {value}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="col-span-2">
        <label className="block">
          <span className="block font-medium">Stress Level: {formData.stress}</span>
          <div className="relative">
            <input type="range" name="stress" min="1" max="5" step="1" value={formData.stress} onChange={handleChange} className="w-full accent-blue-500" />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-1 -translate-y-1/2">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className="w-2 h-2 bg-gray-400 rounded-full"></span>
              ))}
            </div>
          </div>
        </label>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="col-span-1">
          <span className="block font-medium">Do you have a best friend?</span>
          <div className="flex gap-4 mt-1">
            {['Y', 'N'].map((value) => (
              <label key={value} className="flex items-center gap-2">
                <input type="radio" name="hasBestFriend" value={value} checked={formData.hasBestFriend === value} onChange={handleChange} /> {value}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 self-end">
          Calculate
        </button>
      </div>
    </form>
  );
}
