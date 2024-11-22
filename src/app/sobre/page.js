import styles from "./sobre.module.css";
import Image from "next/image";
export default function Sobre() {
    return (
        <main>
            <h1> Sobre a Tae </h1>
            <p> Kim Tae-yeon ( em coreano :  김태연 ; nascida em 9 de março de 1989), conhecida mononimamente como Taeyeon , é uma cantora sul-coreana.
                Ela estreou como membro do grupo feminino Girls' Generation em agosto de 2007, que se tornou uma das artistas mais vendidas na Coreia do Sul e um dos grupos de K-pop mais conhecidos em todo o mundo.
                Desde então, ela participou de outros projetos da SM Entertainment , incluindo Girls' Generation-TTS , SM the Ballad , Girls' Generation-Oh!GG e o supergrupo Got the Beat . 
            </p>


            <Image className={styles.img_sobre} src='/images/Tae_aero.jpg' alt="gfg" width={450} height={500} />
        </main>
         
);
}


