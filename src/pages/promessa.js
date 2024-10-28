import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import {useEffect, useState} from "react";

export default function Promessa(){
    const[prometido, setPrometido] = useState("");
    useEffect(() => {
        setTimeout(async ()=>{
            document.title="Promessa é divida";
            const altera = await mudaTexto("ola texto novo");
            setPrometido(altera);
        }, 2000);
    });
    

    return <>
    <Menu />
    <Container>
        Promessa {prometido === "" ? <img src="./loading.gif" width={30} height={30}></img> : prometido}
    </Container>
    <Footer />
    </>
}
function mudaTexto(texto){
    return new Promise ((resolva) =>
    setTimeout(() => {
        resolva(texto)
    }, 1000)
)
};