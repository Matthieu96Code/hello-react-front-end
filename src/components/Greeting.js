import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

function Greeting() {
  const { message, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return <h1>{message}</h1>;
}

export default Greeting;
