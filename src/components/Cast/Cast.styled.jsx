import styled from 'styled-components';

export const CastTitle = styled.h3`
  padding-left: 20px;
`;

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Actor = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 100px) / 5);
  margin: 10px;
`;

export const Foto = styled.img`
  width: 100%;
  flex-grow: 1;
`;

export const ActorInfo = styled.div`
  padding: 8px;
`;

export const InfoTitle = styled.h4`
  /* font-style: 700; */
`;
