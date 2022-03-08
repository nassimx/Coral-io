import React, { useEffect, useState } from 'react';
import { Container, Section } from '../../../../globalStyles';
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from './ClientSection.Styled';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase-config';

export const ClientsSection = (
  {
    // primary,
    // topLine,
    // headline,
    // description,
    // buttonLabel,
    // img,
    // alt,
    // inverse,
    // reverse,
  }
) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  const [sectionClients, setSectionClients] = useState([]);
  const section3CollectionRef = collection(db, 'clients-section');
  useEffect(() => {
    const getSection3Data = async () => {
      const data = await getDocs(section3CollectionRef);
      setSectionClients(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getSection3Data();
  }, []);

  return (
    <>
      {sectionClients.map((el, index) => {
        return (
          <>
            <Section inverse={el.inverse} ref={ref} id="clients" key={index}>
              <Container>
                <ContentRow reverse={el.reverse}>
                  <ContentColumn>
                    <TextWrapper>
                      <TopLine
                        initial={initial}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        animate={animation}
                      >
                        {el.topLine}
                      </TopLine>
                      <Heading
                        initial={initial}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        animate={animation}
                        inverse={el.inverse}
                      >
                        {el.headline}
                      </Heading>
                      <Subtitle
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={el.inverse}
                      >
                        {el.description}
                      </Subtitle>
                      <Link to="/clients">
                        <ContentButton
                          initial={initial}
                          transition={{ delay: 1, duration: 0.6 }}
                          animate={animation}
                          inverse={el.inverse}
                        >
                          {el.buttonLabel}
                        </ContentButton>
                      </Link>
                    </TextWrapper>
                  </ContentColumn>
                  <ContentColumn
                    initial={initial}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    animate={animation}
                  >
                    <ImgWrapper>
                      <Img
                        src={el.img}
                        // alt={alt}
                        whileHover={{ rotate: 2, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </ImgWrapper>
                  </ContentColumn>
                </ContentRow>
              </Container>
            </Section>
          </>
        );
      })}
    </>
  );
};
