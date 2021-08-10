import { Link } from "react-router-dom";
const BackButton = ({ path }) => {
  return (
    <>
      <Link to={path} className="app__backButton mb-5">
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.833 256-256S397.167 0 256 0zm0 490.667C126.604 490.667 21.333 385.396 21.333 256S126.604 21.333 256 21.333 490.667 126.604 490.667 256 385.396 490.667 256 490.667z" />
            <path d="M306.208 131.125c-4.167-4.167-10.917-4.167-15.083 0L173.792 248.458c-4.167 4.167-4.167 10.917 0 15.083l117.333 117.333a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.167-4.167 4.167-10.917 0-15.083L196.417 256l109.792-109.792c4.166-4.166 4.166-10.916-.001-15.083z" />
          </svg>
        </span>
        <span>Back to listing</span>
      </Link>
    </>
  );
};

export default BackButton;
