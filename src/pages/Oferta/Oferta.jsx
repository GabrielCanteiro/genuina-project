import React from 'react'
import './Oferta.css'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import {RxCopy} from 'react-icons/rx'
import Swal from 'sweetalert2'

import stdLogo from '../../assets/logo_santander.png'
import pagsegLogo from '../../assets/pagseguro_logo.png'
import paypalLogo from '../../assets/logo_paypal.png'
import { Link } from 'react-router-dom'


const Oferta = () => {
  const paypalLink = 'https://www.paypal.com/donate/?hosted_button_id=3GXDZHGHENE5E'

  function copied(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Copiado para área de transferência'
    })
  }


  return (
    <div className='container__oferta'>

    <p className='oferta__text'>
    "Ora, aquele que dá a semente ao que semeia, também vos dê pão para comer, e multiplique a vossa sementeira, e aumente os frutos da vossa justiça;" - 2 Coríntios 9:10
    </p>

      <div className="card__oferta">
        <div className="card__oferta_logo">
          <img src={stdLogo}/>
        </div>
        <span></span>
        <div className="card__oferta_content">
        <h3>Transferência Bancária</h3>
        <div className="card__oferta_dados">
          <i>
          <p>Ag: 0040</p>
            <CopyToClipboard text='0040'>
              <RxCopy className='copy' onClick={copied}/>
            </CopyToClipboard>
          </i>

          <i>
          <p>CC: 000130090528</p>
            <CopyToClipboard text='000130090528'>
              <RxCopy className='copy' onClick={copied}/>
            </CopyToClipboard>
          </i>

        </div>
        </div>
      </div>

      <div className="card__oferta">
        <div className="card__oferta_logo">
          <img src={pagsegLogo}/>
        </div>
        <span></span>
        <div className="card__oferta_content">
        <h3>PIX</h3>
        <div className="card__oferta_dados">
          <i>
          <p>CNPJ: 23.106.496/0001-88</p>
            <CopyToClipboard text='23.106.496/0001-88'>
              <RxCopy className='copy' onClick={copied}/>
            </CopyToClipboard>
          </i>
          
        </div>
        </div>
      </div>

      <div className="card__oferta">
        <div className="card__oferta_logo">
          <img src={paypalLogo}/>
        </div>
        <span></span>
        <div className="card__oferta_content">
        <h3>Outros meios de pagamento</h3>
        <div className="card__oferta_dados paypal">
          <Link to={paypalLink} target='blank'>
          <button>
            <h2>Doar com PayPal</h2>
          </button> 
          </Link>        
        </div>
        </div>
      </div>

    </div>
  )
}

export default Oferta