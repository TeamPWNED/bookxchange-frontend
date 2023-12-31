'use client';
import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from '@/components/container/Container';
import { media } from '@/utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'BOOKXCHANGE',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'CATEGORIES',
    items: [
      { title: 'Educational', href: '#' },
      { title: 'Preperations', href: '#' },
      { title: 'Literature', href: '#' },
      { title: 'Fiction', href: '#' },
      { title: 'History', href: '#' },
    ],
  },
  {
    title: 'QUICK LINKS',
    items: [
      { title: 'About', href: '/about' },
      { title: 'Store', href: '/store' },
      { title: 'Contact', href: '/contact' },
      { title: 'Dashboard', href: '#' },
    ],
  },
  {
    title: 'Something',
    items: [
      { title: 'Features2', href: '/features2' },
      { title: 'Something2', href: '/something2' },
      { title: 'Something else2', href: '/something-else2' },
      { title: 'And something else2', href: '/and-something-else2' },
    ],
  },
];
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='p-10 bg-black text-white z-10'>
      <Container>

        <div className="flex flex-row flex-wrap justify-between">
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </div>

        <div className="mt-10 gap-2 flex flex-col justify-between items-center sm:flex-row">
          <div className='flex gap-5'>
            <NextLink href="https://www.twitter.com" passHref>
              <p>
                <TwitterIcon size={30} round={true} />
              </p>
            </NextLink>

            <NextLink href="https://www.facebook.com" passHref>
              <p>
                <FacebookIcon size={30} round={true} />
              </p>
            </NextLink>

            <NextLink href="https://www.linkedin.com" passHref>
              <p>
                <LinkedinIcon size={30} round={true} />
              </p>
            </NextLink>
          </div>
          <p className='text-base md:text-1xl'>&copy; Copyright {currentYear} All Right Reserved.  </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <h1 className='font-bold text-2xl mb-5'>{title}</h1>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <div className='text-base'>
      <NextLink href={href} passHref className='no-underline text-white-500'>
        <p>{title}</p>
      </NextLink>
    </div>
  );
}


const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-right: 2rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;