document.addEventListener("alpine:init", () => {
  // Mount external functions for utility
  Alpine.data("utils", () => ({
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
      navigator.clipboard.writeText(location.href);
    },
  }));
});
