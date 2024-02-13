export const colors = {
  //all colors shades are from https://www.color-blindness.com/color-name-hue/
  // gray shades hex
  "gray-50": "#f9fafb",
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  // red shades hex
  "red-50": "#fef2f2",
  "red-100": "#fee2e2",
  "red-200": "#fecaca",
  "red-300": "#fca5a5",
  "red-400": "#f87171",
  "red-500": "#ef4444",
  "red-600": "#dc2626",
  "red-700": "#b91c1c",
  "red-800": "#991b1b",
  "red-900": "#7f1d1d",
  // yellow shades hex
  "yellow-50": "#fffbeb",
  "yellow-100": "#fef3c7",
  "yellow-200": "#fde68a",
  "yellow-300": "#fcd34d",
  "yellow-400": "#fbbf24",
  "yellow-500": "#f59e0b",
  "yellow-600": "#d97706",
  "yellow-700": "#b45309",
  "yellow-800": "#92400e",
  "yellow-900": "#78350f",
  // green shades hex
  "green-50": "#ecfdf5",
  "green-100": "#d1fae5",
  "green-200": "#a7f3d0",
  "green-300": "#6ee7b7",
  "green-400": "#34d399",
  "green-500": "#10b981",
  "green-600": "#059669",
  "green-700": "#047857",
  "green-800": "#065f46",
  "green-900": "#064e3b",
  // blue shades hex
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "blue-300": "#93c5fd",
  "blue-400": "#60a5fa",
  "blue-500": "#3b82f6",
  "blue-600": "#2563eb",
  "blue-700": "#1d4ed8",
  "blue-800": "#1e40af",
  "blue-900": "#1e3a8a",
  // indigo shades hex
  "indigo-50": "#eef2ff",
  "indigo-100": "#e0e7ff",
  "indigo-200": "#c7d2fe",
  "indigo-300": "#a5b4fc",
  "indigo-400": "#818cf8",
  "indigo-500": "#6366f1",
  "indigo-600": "#4f46e5",
  "indigo-700": "#4338ca",
  "indigo-800": "#3730a3",
  "indigo-900": "#312e81",
  // purple shades hex
};

//color shades based on theme like light, dark, blue, green, brown, pink etc.
export const light = {
  name: "light",
  colors: colors,
  primary: {
    header: colors["gray-100"],
    background: colors["gray-50"],
    footer: colors["gray-700"],
    text: colors["gray-900"],
    border: colors["gray-400"],
    card: {
      background: colors["gray-100"],
      title: colors["gray-900"],
      text: colors["gray-700"],
      border: colors["gray-300"],
    },
    button: {
      background: colors["blue-500"],
      color: colors["gray-50"],
      border: colors["blue-500"],
      hover: {
        background: colors["blue-600"],
        color: colors["gray-50"],
        border: colors["blue-600"],
      },
    },
  },
};

export const dark = {
  name: "dark",
  colors: colors,
  primary: {
    header: colors["gray-800"],
    background: colors["gray-900"],
    card: {
      background: colors["gray-800"],
      title: colors["gray-100"],
      text: colors["gray-400"],
      border: colors["gray-700"],
    },
    footer: colors["gray-100"],
    text: colors["gray-100"],
    border: colors["gray-100"],
    button: {
      background: colors["blue-800"],
      color: colors["gray-50"],
      border: colors["blue-500"],
      hover: {
        background: colors["blue-600"],
        color: colors["gray-50"],
        border: colors["blue-600"],
      },
    },
  },
};

export const blue = {
  name: "blue",
  colors: colors,
  primary: {
    header: colors["blue-300"],
    background: colors["blue-50"],
    footer: colors["blue-700"],
    text: colors["blue-900"],
    border: colors["blue-400"],
    card: {
      background: colors["blue-100"],
      title: colors["blue-900"],
      text: colors["blue-700"],
      border: colors["blue-300"],
    },
    button: {
      background: colors["blue-400"],
      color: colors["gray-50"],
      border: colors["blue-500"],
      hover: {
        background: colors["blue-600"],
        color: colors["gray-50"],
        border: colors["blue-600"],
      },
    },
  },
};

export const green = {
  name: "green",
  colors: colors,
  primary: {
    header: colors["green-300"],
    background: colors["green-50"],
    footer: colors["green-700"],
    text: colors["green-900"],
    border: colors["green-400"],
    card: {
      background: colors["green-100"],
      title: colors["green-900"],
      text: colors["green-700"],
      border: colors["green-300"],
    },
    button: {
      background: colors["green-400"],
      color: colors["gray-50"],
      border: colors["green-500"],
      hover: {
        background: colors["green-600"],
        color: colors["gray-50"],
        border: colors["green-600"],
      },
    },
  },
};

export const brown = {
  name: "brown",
  colors: colors,
  primary: {
    header: colors["yellow-300"],
    background: colors["yellow-50"],
    footer: colors["yellow-700"],
    text: colors["yellow-900"],
    border: colors["yellow-400"],
    card: {
      background: colors["yellow-100"],
      title: colors["yellow-900"],
      text: colors["yellow-700"],
      border: colors["yellow-300"],
    },
    button: {
      background: colors["yellow-400"],
      color: colors["gray-50"],
      border: colors["yellow-500"],
      hover: {
        background: colors["yellow-600"],
        color: colors["gray-50"],
        border: colors["yellow-600"],
      },
    },
  },
};

export const pink = {
  name: "pink",
  colors: colors,
  primary: {
    header: colors["red-300"],
    background: colors["red-50"],
    footer: colors["red-700"],
    text: colors["red-900"],
    border: colors["red-400"],
    card: {
      background: colors["red-100"],
      title: colors["red-900"],
      text: colors["red-700"],
      border: colors["red-300"],
    },
    button: {
      background: colors["red-400"],
      color: colors["gray-50"],
      border: colors["red-500"],
      hover: {
        background: colors["red-600"],
        color: colors["gray-50"],
        border: colors["red-600"],
      },
    },
  },
};

export const red = {
  name: "red",
  colors: colors,
  primary: {
    header: colors["red-700"],
    background: colors["red-400"],
    footer: colors["red-700"],
    text: colors["red-900"],
    border: colors["red-400"],
    card: {
      background: colors["red-300"],
      title: colors["red-900"],
      text: colors["red-700"],
      border: colors["red-300"],
    },
    button: {
      background: colors["red-400"],
      color: colors["gray-50"],
      border: colors["red-500"],
      hover: {
        background: colors["red-600"],
        color: colors["gray-50"],
        border: colors["red-600"],
      },
    },
  },
};
