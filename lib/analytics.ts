declare function gtag(...args: unknown[]): void;

export function trackWhatsApp(location: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", "click_whatsapp", { location });
  }
}

export function trackFreeTrial(location: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", "click_free_trial", { location });
  }
}
