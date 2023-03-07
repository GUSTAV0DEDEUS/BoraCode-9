//https://www.youtube.com/watch?v=RF57yDglDfE video sobre chartJS
//https://www.youtube.com/watch?v=hqNvvMlJuww video usando

import styles from './styles.module.css'

function HomePage(){
  return(
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.inputContent}>
            <h2>Conversor de moedas</h2>
        </div>
        <div className={styles.chartContent}>
            <h2>Taxa de câmbio</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage