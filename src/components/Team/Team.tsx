"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const trainers = [
  {
    img: '/assets/img/teams/img_1.jpg',
    name: 'Efrev Olegov',
    role: 'Мисс Олимпия',
    desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore nihil aspernatur impedit neque delectus?',
    socials: [
      { icon:  FaFacebook, href: 'http.facebook.com' },
      { icon:  FaInstagram, href: 'http.facebook.com' },
      { icon:  FaTwitter, href: 'http.facebook.com' },
    ],
  },
  {
    img: '/assets/img/teams/img_2.jpg',
    name: 'Pavel Glebov',
    role: 'Мисстер Олимпия',
    desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore nihil aspernatur impedit neque delectus?',
    socials: [
      { icon:  FaFacebook, href: 'http.facebook.com' },
      { icon:  FaInstagram, href: 'http.facebook.com' },
      { icon:  FaTwitter, href: 'http.facebook.com' },
    ],
  },
  {
    img: '/assets/img/teams/img_3.jpg',
    name: 'War Thunder',
    role: 'Танк Олимпии',
    desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore nihil aspernatur impedit neque delectus?',
    socials: [
      { icon:  FaFacebook, href: 'http.facebook.com' },
      { icon:  FaInstagram, href: 'http.facebook.com' },
      { icon:  FaTwitter, href: 'http.facebook.com' },
    ],
  },
];

const Team = () => {
  return (
    <section className="w-full py-16" id='team'>
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="h2 text-center mb-6">Наши тренера</h2>
          {trainers.map((trainer, index) => {
            return (
              <>
                <div key={index}>
                  <div className="relative w-full h-[320px]">
                    <Image fill src={trainer.img}  alt={`Фото тренера ${trainer.name}`} className='object-cover' />
                  </div>
                  <h4 className=''>{trainer.name}</h4>
                  <p className=''>{trainer.role}</p>
                  <p className=''>{trainer.desription}</p>
                  <ul className=''>
                    {trainer.socials.map((social, index) => {
                      return (
                        <li key={index}>
                          <Link href={social.href} target='_blank' className=''>
                            <social.icon />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
