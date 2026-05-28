export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e4e2e1", "primary-container": "#0070ea", "tertiary": "#006b24", "error-container": "#ffdad6", "inverse-primary": "#adc7ff", "secondary-fixed-dim": "#bfc8d0", "tertiary-container": "#008730", "surface-container-low": "#f6f3f2", "surface-container-lowest": "#ffffff", "on-tertiary-container": "#f7fff2", "on-secondary-fixed-variant": "#3f484f", "surface-container": "#f0eded", "on-primary-fixed": "#001a41", "error": "#ba1a1a", "background": "#fbf9f8", "primary-fixed": "#d8e2ff", "on-tertiary-fixed": "#002106", "surface-tint": "#005bc0", "outline-variant": "#c1c6d7", "primary-fixed-dim": "#adc7ff", "on-tertiary-fixed-variant": "#00531a", "tertiary-fixed": "#83fc8e", "on-surface-variant": "#414754", "surface-dim": "#dcd9d9", "primary": "#0059bb", "surface-bright": "#fbf9f8", "secondary-fixed": "#dbe4ed", "on-primary-container": "#fefcff", "on-surface": "#1b1c1c", "outline": "#717786", "surface-container-highest": "#e4e2e1", "on-secondary-fixed": "#141d23", "on-background": "#1b1c1c", "inverse-surface": "#303030", "tertiary-fixed-dim": "#66df75", "surface": "#fbf9f8", "secondary": "#575f67", "on-secondary": "#ffffff", "secondary-container": "#d8e1ea", "on-primary-fixed-variant": "#004493", "on-error": "#ffffff", "on-primary": "#ffffff", "on-error-container": "#93000a", "on-tertiary": "#ffffff", "surface-container-high": "#eae8e7", "on-secondary-container": "#5b646b", "inverse-on-surface": "#f3f0f0"
      },
      spacing: { "gutter": "16px", "md": "16px", "xl": "32px", "lg": "24px", "xs": "4px", "sm": "12px", "container-margin-desktop": "40px", "container-margin-mobile": "16px", "base": "8px" },
      fontFamily: { "headline-md": ["Inter"], "label-md": ["Inter"], "body-lg": ["Inter"], "headline-lg": ["Inter"], "headline-lg-mobile": ["Inter"], "body-sm": ["Inter"] }
    }
  }
}