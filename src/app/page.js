import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    
    
   
    

      <div>
        <h1 className={styles.h1}>Taengoo</h1>
        <Image className={styles.img} src='/images/Taeyeon_2.jpg' alt=" Imagem da Tae" width={625} height={500} />
      
      </div>

    
  );
}
 