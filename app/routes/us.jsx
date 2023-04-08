import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/us.css'

export function meta() {
  return {
    title: 'GuitarLa - Nosotros',
    description: 'informacion de la empresa'
  }
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image, 
      as: 'image'
    }
  ]
}

const Us = () => {
  return (
    <main className="container us">
      <h2 className="heading">Nosotros</h2>
      <div className="content">
        <img src={image} alt="image nosostros" />
        <div>
          <p>Se d efficitur aliquam turpis luctus pharetra. Nullam imperdiet urna vitae iaculis gravida. Vivamus aliquet, libero eu porttitor vehicula, ex mi viverra enim, id scelerisque justo nunc ac justo. Integer eleifend nibh mollis tortor euismod, vel lacinia nibh molestie. Nulla a orci dapibus, pellentesque ipsum vel, fringilla neque. Integer nisl justo, aliquam id mattis eget, tristique vel lorem. Aenean dictum, odio tempus aliquam interdum, ligula eros accumsan leo, facilisis lacinia nulla arcu sit amet erat. Aliquam accumsan tristique sapien vitae fermentum. Maecenas in erat quis ipsum lacinia malesuada sed in est. Quisque maximus, ex pulvinar porttitor tincidunt, nibh eros finibus lectus, sagittis condimentum neque lacus et magna.</p>
          <p>Sed efficitur aliquam turpis luctus pharetra. Nullam imperdiet urna vitae iaculis gravida. Vivamus aliquet, libero eu porttitor vehicula, ex mi viverra enim, id scelerisque justo nunc ac justo. Integer eleifend nibh mollis tortor euismod, vel lacinia nibh molestie. Nulla a orci dapibus, pellentesque ipsum vel, fringilla neque. Integer nisl justo, aliquam id mattis eget, tristique vel lorem. Aenean dictum, odio tempus aliquam interdum, ligula eros accumsan leo, facilisis lacinia nulla arcu sit amet erat. Aliquam accumsan tristique sapien vitae fermentum. Maecenas in erat quis ipsum lacinia malesuada sed in est. Quisque maximus, ex pulvinar porttitor tincidunt, nibh eros finibus lectus, sagittis condimentum neque lacus et magna.</p>
        </div>
      </div>
    </main>
  )
}

export default Us
