/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRoute, useFocusEffect } from '@react-navigation/native';

import { format, parseISO } from 'date-fns';

import Background from '~/components/Background';
import api from '~/services/api';

import {
  Container,
  Title,
  ProblemsList,
  ProblemCard,
  ProblemText,
  DateText,
  NoProblem,
  NoProblemContainer,
} from './styles';

export default function Problems({ navigation }) {
  const route = useRoute();
  const [problems, setProblems] = useState([]);

  const deliveryID = route.params.delivery_id;

  useFocusEffect(
    React.useCallback(() => {
      async function loadProblems() {
        const response = await api.get(`/delivery/${deliveryID}/problems`);

        setProblems(response.data[2]);
      }
      loadProblems();
    }, [deliveryID]),
  );
  console.tron.log(problems);
  return (
    <Background>
      <Container>
        <Title>{`Encomenda ${deliveryID < 10 ? '0' : ''}${deliveryID}`}</Title>

        {problems.length === 0 ? (
          <NoProblemContainer>
            <NoProblem>Nenhum problema com esta encomenda</NoProblem>
          </NoProblemContainer>
        ) : (
          <ProblemsList>
            {problems.map(problem => (
              <ProblemCard key={problem.createdAt} style={{ elevation: 3 }}>
                <ProblemText>{problem.description}</ProblemText>
                <DateText>
                  {format(parseISO(problem.createdAt), 'dd/MM/yyyy')}
                </DateText>
              </ProblemCard>
            ))}
          </ProblemsList>
        )}
      </Container>
    </Background>
  );
}
