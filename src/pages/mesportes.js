import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function mesportes (){
    return <>
        <Menu/>
        <Container className="text-center rounded-pill border border-primary">
        Produtos de esportes
        </Container>
        <Footer />
    </>
}