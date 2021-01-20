import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fish";

const Header = () => {
  return (
    <header class="header">
      <Icon icon={locationIcon} />
      <h1>Orca Tracker</h1>
    </header>
  );
};
export default Header;
