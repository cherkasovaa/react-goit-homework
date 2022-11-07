import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalStyled, OverlayStyled } from './styles';

export const Modal = ({ path, alt, onClose }) => {
  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <OverlayStyled onClick={handleClick}>
      <ModalStyled>
        <img src={path} alt={alt} />
      </ModalStyled>
    </OverlayStyled>
  );
};

// export class Modal extends Component {
//   componentDidMount = () => {
//     window.addEventListener('keydown', this.handleKeyDown);
//   };

//   componentWillUnmount = () => {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { path, alt } = this.props;
//     return (
//       <OverlayStyled onClick={this.handleClick}>
//         <ModalStyled>
//           <img src={path} alt={alt} />
//         </ModalStyled>
//       </OverlayStyled>
//     );
//   }
// }

Modal.defaultProps = {
  onClose: () => null,
  path: '',
  alt: '',
};

Modal.propTypes = {
  onClose: PropTypes.func,
  path: PropTypes.string,
  alt: PropTypes.string,
};
