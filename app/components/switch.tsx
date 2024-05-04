import React from "react";

interface ToggleSwitchProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  readOnly?: boolean;
}

const ToggleSwitch: React.FC<
  ToggleSwitchProps
> = ({
  label,
  value,
  checked,
  onChange,
  readOnly = false,
}) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center">
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={checked}
            onChange={handleToggle}
            disabled={readOnly}
          />
          <div
            className={`block bg-gray-200 w-10 h-6 rounded-full transition ${
              checked
                ? "transform  bg-green-200"
                : ""
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
              checked
                ? "transform translate-x-full bg-green-400"
                : ""
            }`}
          ></div>
        </div>
        {!checked && (
          <div className="ml-3 text-gray-700 font-medium">
            {label}
          </div>
        )}
        {checked && (
          <div className="ml-3 text-gray-700 font-medium">
            {value}
          </div>
        )}
      </label>
    </div>
  );
};

export default ToggleSwitch;
