import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

//import components
import Form from '../../components/Contact/Form';
import Label from '../../components/Contact/Label';
import StyledButton from '../../components/Contact/Button';
import Input from '../../components/Contact/Input';
import Textarea from '../../components/Contact/Textarea';

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

const ContactForm = () => (
  <div>
    {/* <h3>Email Us</h3> */}
    <Form>
      <WrapperGrid>
        <Label>Nom</Label>
        <Input type="text" name="name" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Nom de l'entreprise</Label>
        <Input type="text" name="company" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Address Email</Label>
        <Input type="email" name="email" />
      </WrapperGrid>
      <WrapperGrid>
        <Label>numéro de téléphone portable</Label>
        <Input type="text" name="phone" />
      </WrapperGrid>
      {/* <WrapperGrid full>
        <Label>Intérêt</Label>

        <select name="objet" id="objet" form="objetemail">
          <option value="volvo">question 1</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </WrapperGrid> */}
      <WrapperGrid full>
        <Label>Message</Label>
        <Textarea name="message" rows="5"></Textarea>
      </WrapperGrid>
      <WrapperGrid full>
        <StyledButton>Submit</StyledButton>
      </WrapperGrid>
    </Form>
  </div>
);

export default ContactForm;
