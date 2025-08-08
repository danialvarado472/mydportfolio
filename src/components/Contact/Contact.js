/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import './Contact.css'
import { contact } from '../../portfolio'

const Contact = ({ language }) => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleToggleForm = () => {
    setShowForm(!showForm)
    setIsSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_7oiqq3a',
        'template_xbzds57',
        formData,
        'KzAoDKV8LXSExesTc'
      )
      .then(
        () => {
          setIsSent(true)
          setFormData({ name: '', email: '', phone: '', message: '' })
        },
        (error) => {
          console.error('Error al enviar:', error.text)
        }
      )
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{contact.title[language]}</h2>

      {/* ICONOS */}
      <div className='contact__icons'>
        <a
          href='https://github.com/danialvarado472'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub className='contact__icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/daniela-alvarado-nagygeller-b33534379/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin className='contact__icon' />
        </a>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&to=danialvarado472@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Gmail'
          >
          <FaEnvelope className='contact__icon' />
          </a>
      </div>

      {/* BOTÓN */}
      <button
        type='button'
        className='btn btn--outline'
        onClick={handleToggleForm}
      >
        {language === 'es' ? 'Contacto' : 'Contact'}
      </button>

      {/* FORMULARIO */}
      {showForm && (
        <form className='contact__form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Nombre / Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Correo / Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Teléfono / Phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            rows='5'
            placeholder='Mensaje / Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type='submit' className='btn btn--outline'>
            {language === 'es' ? 'Enviar' : 'Send'}
          </button>

          {isSent && (
            <p className='contact__success'>
              {language === 'es'
                ? 'Mensaje enviado con éxito 🎉'
                : 'Message sent successfully 🎉'}
            </p>
          )}
        </form>
      )}
    </section>
  )
}

export default Contact
