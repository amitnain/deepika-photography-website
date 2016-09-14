var React    = require('react');
var Lightbox = require('react-image-lightbox');

var images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
];

export default class LightboxImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
        isOpen: false
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }
  openLightbox() {
    this.setState({ isOpen: true });
  }
  closeLightbox() {
    this.setState({ isOpen: false });
  }
    moveNext() {
        this.setState({ index: (this.state.index + 1) % images.length });
    }
    movePrev() {
        this.setState({ index: (this.state.index + images.length - 1) % images.length });
    }
    render() {
        var lightbox = '';
        if (this.state.isOpen) {
            lightbox = (
                <Lightbox
                    mainSrc={images[this.state.index]}
                    nextSrc={images[(this.state.index + 1) % images.length]}
                    prevSrc={images[(this.state.index + images.length - 1) % images.length]}

                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={this.movePrev}
                    onMoveNextRequest={this.moveNext}
                />
            );
        }

        return (
            <div>
                <button type="button" onClick={this.openLightbox}>Open Lightbox</button>
                {lightbox}
            </div>
        );
    }
};
