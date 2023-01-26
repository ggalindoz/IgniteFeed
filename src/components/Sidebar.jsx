import style from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

            <div className={style.profile}>

                <Avatar
                    src="https://scontent.fgyn3-1.fna.fbcdn.net/v/t1.6435-9/183537592_3931815706912843_6588295288398450559_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFp2fTr1uZHw92Kp9mqUsNUhWkpXBcgKTiFaSlcFyApOLv0gcJW1cKS8fpMXOacD9w5u2vC-6-Rs7gCeCEy-w_c&_nc_ohc=G3pdkzcxZFQAX8zA8or&_nc_ht=scontent.fgyn3-1.fna&oh=00_AfBCgDBrvxSF5jF1ShzPeeP-AaoRZzy7LL-L21K-xOz20A&oe=63E54CDB" alt="" />
                <strong>Guilherme Galindo</strong>
                <span>Desenvolvedor</span>

            </div>

            <footer>

                <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
            </footer>

        </aside>
    )
}