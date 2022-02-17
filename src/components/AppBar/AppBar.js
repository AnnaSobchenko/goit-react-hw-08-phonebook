import Navigation from "components/Navigation/Navigation";
import s from "./AppBar.module.css"

const AppBar = () => {
    return (<div className={s.body}>
        <header className={s.header}>
            <Navigation />
        </header></div>
      );
}
 
export default AppBar;