import Meta from "../../components/Meta";
import sent from '../../assets/images/sent.svg'
import Hero from '../../components/Hero'

const hero = [
  {
    title: 'Message',
    subtitle: 'Sent successfully!',
    description: 'Thank you for contacting me. I will get back to you as soon as possible.',
    image: require('../../assets/images/sent.svg').default,
    alt: 'Message Sent successfully',
    btn: '',
    btn2: '',
    link: '',
    link2: ''
  }
]

const Success = () => {

  return (
    <>
      <Meta title='Message Success | Mobile friendly websites, Web design, Web development in Ireland Remote | I am Mobile Friendly' />
      <Hero data={hero[0]} />
    </>
  )
}
export default Success
