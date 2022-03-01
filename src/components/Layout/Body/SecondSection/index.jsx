import React from 'react';
import { Container, Section } from '../../../../globalStyles';
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from './SecondSectionStyles';
import { featuresData } from '../../../../data/SecondSectionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="services">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>NOS SERVICES</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 1 + index * 0.2 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              <FeatureImageWrapper className={el.imgClass}>
                <FontAwesomeIcon icon={el.icon} size="4x" />
                {/* {el.icon} */}
              </FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Features;
