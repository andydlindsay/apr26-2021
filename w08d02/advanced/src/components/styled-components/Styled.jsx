import styled from 'styled-components';
import MyOwnComponent from './MyOwnComponent';

const Styled = () => {
  const Header2 = styled.h2`
    color: pink;
    text-decoration: underline;
  `;

  const Lightning = styled.p`
    color: ${props => props.garish ? 'yellow' : 'salmon'};
    background-color: black;
  `;

  const Wrapped = styled(MyOwnComponent)`
    border: 2px solid orange;
    color: cadetblue;
  `;

  return (
    <div>
      <h2>Styled</h2>
      <Header2>How do I look?</Header2>
      <Lightning garish>Example #1</Lightning>
      <Lightning>Not garish</Lightning>

      <MyOwnComponent>Not styled</MyOwnComponent>
      <Wrapped>This one is wrapped</Wrapped>
    </div>
  );
};

export default Styled;
