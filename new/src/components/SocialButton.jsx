import React from 'react'

const SocialButton ({btn}) => {
  {
    img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-5.png';
    url: 'https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr';
    ref: 'Icons facebook';
  };
  {
    img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-5.png';
    url: 'https://github.com/franchescafernanda';
    ref: 'Icons github';
  };
  {
    img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-5.png';
    url: 'https://www.linkedin.com/in/franchesca-fernanda-rivera-chiguay-7b9839292/';
    ref: 'Icons linkedin';
  };

return (
  <div>
    <main>
      <h1>Crea una cuenta</h1>
    </main>
    <SocialButton buttons={btn}/>
  </div>
)
}

export default SocialButton
