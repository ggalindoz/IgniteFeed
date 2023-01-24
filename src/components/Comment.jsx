import { ThumbsUp, Trash } from "phosphor-react";
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="http://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Galindo</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:35">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} weight="bold" />
                        </button>
                    </header>

                    <p>Muito bom, Devon. Parabéns!</p>
                </div>

                <footer className={styles.footer}>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}