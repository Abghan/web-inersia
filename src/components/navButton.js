import { useNavigate } from 'react-router-dom';

export const NavButton = (props) => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-primary" onClick={() => navigate(props.navTo)}>
      Learn More <i className="fas fa-chevron-right"></i>
    </button>
  );
};
