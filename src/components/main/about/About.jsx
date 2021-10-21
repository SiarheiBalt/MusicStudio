import cl from './About.module.css';

const About = () => {
  const title = 'Музыкальная студия BestSound';
  const text = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eos.
  Provident voluptas maiores laboriosam. Quasi, autem beatae fugiat
  dolorum neque libero iure sed error tenetur, excepturi temporibus
  ratione? Fuga numquam ea ex ipsam distinctio recusandae beatae eum
  quia veritatis corporis, atque omnis quibusdam. Blanditiis ipsam
  excepturi porro sint possimus delectus ut dolores fugit eius, dolorem,
  voluptates, quos laboriosam voluptatibus aliquam explicabo amet
  repellat quidem tempore temporibus. Perferendis veritatis voluptas,
  provident debitis rerum obcaecati, illum omnis maiores impedit tempora
  ab molestias numquam repellat dolorem laboriosam quisquam iure porro
  dolore distinctio. Aliquid ullam repellendus expedita qui id ab animi
  sunt, repudiandae iste, quae omnis minima placeat? Ipsa maiores
  tenetur itaque. Quis illum alias vero soluta fugiat nostrum id quos,
  itaque magni architecto!'`;

  return (
    <div className={cl.about}>
      <h2 className={cl.title}>{title}</h2>
      <div className={cl.information}>
        <span className={cl.text}>{text}</span>
      </div>
    </div>
  );
};

export default About;
