import { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";
import { LogoMenu } from "../../assets";
import {
  MdOutlineSpaceDashboard as DashboardIcon,
  MdOutlineAddBox as AddIcon,
  MdOutlineListAlt as ListIcon,
  MdOutlineDashboard as CardsIcon,
} from "react-icons/md";
import "./styles.scss";

function Sidebar() {
  const { active, setActive } = useContext(GlobalStateContext);

  const activeDashboard = () => {
    setActive({
      dashboard: "active",
      new: "inactive",
      list: "inactive",
      card: "inactive",
    });
  };

  const activeNew = () => {
    setActive({
      dashboard: "inactive",
      new: "active",
      list: "inactive",
      card: "inactive",
    });
  };

  const activeList = () => {
    setActive({
      dashboard: "inactive",
      new: "inactive",
      list: "active",
      card: "inactive",
    });
  };

  const activeCards = () => {
    setActive({
      dashboard: "inactive",
      new: "inactive",
      list: "inactive",
      card: "active",
    });
  };

  return (
    <section className={"sidebar"}>
      <section className={"sidebar__menu"}>
        <img src={LogoMenu} className={'sidebar__logo'} alt={"logo"} />

        <ul>
          <li onClick={activeDashboard} className={active.dashboard}>
            <DashboardIcon className={"sidebar__icon"} />
            Dashboard
          </li>
          <li onClick={activeNew} className={active.new}>
            <AddIcon className={"sidebar__icon"} />
            Novo
          </li>
          <li onClick={activeList} className={active.list}>
            <ListIcon className={"sidebar__icon"} />
            Lista
          </li>
          <li onClick={activeCards} className={active.card}>
            <CardsIcon className={"sidebar__icon"} />
            Cards
          </li>
        </ul>
      </section>
      <article className={"sidebar__line"}></article>

      <section className={"sidebar__options"}>
        <ul>
          <li>About</li>
          <li>Linkedin</li>
          <li>github</li>
          <li>Sair</li>
        </ul>
      </section>
    </section>
  );
}

export default Sidebar;
