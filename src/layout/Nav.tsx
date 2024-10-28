import { useNavigate } from 'react-router-dom';
import { navLinks } from '../utils/constants';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="ml-10 mt-5 space-x-10 cursor-pointer">
        {navLinks.map((d, i) => {
          return (
            <button onClick={() => navigate(d.route)} key={i}>
              {d.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
