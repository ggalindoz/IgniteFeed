import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="http://github.com/diego3g.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:35">Publicado há 1h</time>
            </header>

            <div className={styles.content} >
                <p>Fala galera!!</p>
                <p>Acabei de subir mais um portifólio. É um projeto que fiz no NLW Return, evento da RocketSeat.</p>
                <p><a href='#'>jane.design/doctorcare</a> </p>
                <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu comentário!</strong>
                <textarea placeholder='Deixe um comentário' />
                <button type='submit'>Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}