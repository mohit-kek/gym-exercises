import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Components/Detail'
import ExercisesVideos from '../Components/ExercisesVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails
