import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  variant = "primary",
  label,
  onClick,
  type = "button",
  disabled = false,
  children,
  ...props
}) => (
  <button
    type={type}
    className={classNames(
      "px-4 py-2 rounded font-semibold transition focus:outline-none",
      {
        "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
        "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
        "border border-blue-600 text-blue-600 hover:bg-blue-50 bg-white":
          variant === "outline",
        "opacity-50 cursor-not-allowed": disabled,
      }
    )}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {label || children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
