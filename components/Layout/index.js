import theme from "../../theme/Layout.module.scss";

const Layout = ({ children }) => {
  return <div className={theme.Layout}>{children}</div>;
};

export default Layout;
