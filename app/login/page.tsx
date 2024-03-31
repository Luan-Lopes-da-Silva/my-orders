import style from './login.module.scss'

export default function Page(){
    return(
        <div className={style.container}>
        <form>
            <label htmlFor="">Name</label>
            <input type="text" />
        
            <label htmlFor="">Password</label>
            <input type="text" />
        </form>
        </div>
    )
}