
const SocialButton = () => {
  const socialButtons = [
    {
      img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-5.png',
      url: 'https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr',
      ref: 'Icons facebook',
    },
    {
      img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-5.png',
      url: 'https://github.com/franchescafernanda',
      ref: 'Icons github',
    },
    {
      img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-5.png',
      url: 'https://www.linkedin.com/in/franchesca-fernanda-rivera-chiguay-7b9839292/',
      ref: 'Icons linkedin',
    },
  ];

  return (
    <div className="my-3 text-center">
      <div className="d-flex justify-content-center">
        {socialButtons.map((button, index) => (
          <a key={index} href={button.url} target="_blank" rel="noopener noreferrer">
            <img src={button.img} alt={button.ref} className="mx-2" style={{ width: '40px', height: '40px' }} />
          </a>
        ))}
      </div>
      <h5 classNames="mb-3">O crea una cuenta con:</h5>
    </div>
  );
};

export default SocialButton;