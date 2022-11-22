import { revealPage } from "./revealPage.js";
import { MobileNavbar } from "./MobileNavbar.js";

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();
