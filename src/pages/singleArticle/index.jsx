import React from 'react';
import { useParams } from 'react-router-dom';
import Main from '../articalPage/components/Main';
import { cardData } from '../../components/dummyData';

const SingleArticle = () => {
  const { id } = useParams();
  const article = cardData[id];
  console.log(id);
  console.log(article)

  return (
    <>
      <Main article={article} />
    </>
  );
};

export default SingleArticle;
