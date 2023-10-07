import './nofound.css'

function Nofound() {

    const svg = '../../public/img/error404.svg'
  return (
    <div className='container__404'>
        <div className='error'>
            <img src={svg} alt="Error-404" />
            <span className='leyend__error'>Pagina No encontrada</span>
        </div>        
    </div>
  )
}

export default Nofound
