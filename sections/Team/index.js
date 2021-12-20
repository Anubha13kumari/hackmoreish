import Div from "../../components/Div";
import Cards from "../../components/Cards";
import styles from "../../styles/team.module.css";
import teams from "./team";

export default function Team(){
    return (
        <Div>
            <Cards title={"Rishabh Raghwendra"} url={""} width={100} height={100} description={"Lead organizer"} alt={"none"} className={`${styles.image}`}></Cards>
        </Div>
    );
}