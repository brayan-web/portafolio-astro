// src/components/LogoSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const cardContent = [
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/phgvshq4yjmwygoqb57o.webp',
    title: 'css 3',
    description: 'cascading styles sheets',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/b0dzfp31wjpth5s84xec.webp',
    title: 'git',
    description: 'control de versiones',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/b6drsnclncg3obbai794.webp',
    title: 'github',
    description: 'alojamiento de proyectos',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/uyvzk0vs4mvchsvzvam3.webp',
    title: 'html',
    description: 'hyper text markup lenguage',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/xpno7mgafmraoz86odmb.webp',
    title: 'javascript',
    description: 'lenguaje de programacion',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509595/logos/walknbtmvcc0ju2yu9zm.webp',
    title: 'sass',
    description: 'lenguaje de css',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509595/logos/m6glxdmmkbczhmd8crih.webp',
    title: 'vue',
    description: 'framewor de js para el diseño de interfaces',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1706123577/logos/ghjtxad3p3vuunvjyeu4.png',
    title: 'amazon web services',
    description: 'servicio de computacion en la nube',
    width: '134',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/yhnrqfgnxwfpw4uxsea7.webp',
    title: 'bootstrap',
    description: 'biblioteca para el diseño de paginas',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509595/logos/l5gpw5xzy1f1dbsbp6qs.webp',
    title: 'tailwind',
    description: 'framework de css para diseño de paginas',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/k3qqkpmiczmphvgukspm.webp',
    title: 'react',
    description: 'libreria de javascript ops',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/wgrnwseakperpnpn63ps.webp',
    title: 'photoshop',
    description: 'editor de fotografias',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/yxpxy5hm3t8vfdwdxwmf.webp',
    title: 'npm',
    description: 'node package modules',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509594/logos/es1ox4uluzolfzhtofd9.webp',
    title: 'jira',
    description: 'jira gestion de proyectos',
    width: '150',
    height: '70',
  },
  {
    img: 'https://res.cloudinary.com/djvitvb1v/image/upload/v1705509595/logos/od5fawnr5uuch20tz4ad.webp',
    title: 'astro',
    description: 'framework astro build',
    width: '150',
    height: '70',
  },
];

export default function LogoSlider() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={24}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 1, disableOnInteraction: false }}
      freeMode={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="my-6"
      speed={2000}
    >
      {cardContent.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-200 p-4 h-24 flex items-center justify-center rounded-lg">
            <img
              src={item.img}
              alt={item.title}
              title={item.description}
              width={item.width || 100}
              height={item.height || 70}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}