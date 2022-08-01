import { de } from "../data/translation.json";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

document.addEventListener("alpine:init", () => {
  // Mount external functions for utility
  Alpine.data("utility", () => ({
    async action({ label, labelActive, duration = 2250, callback = () => {} }) {
      this.$data.label = labelActive;
      callback();
      await sleep(duration);
      this.$data.label = label;
    },

    // Toggle About
    about: false,
    toggleAbout() {
      document.body.classList.toggle("no-scroll");
      this.about = !this.about;
    },
    // Get Headlines
    fetchHeadlines() {
      const pageMarkdown = document.querySelector(".page_markdown");
      const headlines = pageMarkdown.querySelectorAll("h1,h2,h3,h4,h5,h6");
      return headlines;
    },
    // Copy Page Link
    copyLink() {
      this.action({
        label: de.actions.copyLink.label,
        labelActive: de.actions.copyLink.labelActive,
        callback: () => {
          navigator.clipboard.writeText(location.href);
        },
      });
    },

    async sharePage() {
      this.action({
        label: de.actions.sharePage.label,
        labelActive: de.actions.sharePage.labelActive,
        callback: async () => {
          try {
            await navigator.share({
              url: location.href,
              title: document.title,
            });
          } catch {
            await navigator.clipboard.writeText(location.href);
          }
        },
      });
    },
  }));
});
