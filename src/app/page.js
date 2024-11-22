import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div>

      <h1>Taengoo</h1>

      <Image className={styles.img} src='/images/Taeyeon.jpg' alt=" Imagem da Tae" width={400} height={400} />
      
    </div>
  );
}
 