import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {

  const articles = [
    {
      image: "/assets/img/classes/img_1.jpg",
      name: "Привезли новый тренажер для негров",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi animi nam cupiditate. Dolor dolore reprehenderit temporibus aliquid iure quidem non laudantium repudiandae eligendi eum.",
    },
    {
      image: "/assets/img/classes/img_1.jpg",
      name: "Привезли нового тренера",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi animi nam cupiditate. Dolor dolore reprehenderit temporibus aliquid iure quidem non laudantium repudiandae eligendi eum.",
    },
    {
      image: "/assets/img/classes/img_1.jpg",
      name: "Привезли новую гантелю",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi animi nam cupiditate. Dolor dolore reprehenderit temporibus aliquid iure quidem non laudantium repudiandae eligendi eum.",
    },
    {
      image: "/assets/img/classes/img_1.jpg",
      name: "Привезли новую гантелю",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quasi animi nam cupiditate. Dolor dolore reprehenderit temporibus aliquid iure quidem non laudantium repudiandae eligendi eum.",
    },
  ];

  return (
    <section className="w-full bg-primary-200 py-16" id='blog'>
      <div className="container mx-auto">
        <h2 className="h2 text-center uppercase text-white mb-24">Новости клуба</h2>
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => {
           return (
            <>
              <li key={index} className="w-full h-full">
                <article className='w-full h-full border border-accent/30 rounded-md p-4'>
                  <div className="w-full h-full flex flex-col">
                    <Image src={article.image} alt="Изображение блога" width={150} height={250} className='w-full h-[250px] rounded-md object-cover mb-5' />
                    <h3 className="h3 text-left uppercase text-white mb-4">{`${article.name.length > 25 ? article.name.slice(0,25) + '...' : article.name}`}</h3>
                    <p className="text-left text-white/70 mb-5">{ article.text.length > 75 ? article.text.slice(0, 75) : article.text}...</p>
                    <Link href="" className="w-full bg-accent text-white text-center p-3 inline-block mt-auto">Подробнее</Link>
                  </div>
                </article>
              </li>
            </>
           ) 
          })}
        </ul>
      </div>
    </section>
  )
}

export default Blog
