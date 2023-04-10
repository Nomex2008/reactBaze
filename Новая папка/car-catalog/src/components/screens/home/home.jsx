import CarItem from './car-item/Caritem.jsx'
import { cars } from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCartForm.jsx'
import styles from './Home.module.css'


function App ()  {
    return (
      <div>
          <h1 className={styles.title}>Cars catalog</h1>
          <CreateCarForm/>
          <div>
             {cars.length ? (cars.map(car => <CarItem key={car.id} car={car}/>
             )
            
             ) : ( <p>There are no cars</p>

            )}
          </div>
      </div>
    )
  }
  
  export default App