const Paths = {
  // Common
  home: "/",
  403: "/403",
  systemError: "/systemError",
  pageNotFound: "*",

  // Public
  login: "/login",
  register: "/register",
  help: "/help",
  resetPassword: "/resetPassword",
  updateMobile: "/updateMobile",

  // Protected
  search: "/search",
  book: "/book",
};

export default Paths;

export const publicRoutes = [
  Paths.login,
  Paths.register,
  Paths.help,
  Paths.resetPassword,
  Paths.updateMobile,
];

export const protectedRoutes = [Paths.search, Paths.book];
