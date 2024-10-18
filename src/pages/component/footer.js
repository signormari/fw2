import { Container } from "react-bootstrap"
import style from "@/styles/Footer.module.css";

export default function Footer() {
    return <>
    <Container> 
        <footer className={`${style.footerGradiente}  bd-sucess rounded rounded-3 border border-info-subtle`}>
            <ul className="nav justify-content-center border-bottom border-1 border-sucess-subtle">
                <li className=""> Disciplina de Frameworks 2</li>
            </ul>
            <p className="text-center">&copy; 2024 - IFMS </p>
        </footer> 
    </Container>
    </>     
}
