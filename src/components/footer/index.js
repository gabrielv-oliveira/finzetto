import { Component } from "./styles";
import contact from '../../data/contact.json';
import tags from '../../data/tags.json';
import links from '../../data/links.json';
import { Tags } from "./tags";
import { Links } from "./links";

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export function Footer() {
  const data = tags.tags;
  const randomQuestions = getRandomItems(data, 4);
  const link = links.links;
  return (
    <Component>

      <div className="content">
        <div className="company">
          <img src="/logo.png" alt="logo" />
          <p>Nosso compromisso é oferecer aos clientes soluções de segurança cibernética excepcionais, destacando-nos por meio de abordagens ágeis, inteligentes e inovadoras.</p>
        </div>
        <div>
          <h2>Links Úteis</h2>
          {link.map(link => (
            <Links
              key={link.page}
              page={link.page}
              url={link.url}
            />
          ))}

        </div>
        <div>
          <h2>Soluções</h2>
          {randomQuestions.map((tags, index) => (
            <Tags
              key={index}
              tags={tags.title}
              description={tags.description}
            />
          ))}
        </div>
        <div className="flex-center">
          <h2>Fale Conosco</h2>
          <ul className="contact">
            <li>
              <a href={contact.map} rel="noreferrer" target="_blank" title='Localização'>
                <i class="fa fa-map-marker fa-4x"></i>{contact.location}</a>
            </li>

            <li>
              <a href={`tel:+55${contact.phone}`} rel="noreferrer" target="_blank" title='Telefone'>
                <i class="fa fa-phone fa-4x"></i>{contact.phone}</a>
            </li>
            <li></li>
          </ul>
          <ul className="social">
            <li><a href={contact.linkedin} rel="noreferrer" target="_blank" title='LinkedIn'>
              <i class="fa fa-linkedin fa-4x icon-3d"></i></a>
            </li>
            <li><a href={contact.instagram} rel="noreferrer" target="_blank" title='Instagram'>
              <i class="fa fa-instagram fa-4x icon-3d"></i></a>
            </li>
            <li><a href={contact.whatsapp} rel="noreferrer" target="_blank" title='whatsapp'>
              <i class="fa fa-whatsapp fa-4x icon-3d"></i></a>
            </li>
            <li><a href={contact.certifacation} rel="noreferrer" target="_blank" title='Certificações'>
              <i class="fa fa-certificate fa-4x icon-3d"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>Finzetto Cybersecurity Todos os direitos reservados | Desenvolvido por <a href="http://gabrielvoliveira.com" rel="noreferrer" target="_blank"><span>Gabriel Oliveira</span></a></p>
      </div>
    </Component>
  )
}