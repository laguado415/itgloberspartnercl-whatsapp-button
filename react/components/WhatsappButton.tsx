import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
  background: string
  radio: number | string
}

const WhatsappButton = ({
  logo,
  phone,
  message,
  width,
  height,
  background,
  radio,
}: Props) => {
  const FORMATMESSAGE = message.replace(/ /g, '%20')

  return (
    <div
      className={`fixed bottom-2 right-2 z-2 br-${radio} bg-${background} flex flex-column`}
    >
      <a
        href={`https://wa.me/${phone}?text=${FORMATMESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} width={width} height={height} alt="whatsapp logo" />
      </a>
    </div>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  background: PropTypes.string,
  radio: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'SOY LOGO .>>>',
  phone: '+573114907517',
  message: 'HOLA MUNDO COMO VAMOS :<<<<',
  width: 80,
  height: 80,
  background: '',
  radio: 0,
}

// schema whatsapp
WhatsappButton.schema = {
  title: 'button of whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'Whatsapp logo',
      type: 'string',
      widget: {
        'iu:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Telefono',
      description: 'por favor ingresa tu numero telefonico',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'agrega por favor el mensaje que vera tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'width images',
      type: 'number',
    },
    height: {
      title: 'height images',
      type: 'number',
    },
    background: {
      title: 'background div',
      type: 'string',
      description:
        'backgroud del div contenedor solo se aceptan nombres de colores simples como yellow o blue, dark-green u otras variantes no son aceptadas',
    },
    radio: {
      title: 'border-radius div',
      type: 'string',
      enum: ['0', '100', 'pill'],
    },
  },
}

export default WhatsappButton
