import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Fahmi Rizaldi">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/fahmirizaIdi">@fahmirizaldi</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/rizaldifahmi">@rizaldifahmi</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://fahmirizaldi.com">
                <a>https://fahmirizaIdi.com</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/fahmirizaldi/">
                https://www.linkedin.com/in/fahmirizaIdi
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Fahmi Rizaldi, Junior Back-End Developer</p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Fahmi. I'm Junior Back-End Developer Experience at{' '}
            <a href="https://nodejs.org/">Node.Js</a>, where I am ready to helps
            developers build a faster web. I'm passionate about back-end
            development and joining courses on React, Next.js, and web
            development.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Fahmi. I'm the Junior Back-End Developer Experience at{' '}
            <a href="https://nodejs.org/">Node.Js</a>, where I'm ready to helps
            developers build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Fahmi Rizaldi graduated from Widyatama University with a S.Kom in
            Informatics Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Fahmi Rizaldi"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Fahmi Rizaldooi"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
