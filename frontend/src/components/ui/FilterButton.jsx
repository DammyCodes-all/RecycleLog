// components/Filter.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

const FilterPanel = ({ onClose }) => (
  <div className="fixed inset-0 bg-opacity-30 z-40" onClick={onClose}>
    <div
      className="absolute top-0 right-0 backdrop-blur-sm bg-white w-4/5 max-w-sm h-full p-6 overflow-y-auto shadow-lg"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-green-900">Filters</h3>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      {/* Example filter fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Ward</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>All Wards</option>
            <option>Ward A</option>
            <option>Ward B</option>
            <option>Ward C</option>
            <option>Ward D</option>
            <option>Ward E</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Waste Type</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>All Types</option>
            <option>Glass</option>
            <option>Paper</option>
            <option>Plastic</option>
            <option>Organic</option>
            <option>E-waste</option>
            <option>Mixed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Fill % Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        Apply Filters
      </button>
    </div>
  </div>
);

const FilterButton = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownRef = useRef(null);

  // close dropdown on outside click (desktop version)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 bg-white text-green-600 px-4 py-2 rounded-md shadow-sm hover:bg-green-50"
      >
        <span className="text-sm font-medium hidden md:block">Filters</span>
        <Filter className="w-4 h-4" />
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Desktop dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="hidden md:block absolute mt-2 right-0 bg-white rounded-md shadow-lg z-50 w-64 p-4"
        >
          <FilterPanel onClose={() => setOpen(false)} />
        </div>
      )}

      {/* Mobile slide-in */}
      {open && <FilterPanel onClose={() => setOpen(false)} />}
    </>
  );
};

export default FilterButton;
