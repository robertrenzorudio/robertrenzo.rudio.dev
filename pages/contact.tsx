import type { NextPage } from 'next';
import Contact from 'components/Contact';
import Container from 'components/Container';

const ContactPage: NextPage = () => {
  return (
    <Container meta={{ title: 'Contact - Robert Renzo Rudio' }}>
      <Contact />
    </Container>
  );
};

export default ContactPage;
