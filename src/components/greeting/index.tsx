import style from './style.module.sass'

const Greeting = () => {
  return (
    <div className={style.greeting}>
      <h1 className={style.title}>Good morning Alexander</h1>
      <h2 className={style.subtitle}>You have 20 todos today</h2>
    </div>
  )
}
export default Greeting
