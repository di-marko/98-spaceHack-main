import './GitButton.scss';

const GitButton = () => {
  return (
    <>
      <button className="git-button">
        <a href="https://github.com/di-marko/98-spaceHack" target="_blank" className="git-button__link">
          <i className="fa-brands fa-github"></i>
        </a>
      </button>
    </>
  );
};

export default GitButton;
