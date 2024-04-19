import { FC } from "react";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return <div>Something went wrong: {message}</div>;
};

export default Error;
